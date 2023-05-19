const removeIdFromPath = (path: string): string => {
  return path.replace(/:id$/, "");
};

export { removeIdFromPath };
