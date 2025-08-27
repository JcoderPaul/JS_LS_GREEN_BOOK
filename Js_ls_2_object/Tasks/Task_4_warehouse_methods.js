/**
 * Сделать объект склад. Сделать объекту методы:
 * - добавления на склад;
 * - поиск по складу товара;
 * - расчет веса всех товаров;
 */

const warehouse = {
        goods: [],
        findGoodById: function (id){
                const existedGood = this.goods.find(gFind => gFind.id === id);
                return existedGood;
        },
        addGood: function (good){
                const existedGood = this.findGoodById(good.id);
                if (existedGood){
                        console.log("Товар уже на складе!");
                        return;
                }
                this.goods.push(good);
        },
        getWeightKg: function(){
                return this.goods.reduce((acc, el) => {
                        /* 
                         Проверяем наличие поля вес через '.?', если поле есть суммируем с 
                         'аккумулятором', если нет, как в 'paper', тогда с 'аккумулятором'
                         суммируется ноль.  
                        */
                        return acc += el.weight?.kg ? el.weight.kg : 0;
                }, 0);
        }
};

const car = {
        id: 1,
        weight: {kg: 1000},
        brand: 'Lada'
};

const chair = {
        id: 2,
        weight: {kg: 2},

}

const paper = {
        id: 3,
        color: 'red'
}

/* 'Тест' */

warehouse.addGood(car); 
console.log(warehouse.goods); // [ { id: 1, weight: { kg: 1000 }, brand: 'Lada' } ]

warehouse.addGood(car); // Товар уже на складе!
warehouse.addGood(chair);
warehouse.addGood(paper);
console.log(warehouse.goods); // Получаем массив 3-х добавленных объектов

let findItem = warehouse.findGoodById(6); // Такого id у нас нет
console.log(findItem); // undefined

findItem = warehouse.findGoodById(1); // Такого id у нас нет
console.log(findItem); // { id: 1, weight: { kg: 1000 }, brand: 'Lada' }

const allWeight = warehouse.getWeightKg();
console.log(allWeight); // 1002