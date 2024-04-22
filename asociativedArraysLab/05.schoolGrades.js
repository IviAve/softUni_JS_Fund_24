function schoolGrades(array) {
    let studentBook = {};

    for (let studentInfo of array) {

        let tokens = studentInfo.split(' ');
        let name = tokens.shift();
        let grade = tokens.join(' ');
        

        if (!studentBook.hasOwnProperty(name)) {
            
            studentBook[name] = grade;

        }else{
            studentBook[name] += ` ${grade}`;

        }

    }

    let sortedNames = Object.keys(studentBook).sort((a,b) => a.localeCompare(b));

    for (const name of sortedNames) {
        let avg = 0;
        let counter = 0;
        for (let el of studentBook[name].split(' ')) {
            avg += Number(el);
            counter++;
        }

        avg /= counter;
        console.log(`${name}: ${avg.toFixed(2)}`);
        
    }
}


schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)
schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']
)

// Write a function that stores students and their grades throughout the year.
//  If a student appears more than once, add the new grades to existing ones.
//  Finally, print the students and their average grades,
//  sorted alphabetically by student name. The input comes as an array of strings.
// Note: The average grades must be fixed to the second decimal place.
