export class YonkomaData {
  title: string;
  episodeNo: number;
  urls: string[];
  characters: string[];
  platform: string;

  constructor(
    title: string,
    episodeNo: number,
    urls: string[],
    characters: string[],
    platform: string,
  ) {
    this.title = title;
    this.episodeNo = episodeNo;
    this.urls = urls;
    this.characters = characters;
    this.platform = platform;
  }
}
