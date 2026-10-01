export class YonkomaData {
  title: string;
  episodeNo: number;
  urls: string[];

  constructor(
    title: string,
    episodeNo: number,
    urls: string[],
  ) {
    this.title = title;
    this.episodeNo = episodeNo;
    this.urls = urls;
  }
}
