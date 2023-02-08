// Функція formatMessage(message, maxLength) приймає рядок (параметр message)
//і форматує його, якщо довжина перевищує значення в параметрі maxLength.

// Доповни код функції таким чином, що якщо довжина рядка:

// не перевищує maxLength, функція повертає його в початковому вигляді.
// більша за maxLength, то функція обрізає рядок до maxLength символів
//і додає в кінець три крапки "...", після чого повертає скорочену версію.

//ТЕСТИ

// Оголошена функція formatMessage(message, maxLength)
// Виклик функції formatMessage("Curabitur ligula sapien", 16) повертає "Curabitur ligula..."
// Виклик функції formatMessage("Curabitur ligula sapien", 23) повертає "Curabitur ligula sapien"
// Виклик функції formatMessage("Vestibulum facilisis purus nec", 20) повертає "Vestibulum facilisis..."
// Виклик функції formatMessage("Vestibulum facilisis purus nec", 30) повертає "Vestibulum facilisis purus nec"
// Виклик функції formatMessage("Nunc sed turpis a felis in nunc fringilla", 15) повертає "Nunc sed turpis..."
// Виклик функції formatMessage("Nunc sed turpis a felis in nunc fringilla", 41) повертає "Nunc sed turpis a felis in nunc fringilla"

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line

//   /// Change code above this line
//   return result;
// //   console.log(result);
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

function formatMessage(message, maxLength) {
  let result;
  // Change code below this line

  if (message.length > maxLength) {
    result = `${message.slice(0, maxLength)}...`;
  } else {
    result = message;
  }

  /// Change code above this line
  // return result;
  console.log(result);
}

formatMessage("Curabitur ligula sapien", 16);
formatMessage("Curabitur ligula sapien", 23);
formatMessage("Vestibulum facilisis purus nec", 20);
formatMessage("Vestibulum facilisis purus nec", 30);
formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);
formatMessage("Nunc sed turpis a felis in nunc fringilla", 41);
