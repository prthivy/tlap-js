//browser
let encodedStream = ""; 
let encodedChar = "";
let pos = 0;
let decodedMessage = "";

function decoder(encodedChar) {

let mode = "UPPER";
let decodedChar = "";


if(mode === "UPPER" && encodedChar % 27 !== 0) { 
    (decodedChar = String.fromCharCode((encodedChar % 27) + 64));
    return decodedChar;
}

else if(mode === "UPPER" && encodedChar % 27 === 0) {
    mode = "LOWER";
    console.log(mode);
}

else if(mode === "LOWER" && encodedChar % 27 !== 0) {
    (decodedChar = String.fromCharCode((encodedChar % 27) + 96));
    return decodedChar;
}

else if(mode === "LOWER" && encodedChar % 27 === 0) {
    mode = "PUNCT";

}

else if(mode === "PUNCT" && encodedChar % 9 !== 0) {

    switch (encodedChar % 9) {
        case 1: decodedChar = '!';
        return decodedChar;

        case 2: decodedChar = '?';
        return decodedChar;

        case 3: decodedChar = ',';
        return decodedChar;

        case 4: decodedChar = '.';
        return decodedChar;


        case 5: decodedChar = ' ';
        return decodedChar;

        case 6: decodedChar = ';';
        return decodedChar;

        case 7: decodedChar = '"';
        return decodedChar;

        case 8: decodedChar = "'";
        return decodedChar;

        default:
        break;
    }

}

else if(mode === "PUNCT" && encodedChar % 9 === 0) {
    mode = "UPPER";

}
}

encodedStream = prompt("enter your coded message: ");
console.log(encodedStream);
    
while(pos < encodedStream.length) {                            
    while(encodedStream.charAt(pos) !== ","                       
    && encodedStream.charAt(pos) !== " " 
    && encodedStream.charAt(pos) !== "") {
        encodedChar += encodedStream.charAt(pos);
        pos++; 
}

        console.log(encodedChar);
        decodedMessage += decoder(encodedChar);        
        encodedChar = "";

        if(encodedStream.charAt(pos + 1) === " ") {
            pos += 2; 
        }
        else {
            pos++;
        }
console.log(decodedMessage);    
}

