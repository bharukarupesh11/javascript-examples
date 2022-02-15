let post = new Post('a', 'b', 'c');
console.log(post);

// Constructor Function(pascal notation) :  To create a Post object
function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

