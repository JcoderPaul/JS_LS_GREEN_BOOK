function brLine(){
        console.log("______________________________________");
}

/*
ЗАДАЧА 81 - Сможет ли пользователь купить игру...

Пользователь хочет приобрести игру, и может сделать это только при условии, что:
- Его баланс больше 1000 у.е. (balance) или число бонусов больше 100 (bonusBalance);
- Он не забанен (isBanned = false);
- Игра уже не была куплена ранее (isExist = false);
- Игра есть в продаже (isSelling = true);

Написать условие для покупки и вывести в консоль.
*/

let balance = 1800;
let bonusBalance = 120;
let isBanned = false;
let isExist = false;
let isSelling = true;

/* 1 - Вариант с функцией */
function main() {
        let answer;
        if(balance > 1000 || bonusBalance > 100) {
                answer = (!isBanned && !isExist && isSelling) ? "Покупка игры доступна" : "Вы не можете купить игру";
        } else {
                answer = "Вы не можете купить игру";
        }
        console.log(answer);
}

main();
brLine();

/* 2 - Вариант только с условиями */
let canBuy = (balance > 1000 || bonusBalance > 100) && !isBanned && !isExist && isSelling;
console.log(canBuy ? "Покупка игры доступна" : "Вы не можете купить игру");        
