function requiredReading (numOfPagesFromBook,pagesPerHour,numOfDays){

    let totalTime = (numOfPagesFromBook / pagesPerHour)/numOfDays;
    console.log(totalTime);
}

requiredReading(212,
    20 ,
    2 
    )
requiredReading(432,
    15 ,
    4 
    )

// Write a function to help Ivan calculate how many hours a day he has to spend
//  reading the necessary literature from the list given for the summer vacation.
// As input, you will receive 3 parameters: 
// •	Number of pages of the current book - integer [1… 1000] 
// •	Pages read in 1 hour - integer [1… 1000]
// •	The number of days for which you must read the book -  integer [1… 1000]
// As output print on the console the number of hours, that Ivan has to read each day.
// Total time to read the book: 212 pages / 20 pages per hour = 10.6 hours
// Required hours per day: 10.6 hours / 2 days = 5.3 hours per day 
