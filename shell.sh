#!/bin/bash

# 定义目录变量
TEMP_DIR="./temp-directory"
WELCOME_DIR="./welcome"

# 创建临时目录
mkdir -p $TEMP_DIR

# 复制 welcome 文件夹内容到临时目录
cp -r $WELCOME_DIR/* $TEMP_DIR/

# 切换到 gh-pages 分支
git checkout gh-pages

# 将临时目录内容复制到 gh-pages 分支的 welcome 目录
cp -r $TEMP_DIR/* ./welcome/

# 添加和提交更改
git add .
git commit -m "Update welcome directory"

# 推送到远程仓库的 gh-pages 分支
git push origin gh-pages

# 切回 main 分支
git checkout main

# 清理临时目录
rm -rf $TEMP_DIR
