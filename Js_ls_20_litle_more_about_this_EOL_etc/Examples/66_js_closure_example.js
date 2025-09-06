'use strict';

/* Внешняя функция */
function changeBalance(){
        /* Переменная, которую использует и запоминает внутренняя возвращаемая функция */
        let balance = 0; 
        return function(sum = 0){
                balance += sum;
                console.log(`Баланс: ${balance}`);
        }
}

/* Мы вызвали функцию и она вернула свою анонимную внутреннюю функцию */ 
const change = changeBalance();
const newChange = changeBalance();

console.log(change); // [Function (anonymous)]
change(); // 0
console.log("___________________________________________");

change(100); // 100
change(-50); // 50
change(200); // 250
console.log("___________________________________________");

console.log(newChange); // [Function (anonymous)]
newChange(2000); // 2000
