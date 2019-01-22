// module
import fetchival from 'fetchival';

// config
import { config } from '../config';

// type
import { IPayload, IMethod, IHeaders, IPayloadApi } from './types';

/**
 * Fetch api common
 * @version 1.2.2
 * @param url string
 * @param payload IPayload
 * @param method IMethod
 * @param headers IHeaders
 * @returns PayloadApi<D, true>
 */
export const fetch = <D>(
  url: string,
  method: IMethod = 'get',
  payload: IPayload = {},
  headers: IHeaders = {}
): Promise<IPayloadApi<D, true>> =>
  new Promise<IPayloadApi<D, true>>((resolve, reject) =>
    fetchival(config.api.basepath + url, {
      headers: {
        // Authorization: `Barear ${store.getState().User.token}`,
        ...headers
      }
    })
      [method](payload)
      .then((res: IPayloadApi) => (res.success ? resolve(fetchSuccess<D>(res as IPayloadApi<D, true>)) : reject(fetchFailed(res as IPayloadApi<unknown, false>))))
      .catch((err: Error) => reject(fetchCatch(err)))
  );

/**
 * Fetch success common
 * @version 1.0.0
 * @param res IPayloadApi<D, true>
 * @returns IPayloadApi<D, true>
 */
const fetchSuccess = <D>(res: IPayloadApi<D, true>): IPayloadApi<D, true> => {
  console.log('SUCCESSFULLY FETCHED');
  // Insert your success logic common here
  return res;
};

/**
 * Fetch failed common
 * @version 1.0.0
 * @param res IPayloadApi<unknown, false>
 * @returns IPayloadApi<unknown, false>
 */
const fetchFailed= (res: IPayloadApi<unknown, false>): IPayloadApi<unknown, false> => {
  console.log('FAILED FETCHED');
  // Insert your failed logic common here
  return res;
};

/**
 * Fetch catch common
 * @version 1.0.0
 * @param err Error
 * @returns Error
 */
const fetchCatch = (err: Error): Error => {
  console.log('FETCH CATCHED');
  // Insert your catch logic here
  return err;
};
