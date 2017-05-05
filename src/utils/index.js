import { isObject, isArray, has } from 'lodash';

const hasAllKeys = (testObject, keys) => {
  if (!isObject(testObject) || !isArray(keys)) {
    return false;
  }

  return keys.reduce((result, key) => result && has(testObject, key));
};

const formatLogLevel = logLevel => ['debug', 'info', 'warn', 'error'][logLevel];

export {
  hasAllKeys,
  formatLogLevel,
};
