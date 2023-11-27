/* eslint-disable no-console */
const logger = <T>(data: T, stringify = true): T => {
  if (stringify) {
    console.log(JSON.stringify(data, null, 2));
  } else {
    console.log(data);
  }

  return data;
};

export default logger;
