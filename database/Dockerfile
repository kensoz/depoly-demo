# 指定mongodb镜像
FROM mongo:latest

# 指定作者
LABEL maintainer="kensoz"

# 默认开启授权，并创建超管用户
ENV MONGO_INITDB_ROOT_USERNAME root

# 超管密码
ENV MONGO_INITDB_ROOT_PASSWORD root

# 你要用的数据库
ENV MONGO_INITDB_DATABASE docker

# 启动容器时执行脚本，自动注册库管理员
ADD mongo-init.js /docker-entrypoint-initdb.d/