//goal: handle doubling for odd/even and >= 10 cases

//423765 -> '2', '7', '5' will be doubled, or doubler will be called for those values
//pos 0 to len (= 6)



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