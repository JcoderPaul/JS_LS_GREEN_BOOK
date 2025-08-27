function brLine(){
        console.log("____________________________________");
}

/* 
Реализовать методы увеличения и уменьшения баланса, при котором каждая операция 
сохраняется в массив operations в виде: { reason: 'taxes', sum: -100 }. Методы 
возвращают true - если операция прошла успешно, false - если баланс отрицательный.

Реализовать метод вывода количества операций по кошельку.
*/

const wallet = {
        balance: 0,
        operations: new Array(),
        setOperation: function(check, reasonOp){
                return check > 0 ? 
                this.setIncome(check, reasonOp) : 
                this.setCost(check, reasonOp);
        },
        setIncome: function(check, reasonOp){
                this.operations.push({reason: reasonOp, sum: check});
                this.balance += check;
                return true;
        },
        setCost: function(check, reasonOp){
                this.operations.push({reason: reasonOp, sum: check});
                this.balance += check;
                
                if (this.balance < 0) {
                        console.log("У вас отрицательный баланс!");
                }

                return this.balance > 0 ? true : false;
        },
        getCountOperation: function(){
                return this.operations.length;        
        },
}

console.log(wallet.setOperation(230, 'salary'));
console.log(wallet.balance);
console.log(wallet.getCountOperation());
console.log(wallet.operations);

brLine();

console.log(wallet.setOperation(-130, 'taxes'));
console.log(wallet.balance);
console.log(wallet.getCountOperation());
console.log(wallet.operations);

brLine();

console.log(wallet.setOperation(-230, 'car repair'));
console.log(wallet.balance);
console.log(wallet.getCountOperation());
console.log(wallet.operations);

/*
Общий вавод в консоль: 

true
230
1
[ { reason: 'salary', sum: 230 } ]
____________________________________
true
100
2
[ { reason: 'salary', sum: 230 }, { reason: 'taxes', sum: -130 } ]
____________________________________
У вас отрицательный баланс!
false
-130
3
[
  { reason: 'salary', sum: 230 },
  { reason: 'taxes', sum: -130 },
  { reason: 'car repair', sum: -230 }
]

*/