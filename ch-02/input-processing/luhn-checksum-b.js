//goal: check if the the number has odd or even number of digits 
//then declare relevant odd/even functions that are called to further
//call the doubler function


//using the length method on our string to find length of string
//then call relevant odd/even function
if (num.length % 2 == 0) { 
    evenNumDoubler(num);
}
else {
    oddNumDoubler(num);
}

//34978651 3 9 8 5  
//pos % 2 == 0
//length = 8
//pos 0 = 3, 1 = 4, 2 = 9, 3 = 7, 4 = 8, 5 = 6, 6 = 5, 7 = 1 

// function evenNumDoubler(evenNum) {
//     for (let pos = 0; pos < num.length ; pos++) {
//         if (pos % 2 === 0) {
//         let doubled = num.slice(pos, pos + 1) * 2; 
//             if (doubled >= 10) {
//                 doubled = "1" + doubled % 10;  
//                 return doubled;
//         }
//             else {
//                 return doubled; 
//             }
//         }
//         else {

//         }

// }
// }

// function oddNumDoubler(oddNum) {

// }

//the above logic tries to double and add to checksum at the same time
//it is unclean and thus we must write a diff function which is 
//both clean and modular i.e. divides and conquers the problem
//the existing code is enough for this goal

