/* 1 - Простой вариант */
console.log("Hello" + " " + "world!")
console.log("-------------------------------------------")

/* 2 - Вариант с переменными */
let a = "world!"
console.log("Hello" + " " + a)
console.log("-------------------------------------------")

/* 3 - Вариант с += */
let s = "Hello"
s += " world!"
console.log(s)
console.log("-------------------------------------------")

/* 4 - Вариант шаблонными строками (Template Literals) */
const userName = "world"        // Переменная для шаблона
const userGreeting = `Hello ${userName}!`       // Применяем шаблонизатор

console.log(userGreeting)
console.log("-------------------------------------------")

/* 5 - Вариант с методом concat() */
const greeting = "Hello"
const happySmile = "!"

/* К переменной greeting добавляем еще 'тройничёк' */
const finalGreetig = greeting.concat(" ", userName, happySmile); // userName определили ранее см. выше

console.log(finalGreetig)
console.log("-------------------------------------------")

/* 6 - Комбинация вариантов */

const login = "Paul"
const age = 325
const hobbies = ["reading", "fishing", "flying"] // Задаем массив

const hi = `Hello, ${login}! ` + `You are ${age} years old.`    // Первая часть приветствия
const hobbyList = hobbies.join(" and ") // Разделитель для хобби
const result = hi.concat(" Your hobbies: ", hobbyList)    // Соединяем "приветствие" hi с элементами массива с разделителем

console.log(result); //Hello, Paul! You are 325 years old. Your hobbies: reading and fishing and flying

