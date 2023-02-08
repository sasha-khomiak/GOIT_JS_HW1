// Функція makeMessage(name, price) складає і повертає повідомлення про покупку.
// Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

// name - назва товару
// price - ціна товару
// Доповни код функції таким чином, щоб у змінну message записувався рядок
// "You picked <product name>, price per item is <product price> credits",
// де < product name > і < product price > - це значення параметрів name
// і price.Використовуй синтаксис шаблонних рядків.

// Увага

// Зверни увагу на те, що в коді відсутній виклик функції makeMessage.

//ТЕСТИ

// Оголошена функція makeMessage(name, price)
// Виклик makeMessage('Radar', 6150)
// повертає "You picked Radar, price per item is 6150 credits"
// Виклик makeMessage('Scanner', 3500)
// повертає "You picked Scanner, price per item is 3500 credits"
// Виклик makeMessage('Reactor', 8000)
// повертає "You picked Reactor, price per item is 8000 credits"
// Виклик makeMessage('Engine', 4070)
//повертає "You picked Engine, price per item is 4070 credits"

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// function makeMessage (name, price) {
//   // Change code below this line
//    const message = ;
//   // Change code above this line
//   return message;
//   //console.log(message); // Замість return;
// };

// ------------------ВИКОНАНИЙ КОД ----------------------//

function makeMessage(name, price) {
  // Change code below this line
  const message = `You picked ${name}, price per item is ${price} credits`;
  // Change code above this line

  //   return message;
  console.log(message);
}

makeMessage("Radar", 6150);
makeMessage("Scanner", 3500);
makeMessage("Reactor", 8000);
makeMessage("Engine", 4070);
