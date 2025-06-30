//logic a: using browser

//logic a prep(upper): 

//row 1, space 0, sym 2, space 4, sym 2, space 0
//row 2, space 1, sym 2, space 2, sym 2, space 1
//row 3, space 2, sym 2, space 0, sym 2, space 2

for(let row = 1; row < 4; row++) {
    let pattern = "";
    for(let space = 0; space < row - 1; space++) {
        pattern += " ";
    }
    for(let symbol = 0; symbol < 2; symbol++) {
        pattern += "#";
    }
    for(space = 0; space < 4 - (2 * (row - 1)); space++) {
        pattern += " ";
    }
    for(symbol = 0; symbol < 2; symbol++) {
        pattern += "#";
    }
    for(space = 0; space < row - 1; space++) {
        pattern += " ";
    }
console.log(pattern);
}

//middle:

for(row = 1; row < 2; row++) {
    pattern = "";
    for(space = 0; space < 4 - row; space++) {
        pattern += " ";
    }
    for(symbol = 0; symbol < 2; symbol++) {
        pattern += "#";
    }
    for(space = 0; space < 4 - row; space++) {
        pattern += " ";
    }
console.log(pattern);
}

//logic a prep(lower): 

//row 1, space 2, sym 2, space 0, sym 2, space 2
//row 2, space 1, sym 2, space 2, sym 2, space 1
//row 3, space 0, sym 2, space 4, sym 2, space 0

for(row = 1; row < 4; row++) {
    pattern = "";
    for(space = 0; space < 3 - row; space++) {
        pattern += " ";
    }
    for(symbol = 0; symbol < 2; symbol++) {
        pattern += "#";
    }
    for(space = 0; space < (4 - (2 * (3 - row))); space++) {
        pattern += " ";
    }
    for(symbol = 0; symbol < 2; symbol++) {
        pattern += "#";
    }
    for(space = 0; space < 3 - row; space++) {
        pattern += " ";
    }
console.log(pattern);
}










//logic b: using terminal

//upper half logic

//logic b prep(upper):

//row 1, space 0, sym 2, space 4, sym 2, space 0
//row 2, space 1, sym 2, space 2, sym 2, space 1
//row 3, space 2, sym 2, space 0, sym 2, space 2


// for(let row = 1; row < 4; row++) {
//     for(let space = 0; space < row - 1; space++) {
//         process.stdout.write(" ");
//     }
//     for(let symbol = 0; symbol < 2; symbol++) {
//         process.stdout.write("#");
//     }
//     for(space = 0; space < (4 - (2 * (row - 1))); space++) {
//         process.stdout.write(" ")
//     }
//     for(symbol = 0; symbol < 2; symbol++) {
//         process.stdout.write("#");
//     }
//     for(space = 0; space < row - 1; space++) {
//         process.stdout.write(" ");
//     }
// process.stdout.write("\n");
// }

//middle

// for(row = 1; row < 2; row++) {
//     for(space =  0; space < 4 - row; space++) {
//         process.stdout.write(" ");
//     }
//     for(symbol = 0; symbol < 2; symbol++) {
//         process.stdout.write("#");
//     }
// process.stdout.write("\n");
// }

//logic b prep(lower):

//row 1, space 2, sym 2, space 0, sym 2, space 2
//row 2, space 1, sym 2, space 2, sym 2, space 1
//row 3, space 0, sym 2, space 4, sym 2, space 0

// for(row = 1; row < 4; row++) {
//     for(space = 0; space < 3 - row; space++) {
//         process.stdout.write(" ");
//     }
//     for(symbol = 0; symbol < 2; symbol++) {
//         process.stdout.write("#");
//     }
//     for(space = 0; space < 2 * (row - 1); space++) {
//         process.stdout.write(" ");
//     }
//     for(symbol = 0; symbol < 2; symbol++) {
//         process.stdout.write("#");
//     }
//     for(space = 0; space < 3 - row; space++) {
//         process.stdout.write(" ");
//     }
// process.stdout.write("\n");
// }


