# 校园网自动登录工具

一个基于 Tauri + Vue3 + TypeScript 开发的CUIT校园网自动登录工具，支持开机自启动、记住密码等功能。

## 功能特性

- 🔐 支持校园网账号密码登录
- 🔄 自动登录功能
- 💾 记住密码选项
- 🚀 开机自启动
- 💻 跨平台支持 (Windows, macOS, Linux)
- 🎨 现代化 UI 设计

## 技术栈

- [Tauri](https://tauri.app/) - 跨平台桌面应用框架
- [Vue 3](https://vuejs.org/) - 渐进式 JavaScript 框架
- [TypeScript](https://www.typescriptlang.org/) - JavaScript 的超集
- [Pinia](https://pinia.vuejs.org/) - Vue 状态管理
- [TailwindCSS](https://tailwindcss.com/) - CSS 框架

## 开发环境要求

- Node.js >= 20
- Rust >= 1.69
- pnpm >= 8.0

## 安装与运行

1. 克隆项目
```bash
git clone https://github.com/amibas/CUIT-NetLogin.git
```

2. 安装依赖
```bash
pnpm install
```

3. 运行项目
```bash
pnpm tauri dev
```

## 打包
```bash
pnpm tauri build
```

## 协助

如果你有任何问题或建议，请随时提交 issue 或 PR。

由于我本人只使用电信校园网，所以只实现了电信校园网自动登录，如果需要其他运营商的自动登录，请自行fork代码，或者在 issue 中提交相关接口。
