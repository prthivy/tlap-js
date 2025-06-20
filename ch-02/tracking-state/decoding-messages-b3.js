//goal: write a switch case block with equations
let mode = 'UPPERCASE';

    switch (mode) {
        case 'UPPERCASE':
            mode = 'LOWERCASE';
            break;

        case 'LOWERCASE':
            mode = 'PUNCTUATION';
            break;

        case 'PUNCTUATION':
            mode = 'UPPERCASE';
            break;
    } 
