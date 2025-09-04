import {
        sumFun,
        aForExport,
        bForExport as srtToInt // На случай наличия в текущем модуле одноименных с импортом переменных используем псевдоним.
} from './module_1.mjs'

let firstElem = aForExport;
let secondElem = Number(srtToInt);
console.log("FirstElem: " + firstElem + ", second elem: " + secondElem);
console.log("-----------------------------------------------");

const res_one = sumFun(firstElem, secondElem);
console.log("Sum: " + res_one);

