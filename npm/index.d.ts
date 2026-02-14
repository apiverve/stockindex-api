declare module '@apiverve/stockindex' {
  export interface stockindexOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface stockindexResponse {
    status: string;
    error: string | null;
    data: StockIndexData;
    code?: number;
  }


  interface StockIndexData {
      index:       string;
      name:        string;
      value:       number;
      date:        Date;
      lastUpdated: Date;
  }

  export default class stockindexWrapper {
    constructor(options: stockindexOptions);

    execute(callback: (error: any, data: stockindexResponse | null) => void): Promise<stockindexResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: stockindexResponse | null) => void): Promise<stockindexResponse>;
    execute(query?: Record<string, any>): Promise<stockindexResponse>;
  }
}
