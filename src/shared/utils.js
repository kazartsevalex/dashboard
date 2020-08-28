export const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};
