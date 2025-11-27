const removeElements = (array, ...items) => {
  for (const item of items) {
    const index = array.indexOf(item);
    if (index !== -1) array.splice(index, 1);
  }
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
removeElements(array, 2, 5, 9);
console.log(array);