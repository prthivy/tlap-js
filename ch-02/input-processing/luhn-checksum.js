//goal: add the individual parts, into a flowing unified whole program

let digit, num = ""; 
checkSum = 0; 

while(digit !== "") {
    digit = prompt("enter digit");
    num += digit;   
} 

console.log(num); 

if (num.length % 2 === 0) { 
    evenCheckSum(num);
}
else {
    oddCheckSum(num);
}

function doubler(doublee) {
    doublee *= 2;
    if (doublee >= 10) {
        return 1 + doublee % 10;
    }
    else {
        return doublee;
    }
}

function evenCheckSum(num) {
    for (let pos = 0; pos < num.length; pos++)
        if (pos % 2 === 1) {
            checkSum = doubler(num.slice(pos, pos + 1))
        }
        else {
            checkSum = +num.slice(pos, pos + 1)
        }
} 

function oddCheckSum(num) {
    for (let pos = 0; pos < num.length; pos++)
        if (pos % 2 === 0) {
            checkSum = doubler(num.slice(pos, pos + 1))
        }
        else {
            checkSum = +num.slice(pos, pos + 1)
        }
}

console.log(checkSum);

if (checkSum % 10 === 0) {
    console.log("valid!");
}
else {
    console.log("invalid.")
}


// tracex: 
// entered 1, 2.
// evenCheckSum called.
// loop: pos = 0 pos < 2  //pos 0, pos 1, pos 2. // when pos = 0: slice(0,1), when pos = 1: slice (1,2)
// iteration 1: pos = 0; 0 < 2; 0++
    //0 % 2 != 1 
    //checkSum = "" + +num.slice(0,1) = "" + +"1"
// iteration 2: pos = 1; 1 < 2; 1++
    //1 % 2 == 1
    //checkSum = "" + +doubler(num.slice(1,2) = "" + 4 

// tracex insights:
//  - checkSum is better initialized as 0 
//  - once initialized as 0, 0 = 0 + +<string>
//  - if not initialized as 0, but as "" "" -> "" = undefined + +<string>