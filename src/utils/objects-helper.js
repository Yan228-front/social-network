export const updateObjectInArray = (
  items,
  itemsId,
  objectPropName,
  newObjProps
) => {
  debugger;
  return items.map((u) => {
    if (u[objectPropName] === itemsId) {
      return {
        ...u,
        ...newObjProps,
      };
    }
    return u;
  });
};
