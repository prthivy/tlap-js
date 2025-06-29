//logic a: using browser

// for(row = 1; row < 4; row++) {
//     pattern = "";
//     for(i = 0; i < row - 1; i++) {
//         pattern += " ";
//     }
//     for(j = 0; j < 3 - (row - 1); j ++) {
//         pattern += "#";
//     }
//     console.log(pattern);
// }

//what i want(from core equation)
//space: row - 1
//sym: 3 - space = (3 - (row - 1))


//logic b: using terminal

//logic b prep:
//1 row, 4 sym, 0 space
//2 row, 3 sym, 1 space
//3 row, 2 sym, 2 space
//4 row, 1 sym, 3 space

for(let row = 1; row < 5; row++) {
    for(let i = 0; i < row - 1; i++) {
        process.stdout.write(" ");
    }
    for(let j = 0; j < 5 - row; j++) {
        process.stdout.write("#");
    }
    for(let k = 0; k < row - 1; k++) {
        process.stdout.write(" ");
    }
process.stdout.write("\n");
}