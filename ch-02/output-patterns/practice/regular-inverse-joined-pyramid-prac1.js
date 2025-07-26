for(let row = 0; row < 4; row++) {
    for(let i = 0; i < 3 - row; i++) {
        process.stdout.write(' ');
    }
    for(let j = 0; j < ((2 * row) + 2); j++) {
        process.stdout.write('#');
    }
    for(let k = 0; k < 3 - row; k++) {
        process.stdout.write(' ');
    }
    process.stdout.write('\n');
}

for(let row = 0; row < 4; row++) {
    for(let i = 0; i < row; i++) {
        process.stdout.write(' ');
    }
    for(let j = 0; j < (8 - (2 * row)); j++) {
        process.stdout.write('#');
    }
    for(let k = 0; k < row; k++) {
        process.stdout.write('');
    }
    process.stdout.write('\n');
}