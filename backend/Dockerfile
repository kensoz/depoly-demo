# イメージ指定
# 指定node镜像
FROM node:16.3.0

# 作者指定
# 指定作者
LABEL maintainer="kensoz"

# ワークスペース指定
# 指定容器内的工作路径
WORKDIR /usr/src/backend

# package.jsonとyarn.lockコピー
# 复制package.json和yarn.lock
COPY ["package.json", "yarn.lock", "./"]

# インストール
# 安装
RUN yarn

# ファイルコピー
# 复制全部文件，源代码
COPY . .

# ビルド
# 构建
RUN yarn build

# ポートの解放
# 这个容器暴露的端口
EXPOSE 7002

# コンテナ実行
# 容器启动时执行的命令
ENTRYPOINT [ "yarn", "start" ]
