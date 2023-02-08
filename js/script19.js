// Функція checkPassword(password) отримує пароль користувача
//в параметр password, перевіряє його на збіг з паролем
//адміністратора у змінній ADMIN_PASSWORD і повертає
//повідомлення про результат порівняння, яке зберігається у змінній message.

// Якщо значення параметра password дорівнює null,
//значить користувач скасував операцію і в message записується рядок
//"Canceled by user!".
// Якщо значення параметра password збігається зі значенням ADMIN_PASSWORD,
//у змінну message присвоюється рядок "Welcome!".
// Якщо жодна з попередніх умов не виконалася, у змінну message
//записується рядок "Access denied, wrong password!".

//ТЕСТИ

// Оголошена функція checkPassword(password)
// Виклик checkPassword("mangohackzor") повертає "Access denied, wrong password!"
// Виклик checkPassword(null) повертає "Canceled by user!"
// Виклик checkPassword("polyhax") повертає "Access denied, wrong password!"
// Виклик checkPassword("jqueryismyjam") повертає "Welcome!"

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if () { // Change this line
//     message =  'Canceled by user!';
//   } else if () { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message; // console.log(message);
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  if (password === null) {
    // Change this line
    message = "Canceled by user!";
  } else if (password === ADMIN_PASSWORD) {
    // Change this line
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  //   return message;
  console.log(message);
}

checkPassword("mangohackzor");
checkPassword(null);
checkPassword("polyhax");
checkPassword("jqueryismyjam");
