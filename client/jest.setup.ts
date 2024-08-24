// @ts-ignore
jest.setTimeout(30000);
//jest.mock("react-grid-layout/css/styles.css");
global.console.warn = (message) => {
  throw message;
};

global.console.error = (message) => {
  throw message;
};

// @ts-ignore
global.setImmediate = jest.useRealTimers;
