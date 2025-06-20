//goal: convert char code to char

// let letter = 'R';
// letter.charCodeAt(0);

// let encoded = '83';
// String.fromCharCode(encoded);

// encodedDigits = 18;
// String.fromCharCode((encodedDigits % 27) + 64); 

let decodedLetter = "";
let encodedDigits = 18;
let mode = 'UPPERCASE'; 

if (mode === 'UPPERCASE' && encodedDigits % 27 !== 0) {
    console.log(mode);
    decodedLetter += String.fromCharCode((encodedDigits % 27) + 64);  
}

else { 
    mode = 'LOWERCASE';  
    console.log(mode);
}

if (mode === 'LOWERCASE' && encodedDigits % 27 !== 0) {
    decodedLetter += String.fromCharCode((encodedDigits % 27) + 96);  
}

else { 
     
}

if (mode === 'LOWERCASE' && encodedDigits % 27 !== 0) {
    decodedLetter += String.fromCharCode((encodedDigits % 27) + 96);  
}

else { 
    mode = 'UPPERCASE';
}

console.log(decodedLetter);