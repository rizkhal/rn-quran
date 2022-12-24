export * from './fonts';

export const wait = timeout =>
  new Promise(resolve => setTimeout(resolve, timeout));

export const log = log => {
  if (__DEV__) {
    console.log('\n\n\n');
    if (typeof log === 'object') {
      console.log({ ...log });
    } else {
      console.log(log);
    }
    console.log('\n\n\n');
  }
};
