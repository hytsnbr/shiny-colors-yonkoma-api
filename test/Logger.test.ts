import { Logger } from "@/functions/Logger.ts";

Logger.info("テスト: Logger.ts");

Deno.test("ログ出力テスト", () => {
  Logger.debug("This log is debug!");
  Logger.info("This log is info!");
  Logger.warn("This log is warning!");
  Logger.error("This log is error!");
  Logger.critical("This log is critical!");
});
