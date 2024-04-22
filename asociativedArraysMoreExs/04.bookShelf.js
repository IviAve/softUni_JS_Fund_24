function bookShelf(input) {


    let shelvesList = new Map();
    let bookList = new Map();
    for (const line of input) {
      if (line.includes('->')) {
        let [id, genre] = line.split('->').map(str => str.trim());
        if (![...shelvesList.values()].includes(id)) {
          shelvesList.set(genre, id);
          bookList.set(genre, []);
        }
      } else {
        let [bookTitle, bookAuthor, genre] = line.split(/[:,]+/).map(str => str.trim());
        if (bookList.has(genre)) {
          bookList.get(genre).push({bookTitle: bookTitle, bookAuthor: bookAuthor});
        }
      }
    }
   
    [...bookList.entries()]
      .sort((a, b) => b[1].length - a[1].length)
      .forEach((shelf) => {
        let [genre, books] = shelf;
        books.sort((a, b) => a.bookTitle.localeCompare(b.bookTitle));
        console.log(`${shelvesList.get(genre)} ${genre}: ${books.length}`);
        for (const book of books) {
          console.log(`--> ${book.bookTitle}: ${book.bookAuthor}`);
        }
      });
  }


bookShelf(['1 -> history', '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery', '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'])

bookShelf(['1 -> mystery', '2 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Lions and Rats: Gabe Roads, history',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi']
)

// Write a function that stores information about shelves and the books on the shelves.
//  Each shelf has an Id and a genre of books that can be on it. Each book has a title,
//   an author, and a genre. The input comes as an array of strings. They will be in the format:
// "{shelf id} -> {shelf genre}" – create a shelf if the id is not taken.
// "{book title}: {book author}, {book genre}" – if a shelf with that genre exists,
//  add the book to the shelf.
// After finishing reading input, sort the shelves by a count of books in it in descending.
// For each shelf sort the books by title in ascending. Then print them in the following format.
// "{shelfOne id} {shelf genre}: {books count}
// --> {bookOne title}: {bookOne author}
// --> {bookTwo title}: {bookTwo author}
// …
// {shelfTwo id} {shelf genre}: {books count}
// …"
