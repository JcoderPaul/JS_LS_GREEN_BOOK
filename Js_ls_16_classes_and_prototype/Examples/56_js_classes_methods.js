class Comment {
        constructor(text){
                this.text = text;
                this.votesQty = 0;
        }

        upvote() {
                this.votesQty += 1; 
        }
}

/* Два объекта по шаблону 'Comment', у каждого свой this указатель, т.е. на "самого себя" */
const firstComment = new Comment("Firs comment");
const secondComment = new Comment("Second comment");

firstComment.upvote(); // Порднимим "рейтинг отзыва" на +1 у первого коментария.

secondComment.upvote();
secondComment.upvote(); // А тут поднимим на +2

/* Метод вызывался у разных объектов, хотя "родитель" или "прототип" одни и тот же */
console.log(firstComment); // Comment { text: 'Firs comment', votesQty: 1 }
console.log(secondComment); // Comment { text: 'Second comment', votesQty: 2 }
