/*Creating an array to store digits from 1-100*/
var repeateddigits = new Array();

/*sorting repeating two digit numbers*/
for(let i = 1; i <= 100 ; i++){
    if(i % 11 == 0){
        repeateddigits.push(i);
    }    
}
console.log("From 1 to 100 Repeated Elements are")
console.log(repeateddigits)