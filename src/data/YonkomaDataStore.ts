import { loadJson } from "@/functions/JsonUtils.ts";
import { Logger } from "@/functions/Logger.ts";
import { YonkomaData } from "@/model/YonkomaData.ts";

class YonkomaDataStore {
  private yonkomaDataList: YonkomaData[] = [];

  loadData(): void {
    const indexJsonData = loadJson<string[]>("assets/index.json");
    indexJsonData.forEach((item) => {
      try {
        const jsonData: YonkomaData[] = loadJson<YonkomaData[]>(item);
        Logger.info(`JSONファイル読み込み：${item}`);

        this.yonkomaDataList = [...this.yonkomaDataList, ...jsonData];
      } catch (error) {
        Logger.error((error as Error).message);
      }
    });

    Logger.debug(`読み込み済みデータ：${JSON.stringify(this.yonkomaDataList)}`);
  }

  getAll(): YonkomaData[] {
    return this.yonkomaDataList;
  }
}

export const yonkomaDataStore = new YonkomaDataStore();
