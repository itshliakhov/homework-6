/*Напишите функцию, которая запускает цикл. Цикл на каждой итерации предлагает через prompt ввести число, большее 100 (но максимум 10 итераций цикла) . Если посетитель ввёл число меньше ста – попросить ввести ещё раз, и так далее. Если пользователь вводит число больше ста, текст или цикл заканчивает все итерации, то функция выводит в консоль последний ввод пользователя и завершает функцию. */
function enterInfo() {
  for (let i = 0; i <= 10; i++) {
    const promptValue = prompt("Enter your number more than 100");
    if (promptValue <= 100) {
      if (i === 10) {
        console.log("Loop worked 10 times. Reload and try again");
        break;
      }
      alert("Enter number more than 100!");
      continue;
    }
    console.log(promptValue);
    break;
  }
}
enterInfo();
