let stream = prompt("enter stuff");
let pos = 1;
let number = "";           //empty string initialized to avoid undefined + stream(...);
while (stream.slice(pos-1, pos) !== "") {
    number = number + stream.slice(pos-1, pos); 
    pos++;
}
// console.log(number);