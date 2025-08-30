const userNameWithNick = 'Duglas aka deep digging Lind';

const arrFromStr = userNameWithNick.split(' ');
console.log(arrFromStr);

/* Деструктуризация */
const [firstName, , , , surname] = userNameWithNick.split(' ');
console.log(firstName);
console.log(surname);

/* Объединим массив в строку */
const strToPrn = arrFromStr.join(' ');
console.log(strToPrn);

