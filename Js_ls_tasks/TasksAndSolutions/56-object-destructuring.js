/** ЗАДАЧА 56 - Деструктуризация объектов
 *
 * 1. Измените функцию "personInfo" так, чтобы получить в консоли такой же вывод как:
 * 
 * {
 *   name: "Alice",  
 *   personAge: 19,   
 *   origin: "England",  
 *   homeCity: "London",  
 *   friendsQty: 0,  
 *   createdAtYear: *current year*
 * }
 * 
 * 2. Объект, возвращаемый функцией "personInfo", должен содержать только сокращенные имена свойств
 * 
 * См. доп. материал:
 * - ..\JS_LS\Js_ls_tasks\DOC\56_Task_Explanations\56_Task_extra_explanations.md
 * - ..\JS_LS\Js_ls_tasks\DOC\56_Task_Explanations\56_Task_visibility_scopes.md
 */

/* Шаг 1 - Просто пока создадим функцию */
const personInfo = (person) => {
    const {
      name, 
      age: personAge, 
      location: {country: origin, city: homeCity}, 
      friendsQty = 0, 
      createdAtYear = new Date().getFullYear()
    } = person;

    /* Шаг 2 - Такой объект с сокращеными свойствами мы должны вернуть */
    return {
      name,
      personAge,
      origin,
      homeCity,
      friendsQty,
      createdAtYear
    }
}

const person = {
  name: 'Alice',
  age: 19,
  location: {
    country: 'England',
    city: 'London',
  },
}

/* Тест */
const result = personInfo(person);
console.log(result);