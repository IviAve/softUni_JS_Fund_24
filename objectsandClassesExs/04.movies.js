function movies(list) {

    let movieInfo = [];

    for (let fullInfo of list) {

        if (fullInfo.includes('addMovie ')) {

            let name = fullInfo.split('addMovie ')[1];
            movieInfo.push({name});

        } else if (fullInfo.includes('directedBy')) {

            let [name, director] = fullInfo.split(' directedBy ');

            let movie = movieInfo.find(el => el.name === name);

            if (movie) {
                movie.director = director;

            }
        } else if (fullInfo.includes('onDate')) {
            let [name, date] = fullInfo.split(' onDate ');
            let movie = movieInfo.find(el => el.name === name);

            if (movie) {
                movie.date = date;
            }
        }
        
    }
    
    movieInfo.forEach(movie =>{
        if(movie.name && movie.director && movie.date){
console.log(JSON.stringify(movie));
        }
    });
 }


movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)
// movies([
//     'addMovie The Avengers',
//     'addMovie Superman',
//     'The Avengers directedBy Anthony Russo',
//     'The Avengers onDate 30.07.2010',
//     'Captain America onDate 30.07.2010',
//     'Captain America directedBy Joe Russo'
//     ]
//     )


// Write a function that stores information about movieInfo inside an array.
// The movie's object info must be name, director, and date. You can receive several types of input:
// •	"addMovie {movie name}" – add the movie
// •	"{movie name} directedBy {director}" – check if the movie exists and then add the director
// •	"{movie name} onDate {date}" – check if the movie exists and then add the date
// At the end print all the movieInfo that have all the
// info (if the movie has no director, name, or date, don’t print it) in JSON format.
