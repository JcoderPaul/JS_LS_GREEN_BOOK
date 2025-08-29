/* Простой if - "классика" почти в любом языке */
let age = 18;

if (age >= 18) {
  console.log("Вы совершеннолетний");
}

/* if с else */
age = 16;

if (age >= 18) {
  console.log("Вы совершеннолетний");
} else {
  console.log("Вы несовершеннолетний");
}

/* Каскад - if else if */
age = 25;

if (age < 18) {
  console.log("Вы несовершеннолетний");
} else if (age >= 18 && age < 65) {
  console.log("Вы взрослый");
} else {
  console.log("Люди столько не живут!");
}

/* Простой switch */
let day = 3;

switch (day) {
  case 1:
    console.log("Понедельник");
    break;
  case 2:
    console.log("Вторник");
    break;
  case 3:
    console.log("Среда");
    break;
  case 4:
    console.log("Четверг");
    break;
  case 5:
    console.log("Пятница");
    break;    
  default:
    console.log("Гуляем...!");
}

/* Тернарный оператор - краткий оператор выбора */
age = 20;
let userStatus = age >= 21 ? "Могешь водить машину" : "Милиция считает, что тебе за руль еще рано!";
console.log(userStatus); // Совершеннолетний
