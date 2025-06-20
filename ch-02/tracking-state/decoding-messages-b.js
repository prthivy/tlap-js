//goal: decode characters into letters/punctuation

let stream, encodedDigits = "";
let pos = 0;

stream = prompt("enter coded message") //17, 324, 8605, 99999

while (pos < stream.length) {                                                   //tysm claude <3
while (stream.charAt(pos) !== ',' && stream.charAt(pos) !== "") {
    encodedDigits +=  stream.slice(pos, pos + 1); 
    pos++; 
} 

//and here's the decoder cum adder
//so there's a switch case situation. the initial state is UC
//case UC: modulo -> letter -> add to decoded o/p.
//if case UC and modulo = 0, case LC.
//case LC: modulo -> letter -> add to decoded o/p.
//if case LC and modulo = 0, case SY.
//case SY: modulo -> symbol -> add to decoded o/p.
//if case SY and modulo = 0, case UC.

//when overall i/p ends, print the decoded output. 

const mode = 'UPPERCASE'; 
if (encodedDigits % 27 !== 0) {
    String.fromCharCode(encodedDigits % 27);
}



console.log(encodedDigits);
encodedDigits = ""
pos = pos + 2; 

}

































//tracex: encodedDigits 
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