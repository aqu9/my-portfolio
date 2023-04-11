export const mixTheme = (newTheme = {}, oldTheme = {}) => {
  const updatedTheme = {};

  Object.entries(oldTheme).forEach(([key, value]) => {
    if (typeof value === 'object') {
      updatedTheme[key] = mixTheme(newTheme[key], value);
    } else if (!newTheme[key]) {
      updatedTheme[key] = value;
    } else {
      updatedTheme[key] = newTheme[key];
    }
  });

  return updatedTheme;
};
