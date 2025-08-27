/* 
Преобразовать объект пользователь в объект вида:
{ fullname: "name surename", skillNum: 2}
*/

const users = [
        {
                name: "Malcolm",
                sureName: "Stone",
                age: 30,
                skills: ['fight', 'regeneration', 'premonition']
        },
        {
                name: "Sanarita",
                sureName: "Questa",
                age: 28,
                skills: ['healing', 'archery']
        }
];

/* 1 - Вариант решения */
function userConvertor(usersArr){
        const resArr = new Array();
        usersArr.forEach(el => {
                resArr.push({ fullname: el.name + " " + el.sureName, skillNum: el.skills.length });
        });
        return resArr;
}

console.log(userConvertor(users));

/* 2 - Вариант решения */
const convUserData = users.map(user => {
        return { fullname: `${user.name} ${user.sureName}`, skillNum: user.skills.length };
});

console.log(convUserData);