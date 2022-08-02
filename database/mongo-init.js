// ja:テーブル管理者の作成スクリプト
// zh:自动注册库管理员脚本
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

// ja:先作ったdocker dbに切り替え
// zh:切换到刚才自动注册的docker数据库
db = db.getSiblingDB("docker");

// ja:コレクションを自動作成、データinsert
// zh:自动生成表并插入数据
db.createCollection("tests");
db.tests.insertMany([{ id: 1 }, { id: 2 }]);
