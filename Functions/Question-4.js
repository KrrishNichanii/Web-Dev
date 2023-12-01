// Write a JavaScript function called calculateTax that takes an income as an argument and returns the
// amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
// function with various incomes.

const income=100500
const income2=157500
function calculateTax(income){
     
    function rate(){
        if(income > 200000) return income * 0.04;
        else if(income > 150000) return income * 0.03;
        else if(income > 100000) return income * 0.02 ;
        else return income * 0.01;
    }

    return rate();
}

console.log(`Tax generated on Rs${income} income is Rs${calculateTax(income)} `);
console.log(`Tax generated on Rs${income2} income is Rs${calculateTax(income2)} `);
