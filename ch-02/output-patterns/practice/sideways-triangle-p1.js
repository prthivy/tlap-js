//node
//Logic A:

// for(let row = 1; row < 8; row++) {
//     for(let i = 0; i < 4 - Math.abs(4 - row); i++) {
//         process.stdout.write('#');
//     }
//     process.stdout.write('\n');
// }


//Logic B:
for(row = 0; row < 7; row++) {
    for(i = 0; i < 4 - Math.abs(4 - row); i++) {
        process.stdout.write('#');
    }
    process.stdout.write('\n');
}

//browser
// for(let row = 1; row <= 7; row++) {
//     let pattern = "";
//     for(let i = 0; i < 4 - Math.abs(4 - row); i++) {
//         pattern += '#';
//     }
//     console.log(pattern); 
// }

