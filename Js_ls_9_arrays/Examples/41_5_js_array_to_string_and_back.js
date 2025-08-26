import brLine from "../../Js_ls_tasks/TasksAndSolutions/js_border_line.js";

const url = 'auth/user/login';
const resOfSplit = url.split('/'); // Задаем разделитель
console.log(resOfSplit);
console.log('Array length: ' + resOfSplit.length);
brLine();

const hero = ['Batman', 'Superman', 'Catwoman', 'PoisonIvy'];
const strHeroChain = hero.join('-');
console.log(strHeroChain);