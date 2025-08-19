/* Объект в который можно добавить свойства, как мы уже делали, а можно и по другому */
const myCity = {
        // Свойства объекта - порядок не имеет значения!
        city: "Ufa",
}

console.log(myCity)

myCity.square = 707.9 // Можно так... точесная запись
myCity['status'] = 'state capital' // Можно и так... скобочная запись

console.log(myCity)

/* Синтаксис с квадратными скобками нужен для случаев см. ниже */

const statePropertyName = "state" // Сначало объявляем название своейства, название ключа
myCity[statePropertyName] = "RB" // Потом объявляем значение "под ключ"

console.log(myCity)
