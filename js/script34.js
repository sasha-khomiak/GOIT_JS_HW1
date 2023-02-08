// Функція normalizeInput(input) приймає рядок (параметр input)
// і повертає такий самий рядок, але в нижньому регістрі.
// Присвой змінній normalizedInput вираз створення рядка у
// нижньому регістрі з параметра input.

//ТЕСТИ

// Оголошена функція normalizeInput(input)
// Виклик функції normalizeInput("Hello world") повертає "hello world"
// Виклик функції normalizeInput("This ISN'T SpaM") повертає "this isn't spam"
// Виклик функції normalizeInput("Big SALE") повертає "big sale"

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// function normalizeInput(input) {
//   const normalizedInput = ; // Change this line

//     return normalizedInput;
//     // console.log(normalizedInput);
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line

  // return normalizedInput;
  console.log(normalizedInput);
}

normalizeInput("Hello world");
normalizeInput("This ISN'T SpaM");
normalizeInput("Big SALE");
