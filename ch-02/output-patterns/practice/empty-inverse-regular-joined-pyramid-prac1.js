for(let row = 0; row < 4; row++) {
    for(let i = 0; i < row; i++) {
        process.stdout.write(' ');
    }
    for(let j = 0; j < row + 1; j++) {
        process.stdout.write('#');
    }
    for(let k = 0; k < (12 - (4 * row)); k++) {
        process.stdout.write(' ')
    }
    for(let l = 0; l < row + 1; l++) {
        process.stdout.write('#');
    }
    for(let m = 0; m < row; m++) {
        process.stdout.write(' ');
    }
process.stdout.write('\n');
}

for(let row = 0; row < 4; row++) {
    for(let i = 0; i < 3 - row; i++) {
        process.stdout.write(' ');
    }
    for(let j = 0; j < 4 - row; j++) {
        process.stdout.write('#');
    }
    for(let k = 0; k < 4 * row; k++) {
        process.stdout.write(' ');
    }
    for(let l = 0; l < 4 - row; l++) {
        process.stdout.write('#');
    }
    for(let m = 0; m < 3 - row; m++) {
        process.stdout.write(' ');
    }
process.stdout.write('\n');
}