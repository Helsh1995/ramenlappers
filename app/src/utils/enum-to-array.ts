export const enumToArray = (enumType) =>
  Object.keys(enumType).map(function (type) {
    return enumType[type];
  });

