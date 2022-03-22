import Koa from "koa";
import Router from "koa-router";
import { connect, Schema, model } from "mongoose";

const app = new Koa();
const router = new Router();

// api接口地址
const host: number = 7002;
// 数据库地址，使用容器局域网链接
const url: string = "mongodb://foo:foo@database:27017/docker";

// 数据库
const connectMongoDB = async (): Promise<void> => {
  await connect(url)
    .then((): void => {
      console.log("mongodb connect suucess");
    })
    .catch((res: any): void => {
      console.log(res); // 打印错误
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

// 路由
router.get("/test", async (ctx: Koa.Context): Promise<void> => {
  console.log("requested");

  await dockerModel.find({}, { _id: 0 }).then((res: IDocker[]): void => {
    console.log(res); // 打印结果
    ctx.body = {
      message: "取得成功",
      result: res,
    };
  });
});

// 启动数据库，启动服务器
connectMongoDB();
app.use(router.routes()).use(router.allowedMethods());
app.listen(host, async (): Promise<void> => {
  console.log(`backend on port ${host} 🚀`);
});
