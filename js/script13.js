// Функція isAdult оголошує один параметр age(вік),
// значення якого буде задаватися під час її виклику.
// Присвой змінній passed вираз перевірки віку користувача
// на повноліття.Людина вважається повнолітньою у віці 18 років і старше.

//ТЕСТИ

// Оголошена функція isAdult(age)
// У виразі перевірки використовується оператор >=
// Виклик isAdult(20) повертає true
// Виклик isAdult(14) повертає false
// Виклик isAdult(8) повертає false
// Виклик isAdult(37) повертає true

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// function isAdult(age) {
//   // Change code below this line
//   const passed = ;

//   // Change code above this line
//   return passed; //console.log(passed);
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

function isAdult(age) {
  // Change code below this line
  const passed = age >= 18;

  // Change code above this line
  //   return passed;
  console.log(passed);
}

isAdult(20);
isAdult(14);
isAdult(8);
isAdult(37);
