function brLine(){
        console.log("____________________________________________________");
}

const roles = ['user', 'admin', 'manager'];

/* Возврат индекса */
const elIndex = roles.indexOf("admin");
console.log(elIndex); // 1

const elIndexTwo = roles.indexOf("superAdmin");
console.log(elIndexTwo); // -1 - т.е. элемент не найден

if (roles.indexOf("admin") > 0) {
        console.log('Доступ в закрытую секцию есть');
}
brLine();

/* Проверка наличия */
const isExist = roles.includes("admin");
console.log(isExist); // true
console.log(roles.includes("superMan")); // false

if (roles.includes("admin")) {
        console.log('Доступ в закрытую секцию есть');
}