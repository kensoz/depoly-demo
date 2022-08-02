# ja:イメージ指定
# zh:指定node镜像
FROM node:16.3.0

# ja:作者指定
# zh:指定作者
LABEL maintainer="kensoz"

# ja:ワークスペース指定
# zh:指定容器内的工作路径
WORKDIR /usr/src/backend

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

# ja:ポートの解放
# zh:这个容器暴露的端口
EXPOSE 7022

# ja:コンテナ実行
# zh:容器启动时执行的命令
ENTRYPOINT [ "yarn", "start" ]
