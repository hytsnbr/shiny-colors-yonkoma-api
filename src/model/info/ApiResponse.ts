import type { YonkomaData } from "@/model/YonkomaData.ts";
import { getTime } from "date-fns"

export class ApiResponse {
  timestamp: number;
  total: number;

  constructor(yonkomaDataList: YonkomaData[]) {
    const date = new Date();

    this.timestamp = getTime(date);
    this.total = yonkomaDataList.length;
  }
}
