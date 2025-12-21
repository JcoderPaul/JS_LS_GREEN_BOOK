import brLine from "./js_border_line.js";

/**
 * Задача 94 - Связать (добавить) функцию сброса пароля с объектом пользователь.
 * 
 * Создать объект пользователь с паролем.
 * Связать внешнюю функцию (добавить) с пользователем и сбросить пароль. 
 */

function removePassword(reset){
        reset ? this.password = undefined : this.password = '1';
}

const user = {
        userName: 'Malcolm',
        password: '123',
}

const user2 = {
        userName: 'Duglas',
        password: '321',
}

const user3 = {
        userName: 'Sanarita',
        password: '531',
}

console.log(user.password); // 123
removePassword.call(user, true);
console.log(user.password); // undefined

brLine();

console.log(user2.password); // 123
removePassword.apply(user2, [true]);
console.log(user2.password); // undefined

brLine();

console.log(user3.password); // 123
const removePassUser3 = removePassword.bind(user3, true); // Связали уже с аргументами
removePassUser3(); // Вызвали
console.log(user3.password); // undefined