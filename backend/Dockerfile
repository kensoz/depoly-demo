# 指定node镜像
FROM node:16.3.0

# 指定作者
LABEL maintainer="kensoz"

# 指定容器内的工作路径
WORKDIR /usr/src/backend

# 复制package.json和yarn.lock
COPY ["package.json", "yarn.lock", "./"]

# 安装
RUN yarn

# 复制全部文件，源代码
COPY . .

# node打包
RUN yarn build

# 这个容器暴露的端口
EXPOSE 7002

# 容器启动时执行的命令
ENTRYPOINT [ "yarn", "start" ]
