export const required = (value) => {
  if (value) {
    return undefined;
  }
  return "Field is require";
};

export const maxLength30 = (value) => {
  if (value && value.length > 30) {
    return "Too long.";
  }
  return undefined;
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value && value.length > maxLength) {
    return "Too long.";
  }
  return undefined;
};
