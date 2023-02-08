// Функція getNameLength(name) приймає ім'я (параметр name)
// і повертає рядок, в якому вказана його довжина.
// Доповни шаблонний рядок у змінній message довжиною рядка з параметра name.

//ТЕСТИ

// Оголошена функція getNameLength(name)
// Виклик функції getNameLength("Poly") повертає "Name Poly is 4 characters long"
// Виклик функції getNameLength("Harambe") повертає "Name Harambe is 7 characters long"
// Виклик функції getNameLength("Billy") повертає "Name Billy is 5 characters long"
// Виклик функції getNameLength("Joe") повертає "Name Joe is 3 characters long"

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// function getNameLength(name) {
//   const message = `Name ${} is ${} characters long`; // Change this line

//     return message;
//     // console.log(message);
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  // return message;
  console.log(message);
}

getNameLength("Poly");
getNameLength("Harambe");
getNameLength("Billy");
getNameLength("Joe");
