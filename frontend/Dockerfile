# ja:イメージ指定
# zh:指定node镜像
FROM node:16.3.0

# ja:作者指定
# zh:指定作者
LABEL maintainer="kensoz"

# ja:ワークスペース指定
# zh:指定容器内的工作路径
WORKDIR /usr/src/frontend

# ja:package.jsonとyarn.lockコピー
# zh:复制package.json和yarn.lock
COPY ["package.json", "yarn.lock", "./"]

# ja:インストール
# zh:安装
RUN yarn

# ja:ファイルコピー
# zh:复制全部文件，源代码
COPY . .

# ja:ビルド
# zh:构建
RUN yarn build

# ja:イメージ指定
# zh:指定node镜像
FROM nginx:latest

# ja:コンテナ内のビルドしたdistフォルダをnginxへコピー
# zh:复制容器内的dist文件夹到nginx目录
COPY --from=0 /usr/src/frontend/dist/ /usr/share/nginx/html/

# ja:nginxコンフィグファイルコピー
# zh:复制nginx配置文件
COPY default.conf /etc/nginx/conf.d/default.conf