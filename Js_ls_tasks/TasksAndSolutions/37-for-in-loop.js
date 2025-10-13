/** ЗАДАЧА 37 - Цикл "for .. in"
 *
 * Внутри цикла "for .. in" перед выводом значения свойства в консоль выполните 
 * проверку того, что свойство является собственным свойством объекта
 */

const myObject = {
  name: 'Mike',
  age: 30,
  city: 'London',
}

/* Почему так лучше не делать, см. док. ..\JS_LS\Js_ls_2_object\DOC\DoNotDoThisObjectPrototypeModification.md */
Object.prototype.country = 'England'

for (let key in myObject) {
  if (myObject.hasOwnProperty(key)) {
    console.log(myObject[key])
  }
}
