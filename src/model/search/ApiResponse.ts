import type { YonkomaData } from "@/model/YonkomaData.ts";

export class ApiResponse {
  yonkomaDataList: YonkomaData[];

  constructor(
    _yonkomaDataList: YonkomaData[],
  ) {
    const dataList: YonkomaData[] = [];
    _yonkomaDataList.forEach((yonkomaData: YonkomaData) => {
      dataList.push(yonkomaData);
    });

    this.yonkomaDataList = dataList;
  }
}
