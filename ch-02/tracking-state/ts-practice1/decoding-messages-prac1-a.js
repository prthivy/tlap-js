//browser
let stream = ""; 
let encoded = "";
let indexPos = 0; 

stream = prompt("Enter your coded message: ");
console.log(stream);

while(stream.charAt(indexPos) !== "," && stream.charAt(indexPos) !== " ") {
    encoded += stream.charAt(indexPos, indexPos + 1);
    indexPos++;
}

console.log(encoded);

//char-by-char decoding logic