import Koa from "koa";
import Router from "koa-router";
import { connect, Schema, model } from "mongoose";

const app = new Koa();
const router = new Router();

// ja:apiサーバーのホストアドレス
// zh:api接口地址
const host: number = 7022;
// ja:データベースのアドレス、docker network利用
// zh:数据库地址，使用docker network
const url: string = "mongodb://foo:foo@database:27017/docker";

// #################### ja:データベース関連 ####################
// #################### zh:数据库相关 ####################
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
  id: number;
}

const schema = new Schema<IDocker>(
  { id: { type: Number, required: true } },
  { versionKey: false }
);

const dockerModel = model<IDocker>("tests", schema);

// #################### ja:ルータ関連 ####################
// #################### zh:路由相关 ####################
router.get("/test", async (ctx: Koa.Context): Promise<void> => {
  console.log("api requested");

  await dockerModel.find({}, { _id: 0 }).then((res: IDocker[]): void => {
    console.log(res);

    ctx.body = {
      message: "取得成功",
      result: res,
    };
  });
});

// ja:サーバ起動
// zh:启动服务
connectMongoDB();
app.use(router.routes()).use(router.allowedMethods());
app.listen(host, async (): Promise<void> => {
  console.log(`backend on port ${host} 🚀`);
});
