// Функція isNumberNotInRange(start, end, number) перевіряє,
// чи не входить число у проміжок.Тобто число повинно бути меншим
//або дорівнювати start і більшим або дорівнювати end.
//Результатом виразу перевірки буде буль true або false.

// Вона оголошує три параметри, значення яких будуть задаватися
//під час її виклику:

// number - число, невходження якого перевіряється
// start - початок числового проміжку
// end - кінець числового проміжку
// Присвой змінній isNotInRange вираз інверсії значення змінної isInRange,
//використовуючи оператор!.

//ТЕСТИ

// Оголошена функція isNumberNotInRange(start, end, number)
// У виразі використаний оператор !
// Виклик isNumberNotInRange(10, 30, 17) повертає false
// Виклик isNumberNotInRange(10, 30, 5) повертає true
// Виклик isNumberNotInRange(20, 50, 24) повертає false
// Виклик isNumberNotInRange(20, 50, 76) повертає true

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = ; // Change this line

//   return isNotInRange; //console.log(isNotInRange);
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Change this line

  // return isNotInRange;
  console.log(isNotInRange);
}

isNumberNotInRange(10, 30, 17);
isNumberNotInRange(10, 30, 5);
isNumberNotInRange(20, 50, 24);
isNumberNotInRange(20, 50, 76);
