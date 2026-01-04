# 将项目添加到 GitHub 组织

## 步骤 1: 在 GitHub 上创建仓库

1. 访问 GitHub 组织页面：https://github.com/orgs/VideoWatermarkRemove-AI/repositories
2. 点击 **"New repository"** 或 **"New"** 按钮
3. 填写仓库信息：
   - **Repository name**: `cleanvideo-cli`
   - **Description**: `CLI wrapper for CleanVideoAI - Free AI Video Watermark Remover`
   - **Visibility**: Public（推荐）或 Private
   - **不要**勾选 "Initialize this repository with a README"（因为本地已有代码）
4. 点击 **"Create repository"**

## 步骤 2: 初始化本地 Git 仓库并推送

在项目目录下运行以下命令：

```bash
# 1. 初始化 git 仓库
git init

# 2. 添加所有文件
git add .

# 3. 提交代码
git commit -m "Initial commit: CleanVideo CLI v1.0.0"

# 4. 添加远程仓库（替换为你的实际仓库 URL）
git remote add origin https://github.com/VideoWatermarkRemove-AI/cleanvideo-cli.git

# 5. 设置主分支为 main
git branch -M main

# 6. 推送到 GitHub
git push -u origin main
```

## 步骤 3: 验证

推送成功后，访问：
https://github.com/VideoWatermarkRemove-AI/cleanvideo-cli

确认代码已成功上传。

## 注意事项

- 确保你有 **VideoWatermarkRemove-AI** 组织的写入权限
- 如果遇到权限问题，联系组织管理员添加你为成员
- 如果仓库已存在，可以使用 `git remote set-url origin <url>` 更新远程地址

## 后续操作

推送成功后，可以：
1. 在 GitHub 上添加仓库描述和标签
2. 设置仓库主题（Topics）
3. 添加 README 徽章（可选）
4. 配置 GitHub Actions（如果需要 CI/CD）

