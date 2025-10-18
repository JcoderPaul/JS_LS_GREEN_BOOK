import brLine from "./js_border_line.js";

/** ЗАДАЧА 42 - Проверка сортировки массива
 *
 * 1. Создайте функцию "arraySortInfo" с одним параметром - "inputArray"
 * 2. Если хотя бы один элемент в массиве не является числом - вернуть "Некоторые элементы не являются числами"
 * 3. Если числа в массиве отсортированы по возрастанию - вернуть "Массив отсортирован по возрастанию"
 * 4. Если числа в массиве отсортированы по убыванию - вернуть "Массив отсортирован по убыванию".
 * 5. Если массив не отсортирован - вернуть "Массив не отсортирован"
 * 6. Если массив состоит из одного элемента - вернуть "Массив не нуждается в сортировке"
 * 
 * Перед рассмотрением варианта 2 изучить док. см. ..\JS_LS\Js_ls_9_arrays\DOC\JavaScriptArrayFunctionEvery.md 
 */

const a = [5, 'abc', 10, 1];
const b = [4, 10, 14, 21, 25, 56];
const c = [150, 132, 111, 80, 32];
const d = [15, 26, 4, 23, 85];
const e = [15, 26];
const g = [64, 16];
const t = [13];
const u = [4, 14, 44, 51, 65, 3];
const uTwo = [150, 132, 101, 75, 240];


/* ----- 1 - Вариант долгий и нудный ----- */
console.log(" ----- 1 - Вариант долгий и нудный ----- ")
brLine();

function sortTypeOfArray(inputArray){
        let analysisResult;

        const forAnaliseArray = new Array(...inputArray);
        let isCurrentSortAsc, isPrevSortAsc;
        let isCurrentSortDesc, isPrevSortDesc;
        let directionSwitch = 0;

        for(let i = 1; i < forAnaliseArray.length; i++) {
                if (forAnaliseArray[i - 1] <= forAnaliseArray[i] && directionSwitch === 0) {
                        isCurrentSortAsc = true;
                        isCurrentSortDesc = false;
                        if (i === 1) {
                                isPrevSortAsc = true;
                                isPrevSortDesc = false;
                        }
                        if (isCurrentSortAsc !== isPrevSortAsc){
                                directionSwitch += 1;
                        }
                        analysisResult = "Массив отсортирован по возрастанию";
                } else if (forAnaliseArray[i - 1] >= forAnaliseArray[i] && directionSwitch === 0) {
                        isCurrentSortDesc = true;
                        isCurrentSortAsc = false;
                        if (i === 1) {
                                isPrevSortDesc = true;
                                isPrevSortAsc = false;                               
                        }
                        if (isCurrentSortDesc !== isPrevSortDesc){
                                directionSwitch += 1;
                        }
                        analysisResult = "Массив отсортирован по убыванию";
                } 
                
                if (directionSwitch > 0){
                        analysisResult = "Массив не отсортирован";        
                }
        }
        return analysisResult;
}

function arraySortInfo(inputArray){
        if(inputArray.length == 1) {
                return "Массив не нуждается в сортировке";
        } 
        
        if(!inputArray.every(elem => typeof elem == "number")) {
                return "Некоторые элементы не являются числами";
        }     

        return sortTypeOfArray(inputArray);  
}

console.log(arraySortInfo(a)); // Некоторые элементы не являются числами
console.log(arraySortInfo(b)); // Массив отсортирован по возрастанию
console.log(arraySortInfo(c)); // Массив отсортирован по убыванию
console.log(arraySortInfo(d)); // Массив не отсортирован
brLine();
console.log(arraySortInfo(e)); // Массив отсортирован по возрастанию
console.log(arraySortInfo(g)); // Массив отсортирован по убыванию
console.log(arraySortInfo(t)); // Массив не нуждается в сортировке
brLine();
console.log(arraySortInfo(u)); // Массив не отсортирован
console.log(arraySortInfo(uTwo)); // Массив не отсортирован

brLine();
console.log(" ----- 2 - Вариант короткий и читаемый ----- ")
brLine();

/* ----- 2 - Вариант короткий и читаемый ----- */
const shortArraySortInfo = (inputArray) => {
        if (inputArray.length == 1) {
                return "Массив не нуждается в сортировке";
        }

        if (inputArray.some((elem) => typeof elem !== 'number')) {
                return 'Некоторые элементы не являются числами'
        }
        
        /* 
        Исходя из документации по методу *.every() мы знаем, что он вернет false если хотя бы один из 
        элементов массива не пройдет заданную в callback функции проверку.
         
        В данном случае, мы проверяем, начиная со второго элемента массива, как и ранее, больше (или равен) 
        он предыдущего или нет. Поскольку мы используем тернарный оператор, то должны предложить ему два 
        варианта, даже если они оба 'true' исходя из конкретной ситуации.

        Поскольку понимание того, как отсортирован массив начинается со второго элемента, нам необходимо 
        на первом элементе массива вернуть true сразу, далее "пропустив первый элемент", условие 'index > 0' 
        как бы "зафиксирует обращение" к условию 'elem >= inputArray[index - 1]' до конца перебора всего 
        массива. Что вернет это условие, для каждого последующего элемента, определит итоговый возврат 
        функции *.every() - хотя бы один 'false', т.е. последующий элемент меньше предыдущего - массив 
        явно не отсортирован по возростанию.

        Та же логика, но в обратную сторону, работает с сортировкой по убыванию, см. код ниже.
        */
        
        if (inputArray.every((elem, index) => index > 0 ? elem >= inputArray[index - 1] : true)) {
                return 'Массив отсортирован по возрастанию'
        }

        if (inputArray.every((elem, index) => index > 0 ? elem <= inputArray[index - 1] : true)) {
                return 'Массив отсортирован по убыванию'
        }

        return 'Массив не отсортирован'
}

console.log(shortArraySortInfo(a)); // Некоторые элементы не являются числами
console.log(shortArraySortInfo(b)); // Массив отсортирован по возрастанию
console.log(shortArraySortInfo(c)); // Массив отсортирован по убыванию
console.log(shortArraySortInfo(d)); // Массив не отсортирован
brLine();
console.log(shortArraySortInfo(e)); // Массив отсортирован по возрастанию
console.log(shortArraySortInfo(g)); // Массив отсортирован по убыванию
console.log(shortArraySortInfo(t)); // Массив не нуждается в сортировке
brLine();
console.log(shortArraySortInfo(u)); // Массив не отсортирован
console.log(shortArraySortInfo(uTwo)); // Массив не отсортирован