import { yonkomaDataStore } from "@/data/YonkomaDataStore.ts";
import { YonkomaData } from "@/model/YonkomaData.ts";
import { ApiResponse } from "@/model/info/ApiResponse.ts";

export class YonkomaSearchService {
  private yonkomaDataList: YonkomaData[] = [];

  constructor() {
    this.yonkomaDataList = yonkomaDataStore.getAll();
  }

  search(): YonkomaData[] {
    return this.yonkomaDataList;
  }

  info(): ApiResponse {
    const response = new ApiResponse(this.yonkomaDataList);

    return response;
  }
}
