import { Character } from "@/constant/Characters.ts";
import { Platform } from "@/constant/Platforms.ts";

export class ApiRequest {
  title: string;
  episodeNo: number;
  characters: Character[];
  platform: Platform[];

  constructor(
    _title: string,
    _episodeNo: number,
    _characters: Character[],
    _platform: Platform[],
  ) {
    this.title = _title;
    this.episodeNo = _episodeNo;
    this.characters = _characters;
    this.platform = _platform;
  }
}
