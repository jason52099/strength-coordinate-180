(function () {
  const bank = window.STRENGTHS_BANK;
  const logic = window.STRENGTHS_LOGIC;
  if (!bank || !logic) throw new Error("测评数据未加载");

  const APP_VERSION = "1.0.0";
  const CONFIG = {
    contactUrl: "",
    contactLabel: "预约优势解读",
  };
  const STORAGE_KEY = "strengths-coordinate-180-v1";
  const totalPages = Math.ceil(bank.questions.length / bank.pageSize);

  const elements = {
    introScreen: document.getElementById("intro-screen"),
    quizScreen: document.getElementById("quiz-screen"),
    resultScreen: document.getElementById("result-screen"),
    nickname: document.getElementById("nickname"),
    startButton: document.getElementById("start-button"),
    resumePanel: document.getElementById("resume-panel"),
    resumeCopy: document.getElementById("resume-copy"),
    resumeButton: document.getElementById("resume-button"),
    pageCount: document.getElementById("page-count"),
    completionCount: document.getElementById("completion-count"),
    progressTrack: document.getElementById("progress-track"),
    progressFill: document.getElementById("progress-fill"),
    pageTitle: document.getElementById("page-title"),
    questionBatch: document.getElementById("question-batch"),
    prevButton: document.getElementById("prev-button"),
    nextButton: document.getElementById("next-button"),
    nextLabel: document.getElementById("next-label"),
    pageHint: document.getElementById("page-hint"),
    saveExitButton: document.getElementById("save-exit-button"),
    resultGreeting: document.getElementById("result-greeting"),
    resultType: document.getElementById("result-type"),
    resultLead: document.getElementById("result-lead"),
    signatureList: document.getElementById("signature-list"),
    domainGrid: document.getElementById("domain-grid"),
    environmentNote: document.getElementById("environment-note"),
    themeCards: document.getElementById("theme-cards"),
    rankingDetails: document.getElementById("ranking-details"),
    rankingTable: document.getElementById("ranking-table"),
    downloadButton: document.getElementById("download-button"),
    copyButton: document.getElementById("copy-button"),
    contactButton: document.getElementById("contact-button"),
    restartButton: document.getElementById("restart-button"),
    versionLabel: document.getElementById("version-label"),
  };

  const state = {
    nickname: "",
    currentPage: 0,
    answers: Array(bank.questions.length).fill(null),
    result: null,
    hasSavedProgress: false,
  };

  function showScreen(name) {
    [elements.introScreen, elements.quizScreen, elements.resultScreen].forEach((screen) => {
      const isTarget = screen.id === `${name}-screen`;
      screen.hidden = !isTarget;
      screen.classList.toggle("is-active", isTarget);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function safeSave() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          nickname: state.nickname,
          currentPage: state.currentPage,
          answers: state.answers,
          savedAt: new Date().toISOString(),
        }),
      );
    } catch (error) {
      // 本地保存失败不影响继续作答。
    }
  }

  function clearSaved() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      // 忽略浏览器存储限制。
    }
    state.hasSavedProgress = false;
  }

  function loadSaved() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return false;
      const saved = JSON.parse(raw);
      if (!Array.isArray(saved.answers) || saved.answers.length !== bank.questions.length) return false;
      state.nickname = typeof saved.nickname === "string" ? saved.nickname : "";
      state.answers = saved.answers.map((value) => (Number.isInteger(value) && value >= 1 && value <= 5 ? value : null));
      state.currentPage = Number.isInteger(saved.currentPage)
        ? Math.max(0, Math.min(totalPages - 1, saved.currentPage))
        : 0;
      elements.nickname.value = state.nickname;
      state.hasSavedProgress = state.answers.some((answer) => answer !== null);
      return state.hasSavedProgress;
    } catch (error) {
      return false;
    }
  }

  function updateResumePanel() {
    const completed = logic.completionCount(bank, state.answers);
    elements.resumePanel.hidden = !state.hasSavedProgress;
    if (!state.hasSavedProgress) return;
    const isComplete = completed === bank.questions.length;
    elements.resumeCopy.textContent = isComplete
      ? "180 题已完成，可以继续查看上次生成的报告。"
      : `已完成 ${completed} / ${bank.questions.length} 题，作答记录保存在本机浏览器。`;
    elements.resumeButton.textContent = isComplete ? "查看上次报告" : "继续填写";
    elements.startButton.querySelector("span").textContent = "重新开始测评";
  }

  function resetAnswers() {
    state.answers = Array(bank.questions.length).fill(null);
    state.currentPage = 0;
    state.result = null;
  }

  function updateQuizStatus() {
    const completed = logic.completionCount(bank, state.answers);
    const pageStart = state.currentPage * bank.pageSize;
    const pageEnd = Math.min(pageStart + bank.pageSize, bank.questions.length);
    const pageAnswers = state.answers.slice(pageStart, pageEnd);
    const pageComplete = pageAnswers.every((answer) => answer !== null);

    elements.pageCount.textContent = `第 ${state.currentPage + 1} / ${totalPages} 页`;
    elements.completionCount.textContent = `已完成 ${completed} / ${bank.questions.length}`;
    elements.progressTrack.setAttribute("aria-valuenow", String(completed));
    elements.progressFill.style.width = `${(completed / bank.questions.length) * 100}%`;
    elements.prevButton.disabled = state.currentPage === 0;
    elements.nextButton.disabled = !pageComplete;
    elements.nextLabel.textContent = state.currentPage === totalPages - 1 ? "生成优势报告" : "下一页";
    elements.pageHint.textContent = pageComplete
      ? "本页已完成"
      : `本页还差 ${pageAnswers.filter((answer) => answer === null).length} 题`;
  }

  function buildScale(question, questionIndex) {
    const scale = document.createElement("div");
    scale.className = "scale-list";
    scale.setAttribute("role", "group");
    scale.setAttribute("aria-label", `${question.id} 评分`);

    bank.scale.forEach((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "scale-button";
      button.classList.toggle("is-selected", state.answers[questionIndex] === item.value);
      button.setAttribute("aria-pressed", String(state.answers[questionIndex] === item.value));
      button.setAttribute("aria-label", `${question.id} ${item.value}，${item.label}`);

      const number = document.createElement("span");
      number.className = "scale-number";
      number.textContent = item.value;
      const label = document.createElement("span");
      label.className = "scale-label";
      label.textContent = item.label;
      button.append(number, label);
      button.addEventListener("click", () => selectAnswer(questionIndex, item.value));
      scale.append(button);
    });
    return scale;
  }

  function renderPage() {
    const start = state.currentPage * bank.pageSize;
    const end = Math.min(start + bank.pageSize, bank.questions.length);
    elements.pageTitle.textContent = `第 ${start + 1}–${end} 题`;
    elements.questionBatch.replaceChildren();

    bank.questions.slice(start, end).forEach((question, localIndex) => {
      const questionIndex = start + localIndex;
      const card = document.createElement("article");
      card.className = "question-item";
      card.classList.toggle("is-answered", state.answers[questionIndex] !== null);
      card.dataset.index = String(questionIndex);

      const head = document.createElement("div");
      head.className = "question-item-head";
      const number = document.createElement("span");
      number.className = "question-item-number";
      number.textContent = question.id;
      const text = document.createElement("p");
      text.className = "question-item-text";
      text.id = `question-${questionIndex}`;
      text.textContent = question.text;
      head.append(number, text);

      const scale = buildScale(question, questionIndex);
      scale.setAttribute("aria-labelledby", text.id);
      card.append(head, scale);
      elements.questionBatch.append(card);
    });

    updateQuizStatus();
    safeSave();
  }

  function selectAnswer(questionIndex, value) {
    state.answers[questionIndex] = value;
    const card = elements.questionBatch.querySelector(`[data-index="${questionIndex}"]`);
    if (card) {
      card.classList.add("is-answered");
      Array.from(card.querySelectorAll(".scale-button")).forEach((button, index) => {
        const isSelected = index + 1 === value;
        button.classList.toggle("is-selected", isSelected);
        button.setAttribute("aria-pressed", String(isSelected));
      });
    }
    updateQuizStatus();
    safeSave();
  }

  function startNew() {
    const hasProgress = state.hasSavedProgress;
    if (hasProgress && !window.confirm("重新开始会清空当前保存在本机的作答，是否继续？")) return;
    clearSaved();
    resetAnswers();
    state.nickname = elements.nickname.value.trim();
    showScreen("quiz");
    renderPage();
  }

  function resume() {
    state.nickname = elements.nickname.value.trim() || state.nickname;
    const completed = logic.completionCount(bank, state.answers);
    if (completed === bank.questions.length) {
      showResult();
      return;
    }
    const firstIncomplete = logic.firstIncompleteIndex(bank, state.answers);
    if (firstIncomplete >= 0 && state.answers.slice(state.currentPage * bank.pageSize, (state.currentPage + 1) * bank.pageSize).every(Boolean)) {
      state.currentPage = Math.floor(firstIncomplete / bank.pageSize);
    }
    showScreen("quiz");
    renderPage();
  }

  function previousPage() {
    if (state.currentPage === 0) return;
    state.currentPage -= 1;
    safeSave();
    renderPage();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function nextPage() {
    const start = state.currentPage * bank.pageSize;
    const end = Math.min(start + bank.pageSize, bank.questions.length);
    if (!state.answers.slice(start, end).every(Boolean)) return;
    if (state.currentPage < totalPages - 1) {
      state.currentPage += 1;
      safeSave();
      renderPage();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (logic.completionCount(bank, state.answers) !== bank.questions.length) {
      const first = logic.firstIncompleteIndex(bank, state.answers);
      state.currentPage = Math.floor(first / bank.pageSize);
      renderPage();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    showResult();
  }

  function formatRelative(position) {
    return `前 ${Math.round(position * 100)}%`;
  }

  function renderDomains(result) {
    elements.domainGrid.replaceChildren();
    result.domainScores.forEach((domain) => {
      const card = document.createElement("article");
      card.className = "domain-card";
      card.dataset.domain = domain.key;
      const label = document.createElement("strong");
      label.textContent = domain.label;
      const value = document.createElement("span");
      value.textContent = `${domain.score.toFixed(1)}%`;
      const track = document.createElement("div");
      track.className = "domain-bar-track";
      const fill = document.createElement("i");
      track.append(fill);
      const rank = document.createElement("small");
      rank.textContent = domain.rank === 1 ? "当前最突出" : `能量排序 ${domain.rank}`;
      card.append(label, value, track, rank);
      elements.domainGrid.append(card);
      requestAnimationFrame(() => {
        fill.style.width = `${domain.score}%`;
      });
    });
  }

  function renderThemeCards(result) {
    elements.themeCards.replaceChildren();
    result.topFive.forEach((theme) => {
      const card = document.createElement("article");
      card.className = "theme-card";

      const head = document.createElement("div");
      head.className = "theme-card-head";
      const rank = document.createElement("span");
      rank.className = "theme-rank";
      rank.textContent = String(theme.rank).padStart(2, "0");
      const titleWrap = document.createElement("div");
      titleWrap.className = "theme-title";
      const title = document.createElement("h3");
      title.textContent = theme.name;
      const line = document.createElement("p");
      line.textContent = theme.oneLiner;
      const scores = document.createElement("div");
      scores.className = "theme-score-line";
      scores.append(
        Object.assign(document.createElement("span"), { textContent: `得分 ${theme.score.toFixed(1)}%` }),
        Object.assign(document.createElement("span"), { textContent: `相对位置 ${formatRelative(theme.relativePosition)}` }),
      );
      titleWrap.append(title, line, scores);
      const chip = document.createElement("span");
      chip.className = "domain-chip";
      chip.textContent = theme.domainLabel;
      head.append(rank, titleWrap, chip);

      const summary = document.createElement("p");
      summary.className = "theme-summary";
      summary.textContent = theme.summary;

      const detailGrid = document.createElement("div");
      detailGrid.className = "theme-detail-grid";
      const looks = document.createElement("div");
      looks.className = "detail-block";
      looks.innerHTML = "<h4>在生活里可能表现为</h4>";
      const looksList = document.createElement("ul");
      theme.looksLike.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        looksList.append(li);
      });
      looks.append(looksList);

      const watch = document.createElement("div");
      watch.className = "detail-block";
      const watchTitle = document.createElement("h4");
      watchTitle.textContent = "需要留意的盲点";
      const watchText = document.createElement("p");
      watchText.textContent = theme.watchout;
      watch.append(watchTitle, watchText);
      detailGrid.append(looks, watch);

      const action = document.createElement("div");
      action.className = "theme-actions";
      const actionBlock = document.createElement("div");
      actionBlock.className = "detail-block";
      const actionTitle = document.createElement("h4");
      actionTitle.textContent = "把它用好的一个建议";
      const actionText = document.createElement("p");
      actionText.textContent = theme.action;
      actionBlock.append(actionTitle, actionText);
      action.append(actionBlock);

      card.append(head, summary, detailGrid, action);
      elements.themeCards.append(card);
    });
  }

  function renderRanking(result) {
    elements.rankingTable.replaceChildren();
    result.rankedThemes.forEach((theme) => {
      const row = document.createElement("div");
      row.className = "ranking-row";
      const rank = document.createElement("span");
      rank.textContent = String(theme.rank).padStart(2, "0");
      const name = document.createElement("span");
      name.textContent = theme.name;
      const domain = document.createElement("span");
      domain.className = "ranking-domain";
      domain.textContent = theme.domainLabel;
      const line = document.createElement("div");
      line.className = "ranking-line";
      const fill = document.createElement("i");
      fill.style.width = `${theme.score}%`;
      line.append(fill);
      const score = document.createElement("strong");
      score.textContent = `${theme.score.toFixed(1)}%`;
      const position = document.createElement("small");
      position.textContent = formatRelative(theme.relativePosition);
      row.append(rank, name, domain, line, score, position);
      elements.rankingTable.append(row);
    });
  }

  function showResult() {
    const result = logic.calculateResult(bank, state.answers);
    state.result = result;
    state.nickname = state.nickname || elements.nickname.value.trim();
    safeSave();

    const topNames = result.topFive.map((theme) => theme.name);
    elements.resultGreeting.textContent = state.nickname
      ? `${state.nickname}，这份优势报告写给你。`
      : "这份优势报告写给你。";
    elements.resultType.textContent = result.specificType;
    elements.resultLead.textContent = `你的前五项优势是「${topNames.join("、")}」。它们组成了你更自然的发力方式。优势没有固定标准，关键在于能否用在合适的位置。`;
    elements.signatureList.replaceChildren();
    topNames.forEach((name) => {
      const chip = document.createElement("span");
      chip.textContent = name;
      elements.signatureList.append(chip);
    });

    renderDomains(result);
    elements.environmentNote.textContent = `你更容易发挥的环境：${result.dominantDomain.environment}。这不代表其他环境不能胜任，而是说在这种环境里，你可能更省力、更自然地做出成果。`;
    renderThemeCards(result);
    renderRanking(result);
    elements.rankingDetails.open = false;

    elements.contactButton.hidden = !CONFIG.contactUrl;
    if (CONFIG.contactUrl) {
      elements.contactButton.href = CONFIG.contactUrl;
      elements.contactButton.textContent = CONFIG.contactLabel;
    }

    showScreen("result");
  }

  function reportText() {
    const result = state.result;
    const lines = [
      "优势坐标｜180题个人优势测评",
      state.nickname ? `${state.nickname}的优势报告` : "我的优势报告",
      "",
      `具体类型：${result.specificType}`,
      `前五优势：${result.topFive.map((theme) => theme.name).join("、")}`,
      `主导领域：${result.dominantDomain.label}`,
      "",
    ];
    result.topFive.forEach((theme) => {
      lines.push(`${theme.rank}. ${theme.name}｜${theme.domainLabel}`);
      lines.push(`得分：${theme.score.toFixed(1)}%；相对位置：${formatRelative(theme.relativePosition)}`);
      lines.push(theme.summary);
      lines.push(`发挥建议：${theme.action}`);
      lines.push("");
    });
    lines.push("——");
    lines.push("本测评为原创自我探索工具，不是 Gallup 官方测评，也不构成职业、医学或心理诊断。");
    return lines.join("\n");
  }

  async function copyReport() {
    const text = reportText();
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.append(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    elements.copyButton.textContent = "报告已复制";
    window.setTimeout(() => {
      elements.copyButton.textContent = "复制完整报告";
    }, 2200);
  }

  function downloadCsv() {
    const rows = logic.buildAnswerRows(bank, state.answers);
    const headers = ["题号", "陈述", "优势主题", "所属领域", "计分系数", "是否反向", "答案", "加权分"];
    const escape = (value) => `"${String(value).replace(/"/g, '""')}"`;
    const csv = [
      headers.map(escape).join(","),
      ...rows.map((row) =>
        [row.id, row.statement, row.theme, row.domain, row.coefficient, row.reverse, row.answer, row.weightedScore]
          .map(escape)
          .join(","),
      ),
    ].join("\r\n");
    const blob = new Blob([`\ufeff${csv}`], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `优势坐标-答题明细-${state.nickname || "未命名"}.csv`;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function saveAndExit() {
    safeSave();
    state.hasSavedProgress = true;
    updateResumePanel();
    showScreen("intro");
  }

  function restart() {
    if (!window.confirm("重新测试会清空本机保存的答案，是否继续？")) return;
    clearSaved();
    resetAnswers();
    updateResumePanel();
    elements.startButton.querySelector("span").textContent = "开始 180 题测评";
    showScreen("intro");
  }

  elements.startButton.addEventListener("click", startNew);
  elements.resumeButton.addEventListener("click", resume);
  elements.prevButton.addEventListener("click", previousPage);
  elements.nextButton.addEventListener("click", nextPage);
  elements.saveExitButton.addEventListener("click", saveAndExit);
  elements.copyButton.addEventListener("click", copyReport);
  elements.downloadButton.addEventListener("click", downloadCsv);
  elements.restartButton.addEventListener("click", restart);

  elements.versionLabel.textContent = `v${APP_VERSION} · 题库 ${bank.questionBankVersion || "180-v1"}`;
  const restored = loadSaved();
  if (restored) updateResumePanel();
})();
