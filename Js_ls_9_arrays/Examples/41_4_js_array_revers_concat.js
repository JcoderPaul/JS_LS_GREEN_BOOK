import brLine from "../../Js_ls_tasks/TasksAndSolutions/js_border_line.js";

/* Модифицирующий */

const hero = ['Batman', 'Superman', 'Catwoman', 'PoisonIvy'];
const res = hero.reverse();
console.log(hero); // [ 'PoisonIvy', 'Catwoman', 'Superman', 'Batman' ]
console.log(res); // [ 'PoisonIvy', 'Catwoman', 'Superman', 'Batman' ]
brLine();

/* Не модифицирующий */
const newHero = ['Aquaman', 'BlackCanary'];

const resTwo = hero.concat(newHero); // Соединили
console.log(hero); // [ 'PoisonIvy', 'Catwoman', 'Superman', 'Batman' ]
console.log(resTwo); // [ 'PoisonIvy', 'Catwoman', 'Superman', 'Batman', 'Aquaman', 'BlackCanary']