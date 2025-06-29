//logic a: using browser
// for(row = 1; row < 3; row++) {
//     let pattern = "";
//         for(i = 0; i < row; i++) {
//             pattern += '#';
//         }
//         console.log(pattern);
// }


//comment archive (followed by node version)

//tracex a:

    //row = 0
        //i TRUE
        //pattern = '' + #
        //i FALSE
        //print
    //row = 1
        //i TRUE
        //pattern = '' + #
        //i TRUE
        //pattern = # + # 
        //i FALSE
        //print

// rev: empty, empty + symbol(1), empty + symbol(1) + symbol(2)

//logic b: 
// for(row = 1; row < 3; row++) {
//     let pattern = "";
//         for(i = 0; i < 2; i++) {
//             pattern += '#';
//         }
//         console.log(pattern);
// }

//tracex b:
//row 1, "", #(0), ##(1), "", #(0), ##(1)


//logic c:
//for(row = 1; row <= 2 ; row++){ 
//     let pattern = "";
//         for(i = 0; i < row; i++) {
//             pattern += '#';
//             }
//         console.log(pattern);
// }

//logic d:
// for(row = 1; row <= 2 ; row++){ 
//     let pattern = "";
//         for(i = 0; i <= row; i++) {
//             pattern += '#';
//             }
//         console.log(pattern);
// }

//tracex d: 
//row 1: "", #, ##, false, print
//row 2: "", #, ##, ###, false, print


//logic e:
// for(row = 1; row < 3; row++) {
//     let pattern = "";
//     for(i = 3; i > row; i--)
//     {
//         pattern += '#';
//     }
//     console.log(pattern);
// }

//tracex e:
//row 1: "", i 3: #, i 2: ##, i 1:, false, print
//row 2: "", i 2: #, i 1:, false, print

//logic f
// for(row = 0; row < 2; row++) {
//     let pattern = "";
//     for(i = 2; i > row; i--) {
//         pattern += '#';
//     }
//     console.log(pattern);
// }

//tracex f:
//row 0: "", i2, true, #, --, i1, true, ##, --, i0, false, print ##
//row 1: "", i2, true, #, --, i1, false, print #



//logic g: using terminal

//logic g prep:
//1 row, 3 sym
//2 row, 2 sym
//3 row, 1 sym
//eqn: sym = 4 - row


for(let row = 1; row < 4; row++) {
    for(i = 0; i < 4 - row; i++) {
       process.stdout.write('#'); 
    }
    process.stdout.write('\n'); 
}



