# イメージ指定
# 指定node镜像
FROM node:16.3.0

# 作者指定
# 指定作者
LABEL maintainer="kensoz"

# ワークスペース指定
# 指定容器内的工作路径
WORKDIR /usr/src/frontend

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

# イメージ指定
# 指定node镜像
FROM nginx:latest

# コンテナ内のビルドしたdistフォルダをnginxへコピー
# 复制容器内的dist文件夹到nginx目录
COPY --from=0 /usr/src/frontend/dist/ /usr/share/nginx/html/

# nginxコンフィグファイルコピー
# 复制nginx配置文件
COPY default.conf /etc/nginx/conf.d/default.conf