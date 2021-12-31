function primeFactors(n) { //Function for Prime Factorization 

    const arrayfactors = [];//Creating an array to store primr factors
    let divisor = 2;
  
    while (n >= 2) {
      if (n % divisor == 0) {
        arrayfactors.push(divisor);
        n = n / divisor;
      } else {
        divisor++;
      }
    }
    return arrayfactors;
  }
  const anyInteger =  1000 //Taking any Integer to find Prime Factors
  
  /*Printing Prime Factors For the Integer*/
  console.log("Prime factors of", anyInteger + "-", primeFactors(anyInteger))