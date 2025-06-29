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


for(let row = 1; row < 4; row++) {
    let pattern = "";
    for(let i = 0; i < 3 - row; i++) {
        pattern += " ";
    }
    for(let j = 0; j < row * 2; j++) { 
        pattern += "#";
    }
    console.log(pattern);
}

for(row = 1; row < 4; row++) {
    let pattern = "";
    for(i = 0; i < row - 1; i++) {
        pattern += " ";
    }
    for(j = 0; j < (6 - (2 * (row - 1))); j++) {
        pattern += "#";
    }
    console.log(pattern);
}


