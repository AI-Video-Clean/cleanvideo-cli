# 如何查看 GitHub 仓库的创建者和提交者

## 方法 1: 查看提交历史（最直接）

1. 访问仓库页面：https://github.com/VideoWatermarkRemove-AI/video-watermark-remover-core
2. 点击 **"3 Commits"** 或 **"Commits"** 链接
3. 在提交历史页面可以看到：
   - 每个提交的作者（头像和用户名）
   - 提交时间
   - 提交信息

## 方法 2: 查看仓库的初始提交

1. 在仓库页面，点击 **"Commits"** 标签
2. 滚动到最底部（最早的提交）
3. 第一个提交通常是创建仓库的提交，可以看到创建者

## 方法 3: 查看组织成员

1. 访问组织页面：https://github.com/orgs/VideoWatermarkRemove-AI/people
2. 查看 **"People"** 标签页
3. 可以看到所有组织成员列表

## 方法 4: 使用 GitHub API（技术方法）

```bash
# 查看仓库信息（包括创建者）
curl https://api.github.com/repos/VideoWatermarkRemove-AI/video-watermark-remover-core

# 查看提交历史
curl https://api.github.com/repos/VideoWatermarkRemove-AI/video-watermark-remover-core/commits
```

## 方法 5: 使用 Git 命令（如果已克隆）

```bash
# 克隆仓库（如果还没有）
git clone https://github.com/VideoWatermarkRemove-AI/video-watermark-remover-core.git
cd video-watermark-remover-core

# 查看所有提交者和作者
git log --format='%an <%ae>' | sort -u

# 查看第一个提交（通常是创建者）
git log --reverse | head -20
```

## 注意事项

- GitHub 上显示的"创建者"通常是第一个提交的作者
- 如果仓库是通过组织创建的，创建者可能是组织管理员
- 提交历史会显示所有贡献者的信息

