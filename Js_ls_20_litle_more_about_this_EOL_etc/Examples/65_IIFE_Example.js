'use strict'; // Не забываем точку с запятой после строки!

/* Если у нас есть задача создать функцию вызываемую один раз мы можем использовать - IIFE */

(function(){
        console.log('Start once - demo IIFE');
        const innerIIFEvar = 1;
})();

/* Все переменные объявленные внутри IIFE функции там и остаются и уничтожаются по завершении функции */
if(typeof innerIIFEvar === 'undefined'){
        console.log('Переменная не определена');
} else {
        console.log(innerIIFEvar);
}
