import { Logger } from "@/functions/Logger.ts";

export function loadJson<T>(jsonFilePath: string): T {
  let jsonText: string;
  try {
    jsonText = Deno.readTextFileSync(jsonFilePath);
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      throw new Error(`データJSONファイルが存在しません：${jsonFilePath}`);
    }
    throw error;
  }

  try {
    return JSON.parse(jsonText) as T;
  } catch (error) {
    Logger.error((error as Error).message);
    throw new Error(`JSONデータの解析に失敗しました：${jsonFilePath}`);
  }
}
