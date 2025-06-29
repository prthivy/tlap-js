//logic a: using browser

// for (row = 1; row < 8; row++) {
//     pattern = "";
//     for (i = 0; i < (4 - Math.abs(4 - row)); i++) {
//         pattern += '#';
//     }
//     console.log(pattern); 
// }

//what i want (from core equation)
//4 - (4 - 1) = 1
//4 - (4 - 2) = 2
//4 - (4 - 3) = 3
//4 - (4 - 4) = 4
//4 - (4 - 5) = 3
//4 - (4 - 6) = 2
//4 - (4 - 7) = 1

//tracex:
//row 1: "", i = 0, i < 1 true, i++, #
//row 1: #, i = 1, i < 1 false, print #

//row 2: "", i = 0, i < 2 true, i++, #
//row 2: #, i = 1, i < 2 true, i++, ##
//row 2: ##, i = 2, i < 2 false, i++, print ##

//row 3: "", i = 0, i < 3 true, i++, #
//row 3: #, i = 1, i < 3 true, i++, ##
//row 3: ##, i = 2, i < 3 true, i++, ###
//row 3: ###, i = 3, i < 3 false, print ###


//logic b: using terminal

for(let row = 1; row < 8; row++) {
    for(let i = 0; i < (4 - Math.abs(4 - row)); i++) {
    process.stdout.write("#");
    }
process.stdout.write("\n");
}







