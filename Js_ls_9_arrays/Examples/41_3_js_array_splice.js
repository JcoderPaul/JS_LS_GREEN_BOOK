import brLine from "../../Js_ls_tasks/TasksAndSolutions/js_border_line.js";

/* Модифицирующий */

const hero = ['Batman', 'Superman', 'Catwoman', 'PoisonIvy'];
const res = hero.splice(2); // Отрезаем кусок массива
console.log(hero); // [ 'Batman', 'Superman' ]
console.log(res); // [ 'Catwoman', 'PoisonIvy' ]
brLine();

/* Т.к. модифицирует используем каждый раз новый массив */
const heroTwo = ['Batman', 'Superman', 'Catwoman', 'PoisonIvy'];
const resTwo = heroTwo.splice(0, 2); // Взяли с 0-го элемента и вырезали 2-а элемента
console.log(heroTwo); // [ 'Catwoman', 'PoisonIvy' ]
console.log(resTwo); // [ 'Batman', 'Superman' ]
brLine();

/*
От позиции:

        ['Batman', 'Superman', 'Catwoman', 'PoisonIvy']
forward     0           1           2            3
backward  -4/0         -3          -2           -1
*/

const heroThree = ['Batman', 'Superman', 'Catwoman', 'PoisonIvy'];
const resThree = heroThree.splice(-1);
console.log(heroThree); // [ 'Batman', 'Superman', 'Catwoman' ]
console.log(resThree); // [ 'PoisonIvy' ]
brLine();

const heroFour = ['Batman', 'Superman', 'Catwoman', 'PoisonIvy'];
const resFour = heroFour.splice(-3, 2); // C -3-й позиции не включительно 2-а элемента вырезаем
console.log(heroFour); // [ 'Batman', 'PoisonIvy' ]
console.log(resFour); // [ 'Superman', 'Catwoman' ]