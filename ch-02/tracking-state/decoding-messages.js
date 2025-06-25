//goal: decode characters into letters/punctuation

let stream = "";
let encodedChars = "";
let decodedLetters = ""; 
let pos = 0;
let mode = 'UPPERCASE';

stream = prompt("enter coded message") //18, 12312, 171, 763, 98423, 1208, 216, 11, 500, 18, 241, 0, 32, 20620, 27, 10

while (pos < stream.length) {                                                   //tysm claude <3
while (stream.charAt(pos) !== ',' && stream.charAt(pos) !== "") {
    console.log(encodedChars);
    encodedChars += stream.charAt(pos); 
    pos++; 
} 

if (mode === 'UPPERCASE' && encodedChars % 27 !== 0) {
    decodedLetters += String.fromCharCode((encodedChars % 27) + 64); 
}

else if (mode === 'LOWERCASE' && encodedChars % 27 !== 0) {
    decodedLetters += String.fromCharCode((encodedChars % 27) + 96); 
}

else if (mode === 'PUNCTUATION' && encodedChars % 9 !== 0) {
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

else { 
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
}

encodedChars = "";
pos = pos + 2; 
}

console.log(decodedLetters); 





//comment archive:

//let stream, encodedChars, decodedLetters = ""; TIL this only declares the last var

//tracex: encodedChars 
    //pass 1: "" 
    //pass 2: "" + 17 = 17
    //pass 3: 17 + 324 = 17324
    //pass 4: 17324 + 8605 = 173248605
    //and so my doubt is, why isnt the output
    //1717324173248605
    //*spoiler*: it is. xD

//"" + 17 = 17. 17 becomes ""
//"" + 324 = 324. 324 becomes ""
//"" + 8605 becomes 8605


//and here's the decoder cum adder
//so there's a switch case situation. the initial state is UC
//case UC: modulo -> letter -> add to decoded o/p.
//if case UC and modulo = 0, case LC.
//case LC: modulo -> letter -> add to decoded o/p.
//if case LC and modulo = 0, case SY.
//case SY: modulo -> symbol -> add to decoded o/p.
//if case SY and modulo = 0, case UC.

//when overall i/p ends, print the decoded output. 