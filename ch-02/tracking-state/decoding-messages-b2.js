//goal: convert char code to char

// let letter = 'R';
// letter.charCodeAt(0);

// let encoded = '83';
// String.fromCharCode(encoded);

// encodedChars = 18;
// String.fromCharCode((encodedChars % 27) + 64); 

let decodedLetters = "";
let encodedChars = 18; //shoulda added more values here
let mode = 'UPPERCASE'; 

if (mode === 'UPPERCASE' && encodedChars % 27 !== 0) {
    console.log(encodedChars);
    decodedLetters += String.fromCharCode((encodedChars % 27) + 64); 
    console.log(decodedLetters); 
}

else { 
    mode = 'LOWERCASE';  
}

if (mode === 'LOWERCASE' && encodedChars % 27 !== 0) {
    decodedLetters += String.fromCharCode((encodedChars % 27) + 96);  
}

else { 
    mode = 'PUNCTUATION';
}

if (mode === 'PUNCTUATION' && encodedChars % 9 !== 0) {
    //symbol table logic 
}

else { 
    mode = 'UPPERCASE';
}

console.log(decodedLetters);