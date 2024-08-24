import { NODE_ENV as NODE_ENVIRONMENT, REACT_APP_ENVIRONMENT } from "../config";

/**
 * Use this if you need to hide something when running tests,
 * NODE_ENVIRONMENT (process.env.NODE_ENV) is automatically managed and has the following values (development, test, production)
 * npm start - development
 * npm run build - production
 * npm run test - test
 */
/* istanbul ignore next */
export const isNodeEnv = (env: string | string[] | undefined): boolean => {
  /* istanbul ignore next */
  if (env === undefined) return true;

  /* istanbul ignore next */
  if (Array.isArray(env)) return env.includes(NODE_ENVIRONMENT);
  else return NODE_ENVIRONMENT === env;
};

/**
 * Use this if you need to hide something for a particular env (local, development, staging, production)
 * the value of REACT_APP_ENVIRONMENT depends on what server the app is running on, you can change the value by yourself
 * Update REACT_APP_ENVIRONMENT in .env to get the value you need
 */
/* istanbul ignore next */
export const isAppEnv = (env: string | string[] | undefined): boolean => {
  if (env === undefined) return true;
  if (Array.isArray(env)) return env.includes(REACT_APP_ENVIRONMENT!);
  else return REACT_APP_ENVIRONMENT === env;
};
