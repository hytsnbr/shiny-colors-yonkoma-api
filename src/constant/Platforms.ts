export const PLATFORMS: string[] = [
  "enza",
  "Song-for-Prism",
  "その他",
] as const;

export type Platform = typeof PLATFORMS[number];
