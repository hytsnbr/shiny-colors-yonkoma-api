import { Logger } from "@/functions/Logger.ts";
import { Hono } from "@hono/hono";
import apiRouter from "@/router/ApiRouter.ts";
import openapiRouter from "@/router/OpenApiRouter.ts";

const app = new Hono();

app.onError((error, ctx) => {
  Logger.error(error);

  return ctx.json({
    error: "Internal Server Error",
  }, 500);
});
app.route("/api", apiRouter);
app.route("/docs", openapiRouter);

export default app;
