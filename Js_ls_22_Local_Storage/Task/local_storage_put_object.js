/* 
У нас есть ключ 'key' и некий объект: { text: "I'm going back home", quantity: 1}
нужно разместить в локальном хранилище браузера этот объект под этим ключом.  
*/

const key = 'key';
const keyObj = 'objKey';

const myObj = { text: "I'm going back home", quantity: 1};

/* Превратили в строку */
const testStr = JSON.stringify(myObj);
console.log(testStr); // {"text":"I'm going back home","quantity":1}

/* Кладем в Local Storage объект */
localStorage.setItem(keyObj, myObj); // [object Object]

/* 
Кладем в Local Storage сконвертированный в строку объект, 
при надобности его можно достать и спарсить обратно в объект.
*/
localStorage.setItem(key, testStr); // {"text":"I'm going back home","quantity":1}

