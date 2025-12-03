import brLine from "./js_border_line.js";

/*
ЗАДАЧА 85 - Сделать свой 'реверсер' массива.

Задача вывести в консоль строку "Barman is a best hero of DC universe!" из
массива, проходя его циклом в обратном порядке, не используя метод reverse.

const iLikeIt = ['!', 'universe', 'DC', 'of', 'hero', 'best', 'the', 'is', 'Batman']
*/

const iLikeIt = ['!', 'universe', 'DC', 'of', 'hero', 'best', 'the', 'is', 'Batman'];

/* 1 - Вариант с конкатенацией строк */
let strRes;

for (let i = iLikeIt.length - 1; i >= 0; i--){
        if (i === iLikeIt.length - 1){
                strRes = iLikeIt[i];        
                continue;
        }
        strRes = strRes + " " + iLikeIt[i];
}

console.log(strRes);
brLine();

/* 2 - Вариант с другим массивом и преобразованием его в строку */
const reversArray = new Array();

for (let i = iLikeIt.length - 1; i >= 0; i--){
        reversArray.push(iLikeIt[i]);
}

console.log(reversArray.join(" "));
brLine();

/* 3 - Simple reverse method, но нас просили так не делать... */
console.log(iLikeIt.reverse().join(" "));