import brLine from "./js_border_line.js";

/*
ЗАДАЧА 84 - Сделать 'парсер' URL.

Используя деструктуризацию и ...rest решить задачу.

Дан произвольный URL адрес: https://superheroscool.ru/course/lasers-eyes

Сделать функцию, которая выводит в консоль:
- протокол (https);
- доменное имя (superheroscool.ru);
- путь до целевой страницы (/course/lasers-eyes);
*/

const urlToParse = 'https://superheroscool.ru/course/lasers-eyes';

function getParsUrl(url){
        /* Мы получаем массив элементов + массив остатков от разбивки */
        const[protocol, _, host, ...goalPage] = url.split('/'); // Разбиваем строку и раскидываем по переменным

        console.log(protocol);
        console.log(host);
        console.log(goalPage);
        brLine();

        /* Пара наивных проверок */
        if (protocol === 'https:' || protocol === 'http:'){
                if(!host.includes('.')){
                        return;
                }
                console.log(`Протокол: ${protocol.split(':')[0]}`);
                console.log(`Домен: ${host}`);
                console.log(`Путь до целевой страницы: /${goalPage.join('/')}`);
        }
}

getParsUrl(urlToParse);