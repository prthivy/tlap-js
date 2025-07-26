//node

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

//browser

for(let row = 0; row < 4; row++) {
    let pattern = "";
    for(let i = 0; i < row; i++) {
        pattern += ' ';
    }
    for(let j = 0; j < (8 - (2 * row)); j++) {
        pattern += '#';
    }
    for(let k = 0; k < row; k++) {
        pattern += ' ';
    }
    console.log(pattern);
}