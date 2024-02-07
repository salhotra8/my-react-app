export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic : number;
}

export interface GamesResponse {
  count: string;
  results: Games[];
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
