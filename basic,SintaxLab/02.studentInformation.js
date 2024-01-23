function studentInformation (studentName,age,grade){
    let studentAge = Number(age);
    let averageGrade = Number(grade);
    

    console.log(`Name: ${studentName}, Age: ${studentAge}, Grade: ${averageGrade.toFixed(2)} `);
}

studentInformation('John', 15, 5.54678)