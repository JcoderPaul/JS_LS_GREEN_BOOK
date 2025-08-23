let myAnonimusFun; // Создали переменную

myAnonimusFun = function(a, b) {  // Присвоили ей анонимную функцию или функциональное выражение
        let с;
        a += 1;
        c = a + b;
        return c;
};

console.log(myAnonimusFun(3, 3));  // 7