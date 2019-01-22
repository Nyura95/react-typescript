// common type
export declare type IMethod = 'get' | 'post' | 'delete' | 'put';

export interface IPayload {
  [key: string]: unknown;
}

export interface IHeaders {
  Authorization?: string;
  contentType?: string;
  mode?: string;
}

// update this interface according to your api
export interface IPayloadApi<D = unknown, S = boolean> {
  success: S;
  reason: number;
  comment: string;
  data: D;
  dataHash: string;
  serverTime: Date;
}

// declare here your custom interface API
