export const API_ENDPOINTS: string[] = [
  "/list",
  "/info",
] as const;

export type ApiEndpoint = typeof API_ENDPOINTS[number];
