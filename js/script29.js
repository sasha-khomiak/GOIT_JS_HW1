// Функція getShippingCost(country) повинна перевіряти можливість доставки
// товару в країну користувача(параметр country) і повертати повідомлення
// про результат, що зберігається у змінній message.
// Обов'язково використовуй інструкцію switch.

// Формат рядка, що повертається "Shipping to <country> will
// cost < price > credits", де замість < country > і < price >,
// необхідно підставити відповідні значення.

// Список країн і вартість доставки:

// China - 100 кредитів
// Chile - 250 кредитів
// Australia - 170 кредитів
// Jamaica - 120 кредитів
// Зі списку видно, що доставка можлива не скрізь.
// Якщо зазначена країна відсутня у списку, то функція повинна
// повернути рядок "Sorry, there is no delivery to your country"

//ТЕСТИ

// Оголошена функція getShippingCost(country)
// В тілі функції використана інструкція switch
// Виклик getShippingCost("Australia") повертає "Shipping to Australia will cost 170 credits"
// Виклик getShippingCost("Germany") повертає "Sorry, there is no delivery to your country"
// Виклик getShippingCost("China") повертає "Shipping to China will cost 100 credits"
// Виклик getShippingCost("Chile") повертає "Shipping to Chile will cost 250 credits"
// Виклик getShippingCost("Jamaica") повертає "Shipping to Jamaica will cost 120 credits"
// Виклик getShippingCost("Sweden") повертає "Sorry, there is no delivery to your country"

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// function getShippingCost(country) {
//   let message;
//   // Change code below this line

//   // Change code above this line
//   return message;
// //   console.log(message);
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

function getShippingCost(country) {
  let message;
  // Change code below this line
  switch (country) {
    case "China":
      message = `Shipping to ${country} will cost 100 credits"`;
      break;
    case "Chile":
      message = `Shipping to ${country} will cost 250 credits"`;
      break;
    case "Australia":
      message = `Shipping to ${country} will cost 170 credits"`;
      break;
    case "Jamaica":
      message = `Shipping to ${country} will cost 120 credits"`;
      break;
    default:
      message = "Sorry, there is no delivery to your country";
  }

  // Change code above this line
  // return message;
  console.log(message);
}

getShippingCost("Australia");
getShippingCost("Germany");
getShippingCost("China");
getShippingCost("Chile");
getShippingCost("Jamaica");
getShippingCost("Sweden");
