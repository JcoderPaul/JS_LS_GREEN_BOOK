function brLine(){
        console.log("_____________________________________");
}

/*
ЗАДАЧА 82 - Сможет ли покупатель купить PC...

Есть покупатель:
- buyerAge - возраст;
- hasJob - есть или нет работа;
- ownBuyerMoney - собственные деньги покупателя;

Рассчитать, сможет ли он купить компьютер за 2000 у.е. Для покупки он может использовать свои деньги
и кредитную линию. Кредит ему откроют на 500 у.е. если ему больше 24-х лет и у него есть работа. Если
ему более 24-х лет, но у него нет работы, ему могут дать в кредит 100 у.е. Во всех остальных случаях
он не получит кредитной линии.

Написать функцию, которая принимает данные пользователя, товара и возвращает true или false в зависимости
от условий.

*/

let age = 26;
let ownMoney = 1600;
let isWorking = true;

let newPcPrice = 2000;

function culcCredit(buyerAge, hasJob = false){
        switch(true){
                case buyerAge > 24 && hasJob: return 500;
                case buyerAge > 24: return 100;
                default: return 0;
        }
}

function canBuyPc(pcPrice, buyerAge, ownBuyerMoney, hasJob = false){
        const creditMoney = culcCredit(buyerAge, hasJob);
        return pcPrice <= creditMoney + ownBuyerMoney;
}

console.log(canBuyPc(newPcPrice, age, ownMoney) ? "Вы сможете купить компьютер" : "Не хватает денег на покупку");
brLine();
console.log(canBuyPc(newPcPrice, age, ownMoney, isWorking) ? "Вы сможете купить компьютер" : "Не хватает денег на покупку");