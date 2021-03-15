type Person = { name: string; age: number };

const makePerson = (name: string, age: number): null | Person => {
  if (age < 0) return null;

  return { name, age };
};

console.log(makePerson("Foo", 20));
console.log(makePerson("Foo", -20));
