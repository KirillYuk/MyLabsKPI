const unique = (array) => {
  const result = [];
  for (const item of array) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

const result = unique([1, 1, 1, 2, 3, 2, 4, 5, 5, 6, 7, 8, 8, 9]);
console.log(result);