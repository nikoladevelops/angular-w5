export interface CryptoDataModel {
    id: string;
    rank: number;
    symbol: string;
    name: string;
    supply: number;
    maxSupply: number;
    priceUsd: number;
    volumeUsd24Hr: number;
    changePercent24Hr: number;
    marketCapUsd: number;
  }