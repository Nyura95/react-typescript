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
  StatusCode: number;
  Reason: number;
  Comment: string;
  Success: S;
  Data: D;
}

// declare here your custom interface API
