# 将项目添加到 GitHub 组织

## 步骤 1: 在 GitHub 上创建仓库

### 方法 1: 使用右上角的 "+" 按钮（推荐）

1. 访问组织页面：https://github.com/orgs/VideoWatermarkRemove-AI/repositories
2. 在页面**右上角**找到 **"+"** 图标（加号按钮）
3. 点击 **"+"** 按钮，选择 **"New repository"**
4. 填写仓库信息：
   - **Owner**: 选择 `VideoWatermarkRemove-AI`（组织名称）
   - **Repository name**: `cleanvideo-cli`
   - **Description**: `CLI wrapper for CleanVideoAI - Free AI Video Watermark Remover`
   - **Visibility**: Public（推荐）或 Private
   - **不要**勾选以下选项：
     - ❌ "Add a README file"（本地已有 README）
     - ❌ "Add .gitignore"（本地已有 .gitignore）
     - ❌ "Choose a license"（本地已有 LICENSE）
5. 点击 **"Create repository"**

### 方法 2: 直接访问创建页面

如果找不到按钮，可以直接访问：
```
https://github.com/organizations/VideoWatermarkRemove-AI/repositories/new
```

或者使用这个 URL 格式：
```
https://github.com/new?owner=VideoWatermarkRemove-AI
```

### 方法 3: 从 Repositories 页面

1. 在 Repositories 列表页面的**右上角**，查找 **"New"** 按钮
2. 点击后选择创建新仓库

## 步骤 2: 初始化本地 Git 仓库并推送

在项目目录下运行以下命令：

```bash
# 1. 初始化 git 仓库
git init

# 2. 添加所有文件
git add .

# 3. 提交代码
git commit -m "Initial commit: CleanVideo CLI v1.0.0"

# 4. 添加远程仓库
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

## 如果找不到创建按钮

可能的原因：
1. **权限问题**: 你可能不是组织的成员，或者没有创建仓库的权限
   - 解决方案：联系组织管理员，请求添加你为成员并授予创建仓库的权限

2. **按钮位置**: 创建按钮可能在以下位置：
   - 页面右上角的 **"+"** 图标
   - Repositories 标签页右上角的 **"New"** 按钮
   - 组织设置页面

3. **使用 GitHub CLI**（如果网页无法操作）:
   ```bash
   # 安装 GitHub CLI (如果还没有)
   brew install gh
   
   # 登录
   gh auth login
   
   # 创建仓库
   gh repo create VideoWatermarkRemove-AI/cleanvideo-cli --public --source=. --remote=origin --push
   ```

## 注意事项

- 确保你有 **VideoWatermarkRemove-AI** 组织的写入权限
- 如果遇到权限问题，联系组织管理员添加你为成员
- 如果仓库已存在，可以使用 `git remote set-url origin <url>` 更新远程地址

## 后续操作

推送成功后，可以：
1. 在 GitHub 上添加仓库描述和标签（Topics）
2. 设置仓库主题
3. 添加 README 徽章（可选）
4. 配置 GitHub Actions（如果需要 CI/CD）
