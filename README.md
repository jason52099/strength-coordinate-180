# 优势坐标｜180题个人优势测评网页

- 在线访问：https://jason52099.github.io/strength-coordinate-180/
- GitHub 仓库：https://github.com/jason52099/strength-coordinate-180

原创 180 题个人优势测评，与《优势坐标-180题分析与类型判定.xlsx》使用同一套题库和计分规则。

> 不是 Gallup 官方测评，没有复制原站 180 道题或 34 项主题文案。

## 功能

- 180 道原创陈述，18 页，每页 10 题
- 1–5 分五级自评
- 自动保存在本机浏览器，可保存退出、断点续填
- 自动计算 20 项优势主题得分
- 输出前五项优势、完整排序和相对位置
- 输出四类领域得分
- 生成填写者具体类型
- 显示每项优势的解读、盲点和发挥建议
- 可复制报告
- 可下载 180 题答题明细 CSV
- 手机与电脑自适应
- 不上传答题数据

## 与 Excel 的关系

网页中的 `bank.js` 由同目录对应的 Excel 工作簿生成：

- 题库：`测评填写` A6:H185
- 主题：20 项
- 领域：4 类
- 计分系数：当前统一为 1.0
- 计分逻辑：主题加权得分 ÷ 满分 × 100%
- 相对位置：主题排名 ÷ 20

## 本地预览

```bash
python3 -m http.server 4175
```

打开：

```text
http://127.0.0.1:4175/
```

## 修改预约入口

在 `app.js` 顶部修改：

```js
const CONFIG = {
  contactUrl: "",
  contactLabel: "预约优势解读",
};
```

填入合规链接后，结果页会显示预约按钮。

## 发布

本目录可直接部署到 GitHub Pages、Cloudflare Pages、Vercel 或 Netlify。

GitHub Pages 步骤：

1. 新建仓库，把本目录作为仓库根目录。
2. 推送到 `main` 分支。
3. 在 `Settings → Pages` 中选择从 `main` 发布。

## 版本与迭代

当前版本：`v1.0.0`，题库版本：`180-v1`。

- `bank.js`：题库与主题数据。
- `logic.js`：计分、排序和类型判定。
- `app.js`：页面交互、进度保存和报告渲染。
- `CHANGELOG.md`：版本记录与后续升级流程。
- `ROADMAP.md`：候选迭代方向。

升级题库时同步修改 `bank.js`、版本号和测试，避免旧答案错配。

## 测试

```bash
node --test tests/logic.test.js
```

测试覆盖 180 题结构、20 项主题、4 个领域、完成度、主题识别、相对位置、类型生成和答题明细。

## 页面预览

![首页](preview-home.jpg)

![移动端报告](preview-result-mobile.jpg)

![电脑端报告](preview-result-desktop.jpg)
