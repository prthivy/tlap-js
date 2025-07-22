//A: a symbol

//node
// process.stdout.write("#");
// process.stdout.write('\n');

//browser
// console.log('#');

//--------------------------------

//B: some number of symbols

//node
// for(let i = 1; i < 4; i++) {
//     process.stdout.write('#');    
// }
// process.stdout.write('\n');

//browser
// for(let i = 1; i < 4; i++) {
//     console.log('#');
// }

//--------------------------------

//C: half square 1 (full square)

//node
// for(let row = 1; row < 5; row++) {
//     for(let i = 0; i < 5; i++) {
//         process.stdout.write('#');
//     }
// process.stdout.write('\n');
// }


//browser
// for(let row = 1; row < 5; row++) {
// let pattern = "";
//     for(let i = 0; i < 5; i++) {
//         pattern += '#';
//     }
//     console.log(pattern);
// }

//--------------------------------

//D: half square 2

//node
// for(let row = 1; row < 5; row++) {
//     for(i = 0; i < row; i++) {
//         process.stdout.write('#');
//     }
// process.stdout.write('\n');
// }

//browser
// for(let row = 1; row < 5; row++) {
// let pattern = ""
//     for(i = 0; i < row; i++) {
//         pattern += "#";
//     }
// console.log(pattern);
// }

//--------------------------------

//E: half square 3

//node
// for(let row = 1; row < 5; row++) {
//     for(let i = 0; i < 5 - row; i++) {
//         process.stdout.write('#');
//     }
//     process.stdout.write('\n')
// }

//browser
// for(let row = 1; row < 5; row++) {
//     let pattern = "";
//     for(let i = 0; i < 5 - row; i++) {
//         pattern += '#';
//     }
//     console.log(pattern);
// }

//--------------------------------

for(let row = 0; row < 4; row++) {
    for(let i = 0; i < 4 - row; i++) {
        process.stdout.write('#');
    }
    process.stdout.write('\n');
}

