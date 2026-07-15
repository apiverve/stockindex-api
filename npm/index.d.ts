declare module '@apiverve/stockindex' {
  export interface stockindexOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface stockindexResponse {
    status: string;
    error: string | null;
    data: StockIndexData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface StockIndexData {
      index:   null | string;
      name:    null | string;
      year:    number | null;
      month:   number | null;
      count:   number | null;
      entries: Entry[];
  }
  
  interface Entry {
      date:  Date | null;
      value: number | null;
  }

  export default class stockindexWrapper {
    constructor(options: stockindexOptions);

    execute(callback: (error: any, data: stockindexResponse | null) => void): Promise<stockindexResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: stockindexResponse | null) => void): Promise<stockindexResponse>;
    execute(query?: Record<string, any>): Promise<stockindexResponse>;
  }
}
