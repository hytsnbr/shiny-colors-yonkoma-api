import { OpenAPIHono } from "@hono/zod-openapi";
import { swaggerUI } from "@hono/swagger-ui";
import { parse } from "@std/yaml";
import { cors } from "@hono/hono/cors";

// OpenAPIサーバ
const app = new OpenAPIHono()
  .use(
    "*",
    cors({
      origin: "/docs",
      allowMethods: ["GET"],
    }),
  ).get(
    "/openapi.yml",
    async (context) => {
      const yaml = await Deno.readTextFile("doc/openapi.yml");
      const spec = parse(yaml);

      return context.json(spec);
    },
  ).get(
    "/",
    swaggerUI({ url: "/docs/openapi.yml" }),
  );

export default app;
