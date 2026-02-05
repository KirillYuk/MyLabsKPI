const ages = (persons) => {
  const data = {};
  for (const name in persons) {
    const person = persons[name];
    data[name] = person.died - person.born;
  }
  return data;
};
console.log(ages({
  "Isaac Newton": { born: 1643, died: 1727 },
  "Albert Einstein": { born: 1879, died: 1955 },
  "Galileo Galilei": { born: 1564, died: 1642 },
}));