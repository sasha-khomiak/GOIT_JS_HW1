// Функція getSubstring(string, length) приймає рядок і повертає підрядок
// від початку і до length символів.Вона оголошує два параметри,
// значення яких будуть задаватися під час її виклику:

// string - оригінальний рядок
// length - кількість символів з початку рядка для підрядка
// Присвой змінній substring вираз створення підрядка довжиною
// length символів(від початку) з рядка string.

//ТЕСТИ

// Оголошена функція getSubstring(string, length)
// Виклик функції getSubstring("Hello world", 3) повертає "Hel"
// Виклик функції getSubstring("Hello world", 6) повертає "Hello"
// Виклик функції getSubstring("Hello world", 8) повертає "Hello wo"
// Виклик функції getSubstring("Hello world", 11) повертає "Hello world"
// Виклик функції getSubstring("Hello world", 0) повертає ""

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// function getSubstring(string, length) {
//   const substring = ; // Change this line

//     return substring;
//     // console.log(substring);
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

function getSubstring(string, length) {
  const substring = string.slice(0, length); // Change this line

  // return substring;
  console.log(substring);
}

getSubstring("Hello world", 3);
getSubstring("Hello world", 6);
getSubstring("Hello world", 8);
getSubstring("Hello world", 11);
getSubstring("Hello world", 0);
