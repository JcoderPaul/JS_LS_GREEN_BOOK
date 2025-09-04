const sumFun = (a, b) => {
        return a + b;
}

const aForExport = 1;
const bForExport = "23";

/* Комплексный экспорт из текущего модуля */
export {
        sumFun,
        aForExport,
        bForExport
}        