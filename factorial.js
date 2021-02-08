/*
*TDD using test last approach to calculate the factorial of a number
*Group Otim Benjamin Munguriek and Ndagire Mariat
*/
const factorial = function(number){
     // checking if number is negative
     if (number < 0) {
        return 'No Factorial';
    }  else if (number === 0) {
        return 1;
    } else {
        let fact = 1;
        for (i = 1; i <= number; i++) {
            fact *= i;
        }
        return fact;
    }
}
module.exports = factorial;