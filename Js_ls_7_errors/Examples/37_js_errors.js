/* Не пойманная ошибка */

const funWithError = () => {
        throw new Error("My first error!")
}

/*
Тут мы хапнем:
throw new Error("My first error!")
        ^
Error: My first error!
*/
funWithError();

/* До этого блока выполнение просто не дойдет, как и в Java, в принципе... */
console.log("Finish program, but unreachable...");