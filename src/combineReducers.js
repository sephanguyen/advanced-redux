export const combineReducers = config => {
  return (state, action) => {
    return Object.keys(config).reduce((state, key) => {
      const reducer = config[key];

      const previosusState = state.get(key);
      const newValue = reducer(previosusState, action);
      if (!newValue) {
        throw new Error(
          `A reducer return undefined when reducing key::"${key}`
        );
      }
      return state.set(key, newValue);
    }, state);
  };
};
