// https://stackoverflow.com/questions/42912755/how-to-create-a-db-for-mongodb-container-on-start-up

// テーブル管理者の作成スクリプト
// 自动注册库管理员脚本
db.createUser({
  user: "foo",
  pwd: "foo",
  roles: [
    {
      role: "readWrite",
      db: "docker",
    },
  ],
});
