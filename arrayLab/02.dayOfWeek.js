function dayOfWeek(day) {
    let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    if (day>=1 && day<=7) {
    console.log(days[day-1]);
    }else{
    console.log("Invalid day!");
    }
    }
    dayOfWeek(4)
    dayOfWeek(6)
    dayOfWeek(11)


//     Write a program, which receives a number and prints the 
//     corresponding name of the day of the week (in English).  
// If the number is NOT a valid day, print: "Invalid day!".
