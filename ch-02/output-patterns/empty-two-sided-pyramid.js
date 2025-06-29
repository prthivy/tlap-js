//logic a: using browser

//upper empty pyramid logic

//logic prep:

//row 1, 0 space1, 1 sym1, 12 space2, 1 sym2, 0 space3
//row 2, 1 space1, 2 sym2, 8 space2, 2 sym2, 1 space3
//row 3, 2 space1, 3 sym2, 4 space2, 3 sym2, 2 space3
//row 4, 3 space1, 4 sym2, 0 space2, 4 sym2, 3 space3

// for(let row = 1; row < 5; row++) {
//     let pattern = "";
//     for(let i = 0; i < row - 1; i++) {
//         pattern += " ";
//     }
//     for(let j = 0; j < row; j++) {
//         pattern += "#";
//     }
//     for(let k = 0; k < 12 - ((row - 1) * 4); k++) {
//         pattern += " ";
//     }
//     for(let l = 0; l < row; l++) {
//         pattern += "#"; 
//     }
//     for(let m = 0; m < row - 1; m++) {
//         pattern += " ";
//     }
// console.log(pattern); 
// }

//lower empty pyramid logic

//logic prep:

//row 1, 3 space1, 4 sym1, 0 space2, 4 sym2, 3 space3
//row 2, 2 space1, 3 sym1, 4 space2, 3 sym2, 2 space3
//row 3, 1 space1, 2 sym1, 8 space2, 2 sym2, 1 space3
//row 4, 0 space1, 1 sym1, 12 space2, 1 sym2, 0 space3

// for(row = 1; row < 5; row++) {
//     pattern = "";
//     for(i = 0; i < 4 - row; i++) {
//         pattern += " ";
//     }
//     for(j = 0; j < 5 - row; j++) {
//         pattern += "#";
//     }
//     for(k = 0; k < 12 - (4 * (4 - row)); k++) {
//         pattern += " ";
//     }
//     for(l = 0; l < 5 - row; l++) {
//         pattern += "#";
//     }
//     for(m = 0; m < 4 - row; m++) {
//         pattern += " ";
//     }
// console.log(pattern);
// }


//empty two sided pyramid:

// for(let row = 1; row < 5; row++) {
//     let pattern = "";
//     for(let i = 0; i < row - 1; i++) {
//         pattern += " ";
//     }
//     for(let j = 0; j < row; j++) {
//         pattern += "#";
//     }
//     for(let k = 0; k < 12 - ((row - 1) * 4); k++) {
//         pattern += " ";
//     }
//     for(let l = 0; l < row; l++) {
//         pattern += "#"; 
//     }
//     for(let m = 0; m < row - 1; m++) {
//         pattern += " ";
//     }
// console.log(pattern); 
// }

// for(row = 1; row < 5; row++) {
//     pattern = "";
//     for(i = 0; i < 4 - row; i++) {
//         pattern += " ";
//     }
//     for(j = 0; j < 5 - row; j++) {
//         pattern += "#";
//     }
//     for(k = 0; k < 12 - (4 * (4 - row)); k++) {
//         pattern += " ";
//     }
//     for(l = 0; l < 5 - row; l++) {
//         pattern += "#";
//     }
//     for(m = 0; m < 4 - row; m++) {
//         pattern += " ";
//     }
// console.log(pattern);
// }



//logic b: using terminal

//upper empty pyramid logic

//logic prep:

//row 1, 0 space1, 1 sym1, 12 space2, 1 sym2, 0 space3
//row 2, 1 space1, 2 sym2, 8 space2, 2 sym2, 1 space3
//row 3, 2 space1, 3 sym2, 4 space2, 3 sym2, 2 space3
//row 4, 3 space1, 4 sym2, 0 space2, 4 sym2, 3 space3


// for(let row = 1; row < 5; row++) {
//     for(let i = 0; i < row - 1; i++) {
//         process.stdout.write(" ");
//     }
//     for(let j = 0; j < row; j++) {
//         process.stdout.write("#");
//     }
//     for(let k = 0; k < (12 - (4 * (row - 1))); k++) {
//         process.stdout.write(" ");
//     }
//     for(let l = 0; l < row; l++) {
//         process.stdout.write("#");
//     }
//     for(let m = 0; m < row - 1; m++) {
//         process.stdout.write(" ");
//     }
// process.stdout.write("\n");
// }

//lower empty pyramid logic

//logic prep:

//row 1, 3 space1, 4 sym1, 0 space2, 4 sym2, 3 space3
//row 2, 2 space1, 3 sym1, 4 space2, 3 sym2, 2 space3
//row 3, 1 space1, 2 sym1, 8 space2, 2 sym2, 1 space3
//row 4, 0 space1, 1 sym1, 12 space2, 1 sym2, 0 space3

// for(row = 1; row < 5; row++) {
//     for(i = 0; i < 4 - row; i++) {
//         process.stdout.write(" ");
//     }
//     for(j = 0; j < 5 - row; j++) {
//         process.stdout.write("#"); 
//     }
//     for(k = 0; k < (12 - (4 * (4 - row))); k++) {
//         process.stdout.write(" ");
//     }
//     for(l = 0; l < 5 - row; l++) {
//         process.stdout.write("#");
//     }
//     for(m = 0; m < 4 - row; m++) {
//         process.stdout.write(" ");
//     }
// process.stdout.write("\n");
// }



//empty two sided pyramid:

for(let row = 1; row < 5; row++) {
    for(let i = 0; i < row - 1; i++) {
        process.stdout.write(" ");
    }
    for(let j = 0; j < row; j++) {
        process.stdout.write("#");
    }
    for(let k = 0; k < (12 - (4 * (row - 1))); k++) {
        process.stdout.write(" ");
    }
    for(let l = 0; l < row; l++) {
        process.stdout.write("#");
    }
    for(let m = 0; m < row - 1; m++) {
        process.stdout.write(" ");
    }
process.stdout.write("\n");
}

for(row = 1; row < 5; row++) {
    for(i = 0; i < 4 - row; i++) {
        process.stdout.write(" ");
    }
    for(j = 0; j < 5 - row; j++) {
        process.stdout.write("#"); 
    }
    for(k = 0; k < (12 - (4 * (4 - row))); k++) {
        process.stdout.write(" ");
    }
    for(l = 0; l < 5 - row; l++) {
        process.stdout.write("#");
    }
    for(m = 0; m < 4 - row; m++) {
        process.stdout.write(" ");
    }
process.stdout.write("\n");
}