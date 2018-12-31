export const loadState = () => {
  try {
    const serializiedState = localStorage.getItem('state');
    if (serializiedState === null) {
      return undefined;
    }
    return JSON.parse(serializiedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializiedState = JSON.stringify(state);
    localStorage.setItem('state', serializiedState);
  } catch (err) {
    // Ignore write errors.
  }
};
