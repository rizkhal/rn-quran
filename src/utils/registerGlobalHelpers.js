import { log, wait } from './index';

export const registerGlobalFunctions = () => {
  global.log = log;
  global.wait = wait;
};
