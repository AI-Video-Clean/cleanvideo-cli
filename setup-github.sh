#!/bin/bash

echo "🚀 设置 GitHub 仓库脚本"
echo "========================"
echo ""

# 检查是否已有 git 仓库
if [ -d ".git" ]; then
    echo "⚠️  已存在 git 仓库"
    read -p "是否继续？(y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
else
    echo "1️⃣  初始化 git 仓库..."
    git init
fi

echo ""
echo "2️⃣  添加文件..."
git add .

echo ""
echo "3️⃣  提交代码..."
git commit -m "Initial commit: CleanVideo CLI v1.0.0"

echo ""
echo "4️⃣  设置远程仓库..."
echo "   仓库 URL: https://github.com/VideoWatermarkRemove-AI/cleanvideo-cli.git"
read -p "是否使用此 URL？(y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    git remote add origin https://github.com/VideoWatermarkRemove-AI/cleanvideo-cli.git 2>/dev/null || \
    git remote set-url origin https://github.com/VideoWatermarkRemove-AI/cleanvideo-cli.git
else
    read -p "请输入仓库 URL: " repo_url
    git remote add origin "$repo_url" 2>/dev/null || \
    git remote set-url origin "$repo_url"
fi

echo ""
echo "5️⃣  设置主分支..."
git branch -M main

echo ""
echo "✅ 本地设置完成！"
echo ""
echo "📝 下一步："
echo "   1. 确保在 GitHub 上已创建仓库：https://github.com/VideoWatermarkRemove-AI/cleanvideo-cli"
echo "   2. 运行: git push -u origin main"
echo ""
