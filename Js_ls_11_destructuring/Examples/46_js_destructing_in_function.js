const oneUser = {
        userId: 2,
        userName: "Malcolm Stone",
        email: "ml@swordwing.island"
}

const helloIf = ({ userId }) => {
        if (userId < 30) {
                return `Hello herr ${oneUser.userName}`
        } else {
                return `Hello mr. ${oneUser.userName}`
        }
}

/* Выводим */
console.log(oneUser); // { userId: 2, userName: 'Malcolm Stone', email: 'ml@swordwing.island' }
console.log(helloIf({ userId: 2})) // Hello herr Malcolm Stone
console.log("----------------------------------------------------");

function updateUser({ userId, userName, email }) {
        oneUser.userId = userId;
        oneUser.userName = userName;
        oneUser.email = email;
}

/* Обновляем */
updateUser({ userId: 43, userName: "Ozru Tan", email: "ot@ceritan.de"});

/* Выводим еще раз */
console.log(oneUser); // { userId: 43, userName: 'Ozru Tan', email: 'ot@ceritan.de' }
console.log(helloIf({ userId: 43})) // Hello mr. Ozru Tan
console.log("----------------------------------------------------");


