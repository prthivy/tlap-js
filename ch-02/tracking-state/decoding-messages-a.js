//goal: extract individual chars from an i/p stream of comma delimited chars

//sample i/p stream: 14, 42943, 349, 32, 9, 2308
//mock trace: 
// 1. read 1. 
// 2. add to empty string. 
// 3. read 4. 
// 4. add to string '1'. 
// 5. read `comma`. 
// 6. stop. mark the checkpoint
// 7. decoding logic (decode number/change state) 
// 8. store to message
// 9. move to next number.  
// 10. repeat logic from step 3.
// 11. read `null` (ok pressed). 
// 12. stop. 
// 13. read stored message.  

let stream, codedChar = ""
let pos = 1;
let posCheckPoint = ""

stream = prompt("enter coded message") 

while(stream.slice(pos-1, pos) !== ',' && stream.slice(pos-1, pos) !== "") {
    codedChar +=  stream.slice(pos-1, pos);
    pos++;
} 
 
//tracex: 
//entered 14, 42943, 349, 32, 9, 2308
//iteration 1: pos = 1. 
    //loop: slice(0, 1) 
    //codedChar = "" + "1"
    //pos = 2
//iteration 2: pos = 2. 
    //loop: slice(1, 2)
    //codedChar = "1" + "4"
    //pos = 3
//iteration 3: pos 3.
    //loop: slice(2, 3). 
    //cond: FALSE
    //posCheckPoint = 3;
    
//...
//



    