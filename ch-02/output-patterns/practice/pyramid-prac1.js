//node

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

//browser

for(let row = 0; row < 4; row++) {
    pattern = "";
    for(let i = 0; i < 3 - row; i++) {
        pattern += ' ';
    }
    for(let j = 0; j < ((2 * row) + 2); j++) {
        pattern += '#';
    }
    for(let k = 0; k < 3 - row; k++) {
        pattern += ' ';
    }    
    console.log(pattern);
}