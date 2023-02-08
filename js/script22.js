// Функція checkIfCanAccessContent(subType) перевіряє,
// чи може користувач отримати доступ до контенту.
// Перевірка відбувається за типом передплати.
// Отримати доступ можуть тільки користувачі з передплатою pro або vip.

// Присвой змінній canAccessContent вираз перевірки передплати.
// Якщо значення параметра subType дорівнює рядкам "pro" або "vip",
// користувач отримає доступ.Результатом виразу перевірки буде буль
// true або false.

//ТЕСТИ

// Оголошена функція checkIfCanAccessContent(subType)
// У виразі перевірки використаний оператор ||
// Виклик checkIfCanAccessContent("pro") повертає true
// Виклик checkIfCanAccessContent("starter") повертає false
// Виклик checkIfCanAccessContent("vip") повертає true
// Виклик checkIfCanAccessContent("free") повертає false

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = ; // Change this line

//   return canAccessContent; //console.log(canAccessContent);
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === "pro" || subType === "vip"; // Change this line

  // return canAccessContent;
  console.log(canAccessContent);
}

checkIfCanAccessContent("pro");
checkIfCanAccessContent("starter");
checkIfCanAccessContent("vip");
checkIfCanAccessContent("free");
