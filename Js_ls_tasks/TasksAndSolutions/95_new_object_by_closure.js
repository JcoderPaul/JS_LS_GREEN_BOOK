'use strict';

/**
 * Задача 95 - Сделать функцию пользователя, которая берет за основу
 * userInfo (приведенный ниже) и за счет замыкания создает новый объект,
 * с которым можно работать как user1().increse(100) 
 */

const userInfo = {
        balance: 0,
        operations: 0,
        increse: function(sum) {
                this.balance += sum;
                this.operations++;
        }
}

/* Используем замыкание */
function createUser(){
        const userObj = userInfo;
        return function(){
                return userObj;
        }
}

const user1 = createUser();
user1().increse(100);
user1().increse(200);

console.log(user1()); // { balance: 300, operations: 2, increse: [Function: increse] }

/* !!! ЛОВУШКА ССЫЛОК !!! */

const user2 = createUser();
user2().increse(300) // 600, а не 300, как можно было бы ожидать, т.к. мы ссылаемся на первоначальный объект 
console.log(user2()); // { balance: 600, operations: 3, increse: [Function: increse] }

/* Решение - каждый раз создавать новый объект внутри "создающей" функции */
function createUserByUserInfo(templateUser) {
        const userObj = {
                balance: 0,
                operations: 0,
                increse: function(sum) {
                        this.balance += sum;
                        this.operations++;
                }
        };
        return function(){
                return userObj;
        }
}

const user3 = createUserByUserInfo(userInfo);
user3().increse(230);
console.log(user3()); // { balance: 230, operations: 1, increse: [Function: increse] }