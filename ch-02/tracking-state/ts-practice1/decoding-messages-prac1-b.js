//browser
let encodedStream = ""; 
let encodedChar = "";
// let decodedChar = "";
let pos = 0;

encodedStream = prompt("Enter your coded message: ");
console.log(encodedStream);
    
while(pos < encodedStream.length) {                            
    while(encodedStream.charAt(pos) !== ","                       
    && encodedStream.charAt(pos) !== " " 
    && encodedStream.charAt(pos) !== "") {
        encodedChar += encodedStream.charAt(pos);
        pos++; 
}

        // decodedChar = encodedChar * 2; 
        // console.log(decodedChar);

        encodedChar = "";

        // console.log(`1. encodedStream Index is: ${pos}`);

        if(encodedStream.charAt(pos + 1) === " ") {
            pos += 2; 
            // console.log(`2. encodedStream Index is: ${pos}`);
        }
        else {
            pos++;
            // console.log(`3. encodedStream Index is: ${pos}`);
        }
}

//String.fromCharCode() use it boy