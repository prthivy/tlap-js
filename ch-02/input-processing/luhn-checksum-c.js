//goal: decide digit for doubling, for odd & even nos. 

//423765 -> '2', '7', '5' will be doubled, or, the doubler will be called for those values
//pos 0 to len (= 6)


//this function has a counter for the entire length of string,
//using % operator it decides if the value is to be doubled or not before adding
function evenCheckSum(num) {
    for (let pos = 0; pos < num.length; pos++) 
        if (pos % 2 == 1) {
            checkSum += doubler(num.slice(pos, pos + 1))
        }
        else {
            checkSum += num.slice(pos, pos + 1)
        }
}

function oddCheckSum(num) {
    for (let pos = 0; pos < num.length; pos++)
        if (pos % 2 == 0) {
            checkSum += doubler(num.slice(pos, pos + 1))
        }
        else {
            checkSum += num.slice(pos, pos + 1)
        }
}
