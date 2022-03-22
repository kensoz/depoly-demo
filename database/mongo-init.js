// https://stackoverflow.com/questions/42912755/how-to-create-a-db-for-mongodb-container-on-start-up
// 自动注册库管理员
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
