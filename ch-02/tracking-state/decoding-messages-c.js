//goal: realize the symbol table to be used for punctuation mode

//1 = '!'
//2 = '?'
//3 = ','
//4 = '.'
//5 = ' '
//6 = ';'
//7 = '"'
//8 = '''

else if (mode === 'LOWERCASE' && encodedChars % 9 !== 0) {
    switch (encodedChars % 9) {
        case 1: 
           decodedLetters += '!'; 
           break;
        case 2:
           decodedLetters += '?';
           break;            
        case 3:
           decodedLetters += ','; 
           break;            
        case 4:
           decodedLetters += '.'; 
           break;            
        case 5:
           decodedLetters += ' '; 
           break;            
        case 6:
           decodedLetters += ';';
           break;            
        case 7:
           decodedLetters += '"'; 
           break;            
        case 8:
           decodedLetters += "'";
           break;            
    }
}
