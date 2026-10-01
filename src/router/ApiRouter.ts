import { Logger } from "@/functions/Logger.ts";
import { YonkomaData } from "@/model/YonkomaData.ts";
import { YonkomaSearchService } from "@/service/YonkomaSearchService.ts";
import { Context, Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";

// 通常サーバ
const app = new Hono()
  .use(
    "*",
    cors({
      origin: "/api",
      allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    }),
  )
  .get("/list", (ctx: Context) => {
    const title = ctx.req.query("title") || "";
    const episodeNo = ctx.req.query("episodeNo") || "";
    const characters = ctx.req.query("characters") || "";
    const platform = ctx.req.query("platform") || "";

    Logger.debug(`Debug Query Parameters:`);
    Logger.debug(` title: ${title}`);
    Logger.debug(` episodeNo: ${episodeNo}`);
    Logger.debug(` characters: ${characters}`);
    Logger.debug(` platform: ${platform}`);

    const yonkomaSerchService = new YonkomaSearchService();
    const list: YonkomaData[] = yonkomaSerchService.search();

    return ctx.json(list);
  })
  .get("/info", (ctx: Context) => {
    const yonkomaSerchService = new YonkomaSearchService();

    return ctx.json(yonkomaSerchService.info());
  });

export default app;
