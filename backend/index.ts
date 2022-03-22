import Koa from "koa";
import Router from "koa-router";
import { connect, Schema, model } from "mongoose";

const app = new Koa();
const router = new Router();

// apiサーバーのホストアドレス
// api接口地址
const host: number = 7002;
// データベースのアドレス、docker network利用
// 数据库地址，使用docker network
const url: string = "mongodb://foo:foo@database:27017/docker";

// #################### データベース関連 ####################
// #################### 数据库相关 ####################
const connectMongoDB = async (): Promise<void> => {
  await connect(url)
    .then((): void => {
      console.log("mongodb connect suucess");
    })
    .catch((res: any): void => {
      console.log(res);
      console.log("mongodb connect failed");
    });
};

interface IDocker {
  id: string;
}

const schema = new Schema<IDocker>(
  { id: { type: String, required: true } },
  { versionKey: false }
);

const dockerModel = model<IDocker>("tests", schema);

// #################### ルータ関連 ####################
// #################### 路由相关 ####################
router.get("/test", async (ctx: Koa.Context): Promise<void> => {
  console.log("requested");

  await dockerModel.find({}, { _id: 0 }).then((res: IDocker[]): void => {
    ctx.body = {
      message: "取得成功",
      result: res,
    };
  });
});

// サーバ起動
// 启动服务
connectMongoDB();
app.use(router.routes()).use(router.allowedMethods());
app.listen(host, async (): Promise<void> => {
  console.log(`backend on port ${host} 🚀`);
});
