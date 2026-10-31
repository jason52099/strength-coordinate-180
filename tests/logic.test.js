const test = require("node:test");
const assert = require("node:assert/strict");
const bank = require("../bank.js");
const logic = require("../logic.js");

test("网页题库包含 180 题、20 项主题和 4 个领域", () => {
  assert.equal(bank.questions.length, 180);
  assert.equal(bank.pageSize, 10);
  assert.equal(Object.keys(bank.themes).length, 20);
  assert.equal(Object.keys(bank.domains).length, 4);
});

test("每项优势 9 题，每个领域 5 项优势", () => {
  const counts = {};
  bank.questions.forEach((question) => {
    counts[question.themeKey] = (counts[question.themeKey] || 0) + 1;
  });
  Object.keys(bank.themes).forEach((key) => assert.equal(counts[key], 9));
  const domainCounts = {};
  Object.values(bank.themes).forEach((theme) => {
    domainCounts[theme.domain] = (domainCounts[theme.domain] || 0) + 1;
  });
  Object.keys(bank.domains).forEach((key) => assert.equal(domainCounts[key], 5));
});

test("完成度与首个未完成题目定位正确", () => {
  const answers = Array(180).fill(null);
  answers[0] = 3;
  answers[1] = 5;
  assert.equal(logic.completionCount(bank, answers), 2);
  assert.equal(logic.firstIncompleteIndex(bank, answers), 2);
  assert.equal(logic.firstIncompleteIndex(bank, Array(180).fill(1)), -1);
});

test("每项优势都能通过真实答案成为第一名", () => {
  Object.keys(bank.themes).forEach((themeKey) => {
    const answers = bank.questions.map((question) => (question.themeKey === themeKey ? 5 : 1));
    const result = logic.calculateResult(bank, answers);
    assert.equal(result.rankedThemes[0].key, themeKey);
    assert.equal(result.topFive.length, 5);
    assert.equal(new Set(result.topFive.map((theme) => theme.key)).size, 5);
  });
});

test("报告包含相对位置、领域分布和具体填写者类型", () => {
  const answers = bank.questions.map((question, index) => ((index % 5) + 1));
  const result = logic.calculateResult(bank, answers);
  assert.equal(result.rankedThemes.length, 20);
  assert.equal(result.domainScores.length, 4);
  assert.equal(result.topFive[0].relativePosition, 0.05);
  assert.equal(result.topFive[4].relativePosition, 0.25);
  assert.ok(result.specificType.includes("｜"));
  assert.ok(result.specificType.includes(" × "));
  assert.ok(result.domainType.length > 0);
});

test("答题明细包含题目、主题、领域与系数", () => {
  const rows = logic.buildAnswerRows(bank, Array(180).fill(4));
  assert.equal(rows.length, 180);
  assert.equal(rows[0].id, "Q001");
  assert.equal(rows[179].id, "Q180");
  assert.ok(rows[0].theme.length > 0);
  assert.ok(rows[0].domain.length > 0);
  assert.equal(rows[0].coefficient, 1);
  assert.equal(rows[0].weightedScore, 4);
});

test("未完成或答案越界时拒绝计分", () => {
  assert.throws(() => logic.calculateResult(bank, [1, 2]), /180/);
  assert.throws(() => logic.calculateResult(bank, Array(180).fill(0)), /答案无效/);
  assert.throws(() => logic.calculateResult(bank, Array(180).fill(6)), /答案无效/);
});
