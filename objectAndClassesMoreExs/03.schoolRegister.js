function schoolRegister(input) {

    let students = {};



    for (const student of input) {
        let tokens = student.split(',');

        let name = tokens.shift().split(': ');
        let Grade = tokens.shift().split(': ');
        let average = tokens.shift().split(': ');
        name = name[1];
        Grade = Number(Grade[1]);
        average = Number(average[1]);
        if (average > 3) {
            if (!students.hasOwnProperty(Grade)) {
                students[Grade] = [];

            }

            if (!students[Grade].hasOwnProperty(name)) {
                students[Grade].push({ name, average });
            }

        }
    }

    for (const grade in students) {
        if (students.hasOwnProperty(grade)) {
            console.log(`${Number(grade)+ 1} Grade`);
            console.log(`List of students: ${students[grade].map(student => student.name).join(', ')}`);
            const totalScore = students[grade].reduce((acc, student) => acc + student.average, 0);
            const averageScore = totalScore / students[grade].length;
            console.log(`Average annual score from last year: ${averageScore.toFixed(2)}`);
            console.log('');
        }
    }
    
}

schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]
)
// schoolRegister([
//     'Student name: George, Grade: 5, Graduated with an average score: 2.75',
//     'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
//     'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
//     'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
//     'Student name: John, Grade: 9, Graduated with an average score: 2.90',
//     'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
//     'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
//     ]
//     )


// In this problem, you have to arrange all students by grade.
// You as the secretary of the school principal will process
// students and store them into a school register before the new school year hits.
// As a draft, you have a list of all the students from last year but mixed.
// Keep in mind that if a student has a lower score than 3, he does not go into the next class.
// As a result of your work, you have to print the entire school register sorted in ascending
// order by grade already filled with all the students from last year in the format:
// `{nextGrade} Grade
// List of students: {All students in that grade}
// Average annual score from last year: {average annual score on the entire class from last year}`
// And empty row {console.log}
// The input will be an array with strings, each containing a student's name, last year's grade,
// and an annual score. The average annual score from last year should be formatted to the second decimal point.
