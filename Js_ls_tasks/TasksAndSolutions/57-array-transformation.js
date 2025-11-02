import brLine from "./js_border_line.js";

/** ЗАДАЧА 57 - Трансформация массива объектов
 *
 * 1. Создайте функцию "processPosts", которая будет возвращать новый массив сообщений
 *
 * 2. Обратите внимание, что
 *  - некоторые имена свойств в каждом сообщении изменены
 *  - ID каждого сообщения увеличен на 1000
 *
 * 3. Исходный массив постов должен остаться без изменений
 */

/* ----- 1. Вариант решения через деструктуризацию ----- */
function processPosts(testPosts){
  const modifiedNewArray = new Array();

  for (let i = 0; i < testPosts.length; i++){
    /* Выдергиваем переменные и деструктурируем их согласно заданию */
    let { postId, author: postAuthor, commentsQty: postCommentsQty = 0} = testPosts[i];
    /* Увеличиваем значение согласно заданию */
    postId += 1000;
    /* Помещаем объект в новый массив */
    modifiedNewArray[i] = {postId, postAuthor, postCommentsQty}; 
  }

  return modifiedNewArray;
}

const testPosts = [
  {
    postId: 234,
    author: 'robd',
    commentsQty: 5,
  },
  {
    postId: 823,
    author: 'sady',
  },
  {
    postId: 161,
    author: 'merryl',
    commentsQty: 8,
  },
];

const processedPosts = processPosts(testPosts);
console.log(processedPosts);
/*
[
  {
    postId: 1234,
    postAuthor: 'robd',
    postCommentsQty: 5
  },
  {
    postId: 1823,
    postAuthor: 'sady',
    postCommentsQty: 0
  },
  {
    postId: 1161,
    postAuthor: 'merryl',
    postCommentsQty: 8
  }
]
*/

console.log(testPosts); // оригинальный массив должен остаться без изменений
brLine();

/* ----- 2. Вариант решения через функцию .map()  ----- */
function processPostsWithMap(testPosts){
  const modifiedNewArray = new Array(...testPosts);

  return modifiedNewArray.map((post) => {
    return {
      postId: post.postId + 100, 
      postAuthor: post.author, 
      postCommentsQty: post.commentsQty === undefined ? 0 : post.commentsQty
    }
  });
}

const processedPostsWithMap = processPostsWithMap(testPosts);
console.log(processedPostsWithMap);
console.log(testPosts);
brLine();

/* ----- 3. Вариант решения через функцию .map() и диструктуризации ----- */
function processPostsWithMapAndDistr(testPosts){
  const modifiedNewArray = new Array(...testPosts);

  return modifiedNewArray.map((post) => {
    const{postId, author: postAuthor, commentsQty: postCommentsQty = 0 } = post;
    return {
      postId: postId + 1000, 
      postAuthor, 
      postCommentsQty,
    }
  });
}

const processPostsThirdVar = processPostsWithMapAndDistr(testPosts);
console.log(processPostsThirdVar);
console.log(testPosts);