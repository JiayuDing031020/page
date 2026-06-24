# InkMind 公司主页

基于 Next.js 15 构建的 InkMind Research 动态公司主页，设计参考 [字节跳动 Seed 官网](https://seed.bytedance.com/zh/)。

## 功能特性

- **首页 Hero 轮播** — 四个研究成果（ExtrinSplat、3DSAV、VideoCuRL、ZeroSplat）自动轮播，支持手动切换，链接 arXiv 与详情页
- **最新动态** — 四篇研究新闻，点击「了解更多」进入站内全文页
- **研究方向** — 大模型、多模态感知、多模态理解、Agentic RL/OPD
- **论文列表** — InkMind Research 全部 12 篇论文
- **加入我们** — 团队介绍与团队同学说

## 技术栈

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## 快速开始

### 前置要求

请先安装 [Node.js](https://nodejs.org/)（建议 v18 及以上）。

### 安装与运行

```bash
npm install
npm run dev
```

浏览器访问 [http://localhost:3000](http://localhost:3000)。

### 构建生产版本（静态导出）

项目已开启 Next.js 静态导出（`output: "export"`），`npm run build` 会在根目录生成完全静态的 `out/` 目录，可直接部署到任意静态托管平台。

```bash
npm run build
# 产物位于 ./out
```

## 部署到 Cloudflare Pages

本项目为纯静态站点，推荐使用 Cloudflare Pages：

1. 在 Cloudflare 控制台 **Workers & Pages → Create → Pages → Connect to Git**，选择本仓库。
2. 构建设置：
   - **Framework preset**：`Next.js (Static HTML Export)`（或 None）
   - **Build command**：`npm run build`
   - **Build output directory**：`out`
3. 环境变量（Settings → Environment variables）：
   - `NODE_VERSION` = `20`
4. 保存并部署即可；后续推送到 `main` 分支会自动触发重新构建。

> 也可以本地执行 `npm run build` 后，将生成的 `out/` 目录通过「Direct Upload」方式上传到 Cloudflare Pages。

## 项目结构

```
src/
├── app/                  # Next.js App Router 页面
│   ├── page.tsx          # 主页
│   └── news/[slug]/      # 动态文章详情页（SSG）
├── components/           # UI 组件
│   ├── Header.tsx
│   ├── HeroCarousel.tsx  # 首页轮播（客户端动态）
│   ├── NewsSection.tsx
│   ├── PapersSection.tsx
│   ├── ResearchSection.tsx
│   ├── JoinSection.tsx
│   └── Footer.tsx
└── data/                 # 内容数据（修改此处即可更新页面）
    ├── site.ts           # 站点配置
    ├── featured.ts       # Hero 轮播项
    ├── news.ts           # 最新动态与全文
    ├── papers.ts         # 论文列表
    ├── research.ts       # 研究方向
    └── teams.ts          # 团队与加入我们
```

## 内容更新

所有页面内容集中在 `src/data/` 目录下，修改对应文件后重新构建即可更新页面，无需改动组件代码。

- 添加新闻：在 `news.ts` 中新增条目，并确保 `slug` 唯一
- 添加论文：在 `papers.ts` 中新增条目
- 更新轮播：在 `featured.ts` 中修改或新增项

## 设计说明

页面采用深色主题，参考 Seed 官网的布局风格：全屏 Hero、卡片式新闻列表、论文索引列表、研究方向网格与团队介绍区块。
