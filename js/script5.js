// Оголоси змінну message і запиши в неї повідомлення
//про покупку, рядок у форматі:
//"You picked <назва товару>, price per item is <ціна товару>credits".
//Де < назва товару > і < ціна товару > —
//це значення змінних productName і pricePerItem.
//Використовуй синтаксис шаблонних рядків.

//ТЕСТИ

// Оголошена змінна productName
// Значення змінної productName - це рядок "Droid"
// Оголошена змінна pricePerItem
// Значення змінної price - це число 3500
// Оголошена змінна message
// Значення змінної message - це рядок "You picked Droid, price per item is 3500 credits"

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line

// ------------------ВИКОНАНИЙ КОД ----------------------//

const productName = "Droid";
const pricePerItem = 3500;

// Change code below this line

let message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
console.log(message);
