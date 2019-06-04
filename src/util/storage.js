export const exists = (() => {
  const TEST_STORAGE_KEY = '__rahul-rangnekar__';
  const TEST_STORAGE_VALUE = 'local storage exists';
  if (localStorage) {
    try {
      localStorage.setItem(TEST_STORAGE_KEY, TEST_STORAGE_VALUE);
      localStorage.removeItem(TEST_STORAGE_KEY);
      return true;
    } catch (err) {
      return false;
    }
  }
  return false;
})();

export const get = key => {
  if (exists) {
    const valueAsJSON = localStorage.getItem(key);
    if (!valueAsJSON) {
      return undefined;
    }
    try {
      const value = JSON.parse(valueAsJSON);
      return value;
    } catch (err) {
      return undefined;
    }
  }
};

export const set = (key, value) => {
  if (exists) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const remove = key => {
  if (exists) {
    localStorage.removeItem(key);
  }
};
