var users = {
  Akmal: {
    name: "Akmal",
    surname: "O`ktamov",
    age: 27,
    salary: 800,
  },
  Oybek: {
    name: "Oybek",
    surname: "Sattarov",
    age: 36,
    salary: 1500,
  },
  Umid: {
    name: "Umid",
    surname: "Abdushukurov",
    age: 21,
    salary: 400,
  },
};

// Answer;
// salarySum
function sumSalary(item) {
  var item = users.Akmal.salary + users.Oybek.salary + users.Umid.salary;
  return item;
}
console.log(sumSalary(users));

// ageSum
function avarageAge(sumNext) {
  var result = [];
  for (let i in sumNext) {
    result.push(i);
  }
  var sumAll = sumNext.Akmal.age + sumNext.Oybek.age + sumNext.Umid.age;
  var sumLength = result.length;
  var sumResult = sumAll / sumLength;
  return sumResult;
}
console.log(avarageAge(users));
