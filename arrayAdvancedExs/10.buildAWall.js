function buildAWall(sectionHeights) {
    
    let concrQtys = [];
    let totalConcrete = 0;

    while (sectionHeights.some(sectionHeights => sectionHeights < 30)) {
        
        let dailyConcrete = 0;

        for (let index in sectionHeights) {
            if (sectionHeights[index] < 30) {
                sectionHeights[index]++;
                dailyConcrete += 195;
                
            }

        }
        concrQtys.push(dailyConcrete);
        totalConcrete +=dailyConcrete;

    }
    console.log(concrQtys.join(', '));
    console.log(`${totalConcrete * 1900} pesos`);
}

buildAWall([21, 25, 28])
buildAWall([17])
buildAWall([17, 22, 17, 19, 17])


// Write a program that keeps track of the construction of a 30-foot wall. 
// You will be given an array of strings that must be parsed as numbers, 
// representing the initial height of mile-long sections of the wall, in feet. 
// Each section has its construction crew that can add 1 foot of height per day by using 195 cubic yards of concrete.
//  All crews work simultaneously (see examples), meaning all sections
//   that aren't completed (are less than 30 feet high) grow by 1 foot every day.
//    When a section of the wall is complete, its crew is relieved. 
// Your program needs to keep track of how much concrete is used daily until the 
// completion of the entire wall. In the end, print on a single line, separated by comma and space, 
// the amount of concrete used each day, and on a second line, the final cost of the wall. 
// One cubic yard of concrete costs 1900 pesos. 
// Input 
// Your program will receive an array of strings representing numbers as a parameter. 
// Output 
// Print on the console on one line the amount of concrete used each day separated 
// by comma and space, and on a second line, the final cost of the wall. 
// Constraints 
// •	The wall may contain up to 2000 sections (2000 elements in the initial array) 
// •	Starting height for each section is within the range [0…30] 
// Explanation 
// On the first day, all three crews work, each adding 1 foot to their section, 
// 585 cubic yards total (3 x 195). On the second day, it's the same with the last section
//  reaching 30 feet and its crew being relieved (marked in red while they don't work).
//   On the third day, only two crews work, using up 390 cubic yards total. 
//   This continues for 2 more days, with the second section reaching 30 feet. 
//   In the remaining 4 days, only 1 crew works, using 195 cubic yards every day.
//    Over the entire period, 3120 cubic yards of concrete were used, costing 5'928'000 pesos.
//     And that was for just 3 miles, imagine 2000! 

