/** ЗАДАЧА 77 - Замыкания
 *
 * 1. Создайте функцию "createGreeting", внутри которой создайте:
 *  - переменную "greetingString" со значением "Hey, this is" (объявите ее используя "let")
 *  - функцию "greet" с одним параметром, которая должна возвращать строку-приветствие на основании 
 *    "greetingString" и параметра, например, "Hey, this is Bob"
 *  - функцию "changeGreeting" с одним параметром, которая должна изменять значение переменной "greetingString"
 *
 * 2. Функция "createGreeting" должна вернуть объект с двумя методами:
 *  - greet
 *  - changeGreeting
 * 
 * Для более четкого понимания см.:
 * - ..\JS_LS\Js_ls_6_functional_expressions\DOC\СlosuresOnJavaScript.md
 */

/* Шаг.1 - Создаем требуемую функцию */
function createGreeting(){
        /* Шаг.2 - Создаем требуемую переменную и задаем значение */
        let greetingString = "Hey, this is";
        /* Шаг.3 - Создаем требуемую функцию 'приветствие' */
        function greet(name){
                return `${greetingString} ${name}`;
        }
        /* Шаг.4 - Создаем требуемую функцию 'изменить приветствие' */
        function changeGreeting(newGreeting){
                greetingString = newGreeting;        
        }
        /* Шаг.5 - Создаем структуру возвращаемого объекта */
        return {
                greet,
                changeGreeting
        }
}

/* Тест */
const greeting1 = createGreeting()
console.log(greeting1.greet('Bob')) // Hey, this is Bob

greeting1.changeGreeting('Good Morning from')
console.log(greeting1.greet('Emily')) // Good Morning from Emily

/* ____________  */

const greeting2 = createGreeting()
console.log(greeting2.greet('Emily')) // Hey, this is Emily
