const sumFun = (a, b) => {
        return a + b;
}

/* 
Все переменные в переделах одного модуля - 
отдельная зона видимости - они локальные и 
в других модулях без эксорта не видны 
*/
const onlyOneModuleConst = 34;

export default sumFun