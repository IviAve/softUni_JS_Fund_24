function formatGrade(grade) {
    
    let print = '';

    if (grade < 3.00) {
        print = 'Fail';

    }else if (grade >= 3.00 && grade < 3.50) {
        print = 'Poor' ;

    } else if (grade >= 3.50 && grade < 4.50){
         print = 'Good';

    }else if (grade >= 4.50 && grade < 5.50){
         print = 'Very good';
         
    }else if (grade >= 5.50 ){
        print = 'Excellent';
        
   }
   if(grade< 3.00){
    console.log(`${print} (2)`);
   }else{
    console.log(`${print} (${grade.toFixed(2)})`);
   }

}

formatGrade(3.33)

formatGrade(4.50)

formatGrade(2.99)

// Write a function that receives a grade between 2.00 and 6.00 
// and prints a formatted line with grade and description.
// •	< 3.00 - "Fail"
// •	>= 3.00 and < 3.50 - "Poor"
// •	>= 3.50 and < 4.50 - "Good"
// •	>= 4.50 and < 5.50 - "Very good"
// •	>= 5.50 - "Excellent"
