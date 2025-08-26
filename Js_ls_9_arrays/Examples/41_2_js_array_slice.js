import brLine from "../../Js_ls_tasks/TasksAndSolutions/js_border_line.js";

const hero = ['Batman', 'Superman', 'Catwoman', 'PoisonIvy'];

/* Не модифицирующий */

const res = hero.slice(2);
console.log(hero); // [ 'Batman', 'Superman', 'Catwoman', 'PoisonIvy' ]
console.log(res); // [ 'Catwoman', 'PoisonIvy' ]
brLine();

const resTwo = hero.slice(0, 2);
console.log(hero);
console.log(resTwo); // [ 'Batman', 'Superman' ] - 2 - не включительно
brLine();

/*
        ['Batman', 'Superman', 'Catwoman', 'PoisonIvy']
forward     0           1           2            3
backward  -4/0         -3          -2           -1
*/

const resSix = hero.slice(-1);
console.log(hero);
console.log(resSix); // [ 'PoisonIvy' ]
brLine();

const resThree = hero.slice(-2);
console.log(hero);
console.log(resThree); // [ 'Catwoman', 'PoisonIvy' ]
brLine();

const resFour = hero.slice(1, -2); // т.е. с первого элемента, по -2 не вкл. 
console.log(hero);
console.log(resFour); // [ 'Superman' ]