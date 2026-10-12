import { yonkomaDataStore } from "@/data/YonkomaDataStore.ts";
import { YonkomaData } from "@/model/YonkomaData.ts";
import { ApiResponse } from "@/model/info/ApiResponse.ts";

export class YonkomaSearchService {
  private yonkomaDataList: YonkomaData[] = [];

  constructor() {
    this.yonkomaDataList = yonkomaDataStore.getAll();
  }

  search(
    title: string,
    episodeNo: string,
    characters: string[],
    platforms: string[],
  ): YonkomaData[] {
    let list: YonkomaData[] = this.yonkomaDataList;

    // title
    if (title !== "") {
      list = list.filter((data) => data.title === title);
    }

    // episodeNo
    if (!isNaN(parseInt(episodeNo))) {
      list = list.filter((data) => data.episodeNo === parseInt(episodeNo));
    }

    // characters
    if (characters.length > 0) {
      list = list.filter((data) =>
        characters.every((character) => data.characters.includes(character))
      );
    }

    //platform
    if (platforms.length > 0) {
      list = list.filter((data) => platforms.every((p) => data.platform === p));
    }

    return list;
  }

  info(): ApiResponse {
    const response = new ApiResponse(this.yonkomaDataList);

    return response;
  }
}
