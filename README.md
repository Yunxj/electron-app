# electron-app

## electron桌面应用核心

1. Electron = Chromium + Node.js + Native API
2. IPC通信， main.js (主进程-node环境管理渲染进程) + preload.js预处理 + 渲染进程（浏览器）
3. 使用 HTML、CSS、JS，或者通过react、vue开发，web技术构建桌面应用程序
4. 热启动
5. https://blog.csdn.net/qq_33650655/article/details/140364298

### 依赖安装

1. 指引（https://www.electronjs.org/zh/docs/latest/tutorial/installation）
2. npm安装，yarn 安装
3. npm i nodemon -D,"start": "nodemon --exec electron ."


### MAC 快捷键

1. command + option + i
