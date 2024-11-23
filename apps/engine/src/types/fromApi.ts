export const CREATE_USER = "CREATE_USER";
export const ONRAMP = "ONRAMP";
export const SELL_ORDER = "SELL_ORDER";
export const USER_BALANCE = "USER_BALANCE";
export const BUY_ORDER = "BUY_ORDER";
export const MINT = "MINT";
export const ORDER_BOOK = "ORDER_BOOK";
export const STOCK_SYMBOL = "STOCK_SYMBOL";
export const STOCK_BALANCE = "STOCK_BALANCE";
export const CREATE_MARKET = "CREATE_MARKET";
export const GET_MARKET = "GET_MARKET"
export const RESETALL = "RESETALL";

export type MessageFromApi =
  | {
      type: typeof CREATE_USER;
      data: {
        userId: string;
      };
    }
  | {
      type: typeof ONRAMP;
      data: {
        userId: string;
        amount: number;
      };
    }
  | {
      type: typeof SELL_ORDER;
      data: {
        userId: string;
        price: number;
        quantity: number;
        stockSymbol: string;
        stockType: "yes" | "no";
      };
    }
  | {
      type: typeof BUY_ORDER;
      data: {
        userId: string;
        stockSymbol: string;
        quantity: number;
        price: number;
        stockType: "yes" | "no";
      };
    }
  | {
      type: typeof USER_BALANCE;
      data: {
        userId: string;
      };
    }
  | {
      type: typeof STOCK_BALANCE;
      data: {
        userId: string;
      }
    }
  | {
      type: typeof STOCK_SYMBOL;
      data: {
        stockSymbol: string;
      };
    }
  | {
      type: typeof CREATE_MARKET
      data: {
        stockSymbol: string;
      }
    }
  | {
      type: typeof MINT;
      data: {
        userId: string;
        stockSymbol: string;
        price: number;
      };
    } 
  | {
      type: typeof GET_MARKET;
      data: {
        marketName: string
      }
    }
  | {
    type: typeof RESETALL;
  }
