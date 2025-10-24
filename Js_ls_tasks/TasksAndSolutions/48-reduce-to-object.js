/** ЗАДАЧА 48 - Использование метода "reduce" для создания объекта
 *
 * 1. Создайте функцию "quantitiesByCategories" с одним параметром "products"
 *
 * 2. Эта функция должна возвращать объект с ключами,
 * равными категориям, и значениями,
 * равными сумме всех количеств в каждой категории
 */

const inputProducts = [
  {
    title: 'Phone case',
    price: 23,
    quantity: 2,
    category: 'Accessories',
  },
  {
    title: 'Android phone',
    price: 150,
    quantity: 1,
    category: 'Phones',
  },
  {
    title: 'Classic corded phone',
    price: 1250,
    quantity: 1,
    category: 'Phones',
  },
  {
    title: 'Headphones',
    price: 78,
    quantity: 1,
    category: 'Accessories',
  },
  {
    title: 'Sport Watch',
    price: 55,
    quantity: 2,
    category: 'Watches',
  },
  {
    title: 'Tracking Watch',
    price: 155,
    quantity: 3,
    category: 'Watches',
  },
]

function quantitiesByCategories(products) {
  return products.reduce((categoryAccumulator, currentElement) => {
    categoryAccumulator[currentElement.category] =
      (categoryAccumulator[currentElement.category] || 0) + currentElement.quantity;
    return categoryAccumulator;
  }, {});
}

console.log(quantitiesByCategories(inputProducts));
/* 
  {
    Accessories: 3,
    Phones: 2,
    Watches: 5
  } 
*/ 
