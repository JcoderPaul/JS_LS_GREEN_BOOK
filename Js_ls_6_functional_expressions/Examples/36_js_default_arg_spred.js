const newPost = (post, addAt = Date()) => ({
        ...post,
        addAt,
});

const putPost = {
        id: 1,
        author: "OldBoy",
        post: "some article"
}

let prn = newPost(putPost);

console.log(prn);