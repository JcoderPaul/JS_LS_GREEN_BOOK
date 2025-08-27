const users = [
        {name: "Malcolm", age: 21},
        {name: "Aerdol", age: 221},
        {name: "Tyimus", age: 121},
        {name: "Sanara", age: 19}
];

console.log(users.sort((a, b,) => a.age - b.age)); // По возрастанию
console.log(users.sort((a, b,) => b.age - a.age)); // По убыванию