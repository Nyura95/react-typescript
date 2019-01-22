import { development } from './evironment';
import { production } from './evironment.prod';

// switch auto between the dev config and the prod config
export const config = process.env.NODE_ENV !== 'production' ? development : production;
