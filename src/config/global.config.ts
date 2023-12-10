import * as dotenv from 'dotenv';
import { RecursiveKeyOf } from '../types/utils.type';
dotenv.config();

const globalConfig = {
  nodeEnv: process.env.NODE_ENV,
  db_username: process.env.MONGO_USER,
  db_password: process.env.MONGO_PASSWORD,
};

export default () => globalConfig;
export type GlobalConfig = Record<RecursiveKeyOf<typeof globalConfig>, string>;
