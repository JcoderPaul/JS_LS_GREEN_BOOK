/*
ЗАДАЧА 86 - Сделать функции для анализа транзакций.

Есть массив выгрузки операций пользователя:
const operations = [1000, -700, 300, -500, 10000]
Также есть начальный баланс - 100 у.е.

Необходимо сделать ФУНКЦИИ расчета:
- Итогового баланса;
- Наличия отрицательного баланса (если после очередной операции баланс < 0, то выдавать false);
- Рассчета среднего расхода и среднего дохода;
*/
const startBalance = 100;
const operations = [1000, -700, 300, -500, 10000];

function avrIncome(operations){
        let totalIncome = 0;
        let count = 0;
        for (let value of operations){
                if (value < 0){ 
                        continue;
                }
                totalIncome +=value;
                count++;
        }
        return totalIncome / count;
}

function avrCoast(operations){
        let totalCoast = 0;
        let count = 0;
        for (let value of operations){
                if (value > 0){ 
                        continue;
                }
                totalCoast +=value;
                count++;
        }
        return totalCoast / count;
}

function getFinalBalance(startBalance, operations){
        let totalBalanse = startBalance;
        for (let value of operations){
                totalBalanse +=value;
        }
        return totalBalanse;
}

function isNegativeBalance(startBalance, operations){
        let currentBalance = startBalance;
        let isPositive = true;
        for (let value of operations){
                currentBalance +=value;
                if (currentBalance < 0){
                        isPositive = false;
                        break;
                }
        }
        return isPositive;
}

console.log(avrIncome(operations));
console.log(avrCoast(operations));
console.log(getFinalBalance(startBalance, operations));
console.log(isNegativeBalance(startBalance, operations));