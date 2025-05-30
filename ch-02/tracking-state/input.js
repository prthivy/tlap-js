//this code scans all input up till a comma or an empty string (ENTER key or OK click) is encountered and
//returns the concatenation of those characters, thus extracting a (single) value from a list of 
//comma delimited values

let stream = prompt("enter stuff");
let pos = 1;
let number = "";           //empty string initialized to avoid undefined + stream(...);
while (stream.slice(pos-1, pos) !== ',' && stream.slice(pos-1, pos) !== "") { //extractor 
    number = number + stream.slice(pos-1, pos); 
    pos++;
}
// console.log(number);
