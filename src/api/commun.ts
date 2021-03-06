// module
import fetchival from 'fetchival';

// config
import { config } from '../config';

// type
import { IPayload, IMethod, IHeaders, IPayloadApi } from './types';

// logger
import logger from '../logger';

const source = 'Api common';

/**
 * Fetch api common
 * @param {string} url
 * @param {IPayload} payload
 * @param {IMethod} method
 * @param {IHeaders} headers
 * @version 1.0.0
 * @example
 * fetch<IUser>('/v1/user', 'get')
 * .then(result => {})
 * .catch((err: IPayloadApi<IUserFail, false>) => {});
 * @returns {PayloadApi<D, true>}
 */
export const fetch = <D>(url: string, method: IMethod = 'get', payload: IPayload = {}, headers: IHeaders = {}) =>
  new Promise<IPayloadApi<D, true>>((resolve, reject) => {
    logger.info(`new fetch [${method}] ${url}`, source);
    fetchival(url, {
      headers: {
        // Authorization: `Barear ${store.getState().User.token}`, // example
        ...headers
      }
    })
      [method](payload)
      .then((res: IPayloadApi<D>) =>
        res.success
          ? resolve(fetchSuccess<D>(res as IPayloadApi<D, true>))
          : reject(fetchFailed(res as IPayloadApi<unknown, false>))
      )
      .catch((err: Error) => reject(fetchCatch(err)));
  });

/**
 * Fetch success common
 * @param {IPayloadApi<D, true>} res
 * @version 1.0.0
 * @returns {IPayloadApi<D, true>}
 */
const fetchSuccess = <D>(res: IPayloadApi<D, true>): IPayloadApi<D, true> => {
  logger.info('SUCCESSFULLY FETCHED', source);
  // Insert your success logic common here
  return res;
};

/**
 * Fetch failed common
 * @param {IPayloadApi<unknown, false>} res
 * @version 1.0.0
 * @returns {IPayloadApi<unknown, false>}
 */
const fetchFailed = (res: IPayloadApi<unknown, false>): IPayloadApi<unknown, false> => {
  logger.info('FAILED FETCHED', source);
  // Insert your failed logic common here
  return res;
};

/**
 * Fetch catch common
 * @param {Error} err
 * @version 1.0.0
 * @returns {Error}
 */
const fetchCatch = (err: Error): Error => {
  console.log(err.name);
  logger.info('FETCH CATCHED', source);
  // Insert your catch logic here
  return err;
};
