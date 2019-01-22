import { development } from './evironment';
import { production } from './evironment.prod';

export const config = process.env.NODE_ENV !== 'production' ? development : production;
