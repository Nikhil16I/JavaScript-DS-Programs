let randomNumber  = new Array();/*Creating an array to store Three digit numbers*/

for (let index = 0; index < 10; index++) {
    randomNumber[index] = Math.floor(Math.random()*900)+100;   
}
console.log("Random three digit numbers in Array are -["+randomNumber+"]")/*Printing the Numbers*/

/*Finding Second Largest Number from Array*/
    var max = Math.max.apply(null, randomNumber), // getting the max of the array
        maxi = randomNumber.indexOf(max);
        randomNumber[maxi] = -Infinity; // replace max in the array with  neagative infinity

    var secondMax = Math.max.apply(null, randomNumber); // getting the new max 
    randomNumber[maxi] = max;
    console.log("The Second Largest Number from Array is-"+secondMax+".")

    /*Finding Second Smallest Number from Array*/
    var min = Math.min.apply(null, randomNumber), // getting the min of the array
        maxi = randomNumber.indexOf(min);
        randomNumber[maxi] = +Infinity; // replace min in the array with positive infinity

    var secondMin = Math.min.apply(null, randomNumber); // getting the new min 
    randomNumber[maxi] = min;
    console.log("The Second Smallest Number from The Array is-"+secondMin+".")