import { yonkomaDataStore } from "@/data/YonkomaDataStore.ts";
import { Logger } from "@/functions/Logger.ts";
import router from "@/router/Router.ts";

// 起動時にJSONファイルを読み込み
try {
  Logger.info("起動時のデータ読み込みを開始します");
  yonkomaDataStore.loadData();
} catch (err) {
  Logger.error("起動時のデータ読み込みに失敗しました:", (err as Error).message);

  Deno.exit(1);
}

// 通常サーバ
Deno.serve({
  port: 8080,
  onListen({ hostname, port }: Deno.NetAddr): void {
    Logger.info(`Listening on: ${hostname || "localhost"}:${port}`);
  },
}, router.fetch);
