/* 
Поскольку загружаем дефолтный экспорт, из файла с единственным 
методом, можем присвоить любое имя отличное от исходного при 
импорте. 
*/
import sumFun from './module_one.mjs'

const firstElem = 4;
const secondElem = 10;

const res_one = sumFun(firstElem, secondElem);
console.log(res_one);
console.log("-----------------------------------------------");

console.log(sumFun(23, 43));

console.log(onlyOneModuleConst); // ReferenceError: onlyOneModuleConst is not defined
