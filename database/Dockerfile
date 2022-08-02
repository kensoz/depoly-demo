# ja:イメージ指定
# zh:指定mongodb镜像
FROM mongo:latest

# ja:作者指定
# zh:指定作者
LABEL maintainer="kensoz"

# ja:管理者アカウント作成
# zh:默认开启授权，并创建超管用户
ENV MONGO_INITDB_ROOT_USERNAME root

# ja:管理者パスワード作成
# zh:超管密码
ENV MONGO_INITDB_ROOT_PASSWORD root

# ja:使う予定のデータベース名称
# zh:你要用的数据库
ENV MONGO_INITDB_DATABASE docker

# ja:コンテナ起動の時、データベース管理者スクリプト実行
# zh:启动容器时执行脚本，自动注册库管理员
ADD mongo-init.js /docker-entrypoint-initdb.d/