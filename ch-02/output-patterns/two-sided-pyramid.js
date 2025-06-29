//logic a: using browser

//upper pyramid

//logic prep:

//1 row, 2 space, 2 symbol: 1 row, 3 - 1 = 2 space 
//2 row, 1 space, 4 symbol
//3 row, 0 space, 6 symbol

// for(let row = 1; row < 4; row++) {
//     let pattern = "";
//     for(let i = 0; i < 3 - row; i++) {
//         pattern += " ";
//     }
//     for(let j = 0; j < row * 2; j++) { 
//         pattern += "#";
//     }
// console.log(pattern);
// }

//lower, inverted pyramid

//logic prep:

//1 row, 0 space, 6 symbol //2 
//2 row, 1 space, 4 symbol //4 
//3 row, 2 space, 2 symbol //6 

// for(let row = 1; row < 4; row++) {
//     let pattern = "";
//     for(let i = 0; i < row - 1; i++) {
//         pattern += " ";
//     }
//     for(let j = 0; j < (6 - (2 * (row - 1))); j++) {
//         pattern += "#";
//     }
//     console.log(pattern);
// }

//two sided pyramid:

// for(let row = 1; row < 4; row++) {
//     let pattern = "";
//     for(let i = 0; i < 3 - row; i++) {
//         pattern += " ";
//     }
//     for(let j = 0; j < row * 2; j++) { 
//         pattern += "#";
//     }
//     console.log(pattern);
// }

// for(row = 1; row < 4; row++) {
//     let pattern = "";
//     for(i = 0; i < row - 1; i++) {
//         pattern += " ";
//     }
//     for(j = 0; j < (6 - (2 * (row - 1))); j++) {
//         pattern += "#";
//     }
//     console.log(pattern);
// }


//logic b: using terminal

//upper pyramid:

//logic b prep (upper pyramid):
//1 row, 2 space1, 2 sym, 2 space2
//2 row, 1 space1, 4 sym, 1 space2
//3 row, 0 space1, 6 sym, 0 space2

// for(let row = 1; row < 4; row++) {
//     for(let i = 0; i < 3 - row; i++) {
//         process.stdout.write(" ");
//     }
//     for(let j = 0; j < row * 2; j++) {
//         process.stdout.write("#"); 
//     }
//     for(let k = 0; k < 3 - row; k++) {
//         process.stdout.write(" ");
//     }
//     process.stdout.write("\n");  
// }

//lower pyramid:

//logic b prep (lower pyramid):
//1 row, 0 space1, 6 sym, 0 space2
//2 row, 1 space1, 4 sym, 1 space2
//3 row, 2 space1, 2 sym, 2 space2

// for(let row = 1; row < 4; row++) {
//     for(let i = 0; i < row - 1; i++) {
//         process.stdout.write(" ");
//     }
//     for(let j = 0; j < (6 - ((row - 1) * 2)); j++) {
//         process.stdout.write("#"); 
//     }
//     for(let k = 0; k < row - 1; k++) {
//         process.stdout.write(" ");
//     }
//     process.stdout.write("\n");  
// }


//two sided pyramid:

for(let row = 1; row < 4; row++) {
    for(let i = 0; i < 3 - row; i++) {
        process.stdout.write(" ");
    }
    for(let j = 0; j < row * 2; j++) {
        process.stdout.write("#"); 
    }
    for(let k = 0; k < 3 - row; k++) {
        process.stdout.write(" ");
    }
    process.stdout.write("\n");  
}

for(row = 1; row < 4; row++) {
    for(i = 0; i < row - 1; i++) {
        process.stdout.write(" ");
    }
    for(j = 0; j < (6 - ((row - 1) * 2)); j++) {
        process.stdout.write("#"); 
    }
    for(k = 0; k < row - 1; k++) {
        process.stdout.write(" ");
    }
    process.stdout.write("\n");  
}