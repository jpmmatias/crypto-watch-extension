export interface Coin {
  id: string;
  name?: string;
  image?: {
    thumb?: string;
    small?: string;
  };
  market_data?: {
    current_price?: {
      usd?: number;
    };
  };
}
