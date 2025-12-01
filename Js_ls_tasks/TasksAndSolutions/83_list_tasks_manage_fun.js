import brLine from "./js_border_line.js";

/*
ЗАДАЧА 83 - Сделать свои функции обработки массива.

Дан список задач:
const tasks = ['Задача 1']

Сделать функции:
- Добавления задачи в конец массива;
- Удаление задачи по названию;
- Перенос задачи в начало списка по названию;

Исходный массив всегда изменяется. 
*/

const tasks = ['Задача 1'];

function add(task){
        tasks.push(task);
}

function remove(task){
        const findIndex = tasks.indexOf(task);
        if(findIndex === -1){
                return; // Просто завершаем функцию
        }
        tasks.splice(findIndex, 1);
}

function raisePriority(task){
        const findIndex = tasks.indexOf(task);
        if(findIndex === -1){
                return; // Просто завершаем функцию
        }
        const oldTask = tasks[findIndex];
        tasks.splice(findIndex, 1);
        tasks.unshift(oldTask);
}

add('Задача 2');
add('Задача 3');
console.log(tasks); // Добавили задачи см. рез. [ 'Задача 1', 'Задача 2', 'Задача 3' ]
brLine();

remove('Задача 6');
console.log(tasks); // Пытаемся удалить, то, чего нет.
brLine()

remove('Задача 1'); // Теперь удаляем, то, что есть
console.log(tasks); // [ 'Задача 2', 'Задача 3' ]
brLine()

add('Задача 6'); // Добавляем задачу
console.log(tasks); // [ 'Задача 2', 'Задача 3', 'Задача 6' ]
brLine();

raisePriority('Задача 6'); // Повышаем ее приоритет
console.log(tasks); // [ 'Задача 6', 'Задача 2', 'Задача 3' ]
brLine()