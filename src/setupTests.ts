// React 18 ocekuje ovu zastavicu da bi act(...) radio bez upozorenja.
declare global {
  // eslint-disable-next-line no-var
  var IS_REACT_ACT_ENVIRONMENT: boolean;
}

global.IS_REACT_ACT_ENVIRONMENT = true;

export {};
