# 指定node镜像
FROM node:16.3.0

# 指定作者
LABEL maintainer="kensoz"

# 指定容器内的工作路径
WORKDIR /usr/src/frontend

# 复制package.json和yarn.lock
COPY ["package.json", "yarn.lock", "./"]

# 安装
RUN yarn

# 复制全部文件，源代码
COPY . .

# vue.js打包
RUN yarn build

# 指定nginx镜像
FROM nginx:latest

# 复制容器内的dist文件夹到nginx目录
COPY --from=0 /usr/src/frontend/dist/ /usr/share/nginx/html/

# 复制nginx配置文件
COPY default.conf /etc/nginx/conf.d/default.conf