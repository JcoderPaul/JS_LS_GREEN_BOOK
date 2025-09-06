'use strict'

const toScreen = 13;

const testEOL = {
        toScreen,

        /* 'Привычная' запись метода */
        getToScreen: function(){
                return this.toScreen;
        },
        
        /* Сокращенная запись метода */
        altGetToScreen(){
                return this.toScreen;
        }
}

/* Тест */

console.log(testEOL.getToScreen());
console.log(testEOL.altGetToScreen());
console.log(testEOL.toScreen);