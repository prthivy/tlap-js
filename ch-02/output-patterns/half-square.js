//tracex:

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


for(row = 1; row < 3; row++) {
    let pattern = "";
        for(i = 0; i < row; i++) {
            pattern += '#';
        }
        console.log(pattern);
}

// for(row = 1; row < 3; row++) {
//     let pattern = "";
//         for(i = 0; i < 2; i++) {
//             pattern += '#';
//         }
//         console.log(pattern);
// }

//tracex that^:
//basically, for all iterations it runs twice
//whereas the solution adjusts itself to the incrementing variable


