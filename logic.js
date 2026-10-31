(function (root) {
  const domainTypeNames = {
    thinking: "洞察构建者",
    action: "行动推动者",
    people: "关系影响者",
    stability: "稳定建设者",
  };

  function validateBank(bank) {
    if (!bank || !Array.isArray(bank.questions) || !bank.themes || !bank.domains) {
      throw new Error("题库数据不完整");
    }
  }

  function completionCount(bank, answers) {
    return bank.questions.reduce((count, _, index) => count + (Number(answers[index]) >= 1 ? 1 : 0), 0);
  }

  function firstIncompleteIndex(bank, answers) {
    return bank.questions.findIndex((_, index) => !(Number(answers[index]) >= 1));
  }

  function buildAnswerRows(bank, answers) {
    validateBank(bank);
    return bank.questions.map((question, index) => {
      const answer = Number(answers[index]) || 0;
      return {
        id: question.id,
        statement: question.text,
        theme: question.themeName,
        domain: bank.domains[question.domainKey].label,
        coefficient: question.coefficient,
        reverse: question.reverse ? "是" : "否",
        answer,
        weightedScore: answer >= 1 ? Number((answer * question.coefficient).toFixed(2)) : 0,
      };
    });
  }

  function calculateResult(bank, answers) {
    validateBank(bank);
    if (!Array.isArray(answers) || answers.length !== bank.questions.length) {
      throw new Error(`需要 ${bank.questions.length} 个答案`);
    }
    answers.forEach((answer, index) => {
      if (!Number.isInteger(answer) || answer < 1 || answer > 5) {
        throw new Error(`第 ${index + 1} 题答案无效`);
      }
    });

    const themeKeys = Object.keys(bank.themes);
    const themeStats = themeKeys.map((key, order) => {
      const theme = bank.themes[key];
      const related = bank.questions
        .map((question, index) => ({ question, answer: answers[index] }))
        .filter((item) => item.question.themeKey === key);
      const coefficientSum = related.reduce((sum, item) => sum + item.question.coefficient, 0);
      const weighted = related.reduce(
        (sum, item) => sum + item.answer * item.question.coefficient,
        0,
      );
      const score = coefficientSum > 0 ? (weighted / (coefficientSum * 5)) * 100 : 0;
      return {
        key,
        ...theme,
        domainLabel: bank.domains[theme.domain].label,
        score: Number(score.toFixed(1)),
        order,
      };
    });

    const rankedThemes = themeStats
      .slice()
      .sort((a, b) => b.score - a.score || a.order - b.order)
      .map((theme, index) => ({
        ...theme,
        rank: index + 1,
        relativePosition: Number(((index + 1) / themeStats.length).toFixed(4)),
      }));

    const domainKeys = Object.keys(bank.domains);
    const domainScores = domainKeys
      .map((key, order) => {
        const domainThemes = rankedThemes.filter((theme) => theme.domain === key);
        const score =
          domainThemes.reduce((sum, theme) => sum + theme.score, 0) / domainThemes.length;
        return {
          key,
          ...bank.domains[key],
          score: Number(score.toFixed(1)),
          order,
        };
      })
      .sort((a, b) => b.score - a.score || a.order - b.order)
      .map((domain, index) => ({ ...domain, rank: index + 1 }));

    const topFive = rankedThemes.slice(0, 5);
    const dominantDomain = domainScores[0];
    const specificType = `${domainTypeNames[dominantDomain.key]}｜${topFive[0].name} × ${topFive[1].name}`;

    return {
      rankedThemes,
      topFive,
      domainScores,
      dominantDomain,
      domainType: domainTypeNames[dominantDomain.key],
      specificType,
    };
  }

  const api = {
    domainTypeNames,
    completionCount,
    firstIncompleteIndex,
    buildAnswerRows,
    calculateResult,
  };

  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.STRENGTHS_LOGIC = api;
})(typeof window !== "undefined" ? window : globalThis);
