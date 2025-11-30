import brLine from "./js_border_line.js";

/*
ЗАДАЧА 82_2 - DRY

"Don't Repeat Yourself"

см. задачу: ..\JS_LS_GREEN_BOOK\Js_ls_tasks\TasksAndSolutions\83_list_tasks_manage_fun.js
*/

const tasks = ['Задача 1'];

function add(task){
        tasks.push(task);
}

function remove(task){
        const findIndex = tasks.indexOf(task);
        if(findIndex === -1){
                return; // Просто завершаем функцию если ничего не нашли для удаления
        }
        /* Теперь наша функция возвращает "удаленный" элемент и мы можем его использовать если надо */
        return tasks.splice(findIndex, 1);
}

function raisePriority(task){
        const toRisePrioriryElement = remove(task); // Вырезаем элемент из массива и запоминаем в новый массив из 1-го элем.
        if(!toRisePrioriryElement){
                return; // Просто завершаем функцию, если при удалении не был создан массив удаленого элемента
        }
        tasks.unshift(toRisePrioriryElement[0]); // splice возвращает массив - у нас он из одного элемента с поз. 0
}

add('Задача 2');
add('Задача 3');
console.log(tasks); // Добавили задачи см. рез. [ 'Задача 1', 'Задача 2', 'Задача 3' ]
brLine();

remove('Задача 6');
console.log(tasks); // Пытаемся удалить, то, чего нет.
brLine()

const removeElem = remove('Задача 1'); // Теперь удаляем, то, что есть
console.log(removeElem);
console.log(tasks); // [ 'Задача 2', 'Задача 3' ]
brLine()

add('Задача 6'); // Добавляем задачу
console.log(tasks); // [ 'Задача 2', 'Задача 3', 'Задача 6' ]
brLine();

raisePriority('Задача 6'); // Повышаем ее приоритет
console.log(tasks); // [ 'Задача 6', 'Задача 2', 'Задача 3' ]
brLine()