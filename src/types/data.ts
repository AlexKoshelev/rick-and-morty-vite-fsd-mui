export interface HeroData {
  id: number;
  created: string;
  gender: string;
  image: string;
  name: string;
  species: string;
  status: string;
  type: string;
  episode: string[];
  location: { name: string; url: string };
  origin: { name: string; url: string };
  url: string;
}
export interface LocationData {
  id: number;
  created: string;
  name: string;
  dimension: string;
  type: string;
}

export interface EpisodeData {
  id: number;
  created: string;
  name: string;
  episode: string;
  air_date: string;
}
