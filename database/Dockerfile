# イメージ指定
# 指定mongodb镜像
FROM mongo:latest

# 作者指定
# 指定作者
LABEL maintainer="kensoz"

# 管理者アカウント作者
# 默认开启授权，并创建超管用户
ENV MONGO_INITDB_ROOT_USERNAME root

# 管理者パスワード作者
# 超管密码
ENV MONGO_INITDB_ROOT_PASSWORD root

# 使う予定のデータベース名称
# 你要用的数据库
ENV MONGO_INITDB_DATABASE docker

# コンテナ起動の時、データベース管理者スクリプト実行
# 启动容器时执行脚本，自动注册库管理员
ADD mongo-init.js /docker-entrypoint-initdb.d/