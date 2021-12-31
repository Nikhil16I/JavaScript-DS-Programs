/*List of integers*/
let integersArray  = [1, 2, 4, -3, -1, 5, 6]

        for (let i = 0; i < integersArray.length; i++) {
        for (let j = i + 1; j < integersArray.length; j++) {
        for (let k = j + 1; k < integersArray.length; k++) {

        if (integersArray[i] + integersArray[j] + integersArray[k] == 0) {
            /*Printing the numbers whose sum are eqaul to zero*/
    console.log("Sum of three integers are zero from the Integers array the ")
    console.log("Numbers are: " + integersArray[i] +","+  integersArray[j]+","+ integersArray[k]);
     }
    }
  }
 }
    