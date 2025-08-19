// Создадим "константный" объект
const myCity = {
        // Свойства объекта - порядок не имеет значения!
        city: "Ufa",
        popular: false,
        country: "RF"
}

console.log(myCity.city) // Ufa

console.log(myCity.country) // RF

/* 
А еще мы можем изменить объект, при этом "Cсылка" на объект 
не меняется же - типа "константная", т.е. мы константим ссылку, 
а не содержимое. 
*/
myCity.city = "Ufas Algas Vegas"

console.log(myCity.city) // Ufas Algas Vegas

/* Можем, как уже делали расширить объект */
myCity.nationality = "Indians"

console.log(myCity) // {city: 'Ufas Algas Vegas', popular: false, country: 'RF', nationality: 'Indians'}

console.dir(myCity) // {city: 'Ufas Algas Vegas', popular: false, country: 'RF', nationality: 'Indians'}

/* Или удалить свойство - оператор delete */
delete myCity.popular

console.log(myCity) // {city: 'Ufas Algas Vegas', country: 'RF', nationality: 'Indians'}