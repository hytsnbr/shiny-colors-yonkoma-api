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
    const title: string = ctx.req.query("title") || "";
    const episodeNo: string = ctx.req.query("episodeNo") || "";
    const characters: string[] = ctx.req.query("characters")?.split(",") || [];
    const platforms: string[] = ctx.req.query("platforms")?.split(",") || [];

    Logger.debug(`Debug Query Parameters:`);
    Logger.debug(` title: ${title}`);
    Logger.debug(` episodeNo: ${episodeNo}`);
    Logger.debug(` characters: ${characters}`);
    Logger.debug(` platforms: ${platforms}`);

    const yonkomaSerchService = new YonkomaSearchService();
    const list: YonkomaData[] = yonkomaSerchService.search(
      title,
      episodeNo,
      characters,
      platforms,
    );

    return ctx.json(list);
  })
  .get("/info", (ctx: Context) => {
    const yonkomaSerchService = new YonkomaSearchService();

    return ctx.json(yonkomaSerchService.info());
  });

export default app;
