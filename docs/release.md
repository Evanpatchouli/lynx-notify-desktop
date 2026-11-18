# Windows 正式版发布

版本唯一来源是 `frontend/package.json`：更新 `version`（正式版采用 `主.次.修订`）、`releaseDate`（`YYYY-MM-DD`），同步 `frontend/package-lock.json` 的根版本，并编写 `docs/releases/v<版本>.md`。标题栏、设置、宿主更新比较、Windows 文件属性、安装包和资产名均使用该版本。

## 构建

在 Windows x64 上准备 PowerShell 7.3+、Node.js/npm、VS 2022 C++ 工具链、CMake 3.24+、项目的 LynxSDK 4.0 和 NSIS 3。如果 `makensis.exe` 未在 PATH 或标准安装目录，设置环境变量 `MAKENSIS` 为它的绝对路径。

~~~powershell
npm run release
~~~

`npm run dist:win` 等价。脚本执行 `npm ci`、Vue 类型检查、前端测试及生产构建、隔离的 x64 Release 全量编译和 CTest（调度器、更新服务、窗口生命周期），再按 CMake 安装清单复制宿主、运行库、SDK 资源和两个原生 bundle。不会从可能正在运行的 `output/Release` 取包，不包含 Web Preview、调试文件或用户数据。只有全部步骤成功才替换本地版本目录。

产物位于 `release/<版本>/`：

- `LynxNotify.Setup.<版本>.exe`：当前用户 NSIS 安装包，带开始菜单快捷方式及卸载入口。
- `LynxNotify-<版本>.zip`：同一份运行文件的便携包。
- `SHA256SUMS.txt`：上述两份资产的 SHA-256；`win-unpacked/` 可用于本地冒烟验证。

升级前从系统托盘选择「退出」，不要仅关闭面板，也不要同时运行便携版和安装版。安装和卸载不修改 `%LOCALAPPDATA%\LynxNotify\state.json`。

## 提交、打 tag、发布

先检查 Git diff，只暂存本次变更。以当前发布分支 `master` 为例，在仓库根目录执行：

~~~powershell
$version = (Get-Content -Raw frontend/package.json | ConvertFrom-Json).version
$tag = "v$version"
$dir = "release/$version"
git commit -m "chore(release): 发布 $tag"
git tag -a $tag -m "Lynx Notify $tag"
git push --atomic origin HEAD:refs/heads/master "refs/tags/$tag"
gh release create $tag "$dir/LynxNotify.Setup.$version.exe" "$dir/LynxNotify-$version.zip" "$dir/SHA256SUMS.txt" --verify-tag --latest --title "Lynx Notify $tag" --notes-file "docs/releases/$tag.md"
gh release view $tag --json url,tagName,isDraft,isPrerelease,assets
~~~

确认远端 tag 指向发布提交、Release 为非草稿正式版、GitHub 两份二进制资产的 `digest` 与本地清单完全一致。已发布的 tag 和安装包不要覆盖，修订须使用新版本号。

## 检查更新

设置 → 版本与更新 → 检查更新。宿主仅查询[本仓库正式 Release](https://github.com/Evanpatchouli/lynx-notify-desktop/releases/latest)，按三个数字比较版本；可区分已是最新、发现新版、暂无发布、网络错误及限流。每次启动自动检查一次，随后每 15 分钟检查，隐藏面板也不中断。同一新版每次运行最多提醒一次，失败不会干扰通知调度。用户点击「查看发行说明与下载」才打开官方页面，不自动下载或安装。
