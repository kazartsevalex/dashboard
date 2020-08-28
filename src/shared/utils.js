export const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

Storage.prototype.setObject = function(key, value) {
  this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
  const value = this.getItem(key);
  return value && JSON.parse(value);
}
