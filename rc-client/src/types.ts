export interface Country {
  name: { common: string, official: string};
  code: string;
  flag: { svg: string, alt: string };
  population: number;
  capital: string;
  currency: {
    name: string;
    symbol: string;
  };
  region: string;
  subregion: string;
  maps: string;
}