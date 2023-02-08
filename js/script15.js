// Додай вираз перевірки повноліття користувача, значення параметра age,
// в умову для інструкції if.

// Якщо користувач повнолітній, повинен виконуватися блок if і
// у змінну message записується рядок "You are an adult".
// В іншому випадку повинен виконуватися блок else і записується рядок
// "You are a minor".

//ТЕСТИ

// Оголошена функція checkAge(age).
// У виразі перевірки віку використаний оператор >=
// Виклик checkAge(20) повертає "You are an adult"
// Виклик checkAge(8) повертає "You are a minor"
// Виклик checkAge(14) повертає "You are a minor"
// Виклик checkAge(38) повертає "You are an adult"

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// function checkAge(age) {
//   let message;

//   if () { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message; //console.log(message);
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

function checkAge(age) {
  let message;

  if (age >= 18) {
    // Change this line
    message = "You are an adult";
  } else {
    message = "You are a minor";
  }

  // return message;
  console.log(message);
}

checkAge(20);
checkAge(8);
checkAge(14);
checkAge(38);
