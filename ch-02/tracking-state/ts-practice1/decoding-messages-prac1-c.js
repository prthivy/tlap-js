function decoder(decoded) {

}

let mode = "UPPER";
let decodedMessage = "";


if(mode === "UPPER" && encodedChar % 27 !== 0) { 
    (decodedChar = String.fromCharCode((encodedChar % 27) + 64));
    decodedMessage += decodedChar;
}

else if(mode === "UPPER" && encodedChar % 27 === 0) {
    mode = "LOWER";
}

else if(mode === "LOWER" && encodedChar % 27 !== 0) {
    (decodedChar = String.fromCharCode((encodedChar % 27) + 96));
    decodedMessage += decodedChar;
}

else if(mode === "LOWER" && encodedChar % 27 === 0) {
    mode = "PUNCTUATION";

}

else if(mode === "PUNCT" && encodedChar % 9 !== 0) {

    switch (encodedChar % 9) {
        case 1: 
        decodedChar = '!';
        decodedMessage += decodedChar;
        break;

        case 2:
        decodedChar = '?';
        decodedMessage += decodedChar;
        break;

        case 3:
        decodedChar = ',';
        decodedMessage += decodedChar;
        break;

        case 4:
        decodedChar = '.';
        decodedMessage += decodedChar;
        break;

        case 5:
        decodedChar = ' ';
        decodedMessage += decodedChar;
        break;

        case 6: 
        decodedChar = ';';
        decodedMessage += decodedChar;
        break;

        case 7: 
        decodedChar = '"';
        decodedMessage += decodedChar;
        break;

        case 8:
        decodedChar = "'";
        decodedMessage += decodedChar;
        break;

        default:
        break;


    }

}

else if(mode === "PUNCT" && encodedChar % 9 === 0) {
    mode = "UPPER";

}

//String.fromCharCode()