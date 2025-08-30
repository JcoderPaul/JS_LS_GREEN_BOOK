const book = 'The Shawshank Redemption';

console.log(book.length); // 24

console.log(book.repeat(10)); // 10-ть раз повторит заданную строку

/* У нас первоначальная стр. 24 символа, мы расширяем ее до 30 и остатки в начале заполняем '-' */
console.log(book.padStart(30, "-")); // ------The Shawshank Redemption

/* У нас первоначальная стр. 24 символа, мы расширяем ее до 30 и остатки в конце заполняем '-' */
console.log(book.padEnd(30, "-")); // The Shawshank Redemption------