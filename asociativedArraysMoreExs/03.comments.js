function comments(input) {
    

    let users = [];
    let articles = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i].includes('article')) {
            let article = input[i].split(' ')[1];
            articles.push(article);
            delete input[i];
        } else if (input[i].includes('user')) {
            let user = input[i].split(' ')[1];
            users.push(user);
            delete input[i];
        }
    }
    let comments = new Map();
    for (let e of input) {
        if (e !== undefined) {
            let tokens = e.split(': ');
            let user = tokens[0].split(' ')[0];
            let article = tokens[0].split(' ')[3];
            let commentContent = tokens[1].split(', ').join(' - ');
 
            if (users.includes(user) && articles.includes(article)) {
                let contentString = '--- From user ' + (user) + ': ' + (commentContent);
 
                if (!comments.has(article)) {
                    comments.set(article, []);
                }
                comments.get(article).push(contentString);
            }
        }
    }
 
    let sortedComments = [...comments.entries()]
    .sort((a, b) => b[1].length - a[1].length);
 
    for(let e of sortedComments){
        let article = e[0];
        let comments = e[1].sort((a, b) => b.substring(15).localeCompare(a.substring(15)));
        console.log(`Comments on ${article}`);
        for(let el of comments){
            console.log(`${el}`);
        }   
    }
}

comments(['user aUser123',
 'someUser posts on someArticle: NoTitle, stupidComment',
 'article Books',
  'article Movies', 
  'article Shopping',
   'user someUser',
    'user uSeR4', 
 'user lastUser',
  'uSeR4 posts on Books: I like books, I do really like them',
  'uSeR4 posts on Movies: I also like movies, I really do', 
  'someUser posts on Shopping: title, I go shopping every day', 
  'someUser posts on Movies: Like, I also like movies very much'])
comments(['user Mark', 
'Mark posts on someArticle: NoTitle, stupidComment',
 'article Bobby',
  'article Steven',
   'user Liam',
    'user Henry',
     'Mark posts on Bobby: Is, I do really like them',
      'Mark posts on Steven: title, Run',
       'someUser posts on Movies: Like'])

// Write a function that stores information about users and their comments on a website. 
// You have to store the users, the comments as an object with title and content,
//  and the article that the comment is about. The user can only comment,
//   when he is on the list of users and the article is in the list of articles. 
//   The input comes as an array of strings. The strings will be in the format:
// "user {username}" – add the user to the list of users
// "article {article name}" – add the article to the article list
// "{username} posts on {article name}: {comment title}, {comment content}" – save the info
// At the end sort the articles by a count of comments and print the users with their
//  comments ordered by usernames in ascending.
// Output
// Print the result in the following format:
// "Comments on {article1 name}
// --- From user {username1}: {comment title} - {comment content}
// --- From user {username2}: …
// Comments on {article2 name}
// …"
