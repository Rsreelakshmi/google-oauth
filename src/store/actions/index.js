function makeActionCreator(type, ...argNames) {
  return function(...args) {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
}

export const UPDATE_TAB = "UPDATE_TAB";

export const actionUpdateTab = makeActionCreator(UPDATE_TAB, "value");
