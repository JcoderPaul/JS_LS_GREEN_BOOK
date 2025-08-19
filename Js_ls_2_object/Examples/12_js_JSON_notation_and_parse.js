const strJSON = '{"userId":1,"id":1,"info":"test_info"}' // Строку 

const jsonObjectAfterPars = JSON.parse(strJSON) // Парсим в объект

console.log(jsonObjectAfterPars) // См. что получилось
console.log("-----------------------------------------------------")

jsonObjectAfterPars.moreInfo = "more info for save" // Добавим параметр, свойство
console.log(jsonObjectAfterPars.moreInfo) // Выведем параметр в консоль из объекта
console.log("-----------------------------------------------------")

strJSONAfterAddParam = JSON.stringify(jsonObjectAfterPars) // Преобразуем в строку

console.log(strJSONAfterAddParam) // Выведем строку
console.log(strJSONAfterAddParam.moreInfo) // Получим - undefined