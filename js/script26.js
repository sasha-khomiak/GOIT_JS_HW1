// Функція checkPassword(password) порівнює переданий їй пароль
//(параметр password) зі збереженим паролем адміністратора
//(константа ADMIN_PASSWORD) і повертає рядок з повідомленням про результат.

// Використовуючи тернарний оператор, доповни функцію таким чином, що:

// Якщо значення password і ADMIN_PASSWORD збігаються, присвой змінній
// message рядок "Access is allowed".
// В іншому випадку, присвой message рядок "Access denied, wrong password!".

//ТЕСТИ

// Оголошена функція checkPassword(password)
// Використаний тернарний оператор
// Виклик checkPassword("jqueryismyjam") повертає "Access is allowed"
// Виклик checkPassword("angul4r1sl1f3") повертає "Access denied, wrong password!"
// Виклик checkPassword("r3actsux") повертає "Access denied, wrong password!"

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

//   // Change code above this line
//   return message; //console.log(message);
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
  message =
    password === ADMIN_PASSWORD
      ? "Access is allowed"
      : "Access denied, wrong password!";
  // Change code above this line
  // return message;
  console.log(message);
}

checkPassword("jqueryismyjam");
checkPassword("angul4r1sl1f3");
checkPassword("r3actsux");
