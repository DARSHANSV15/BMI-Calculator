//BMI calculator.
//Users enter your weight and height.

console.log("Enter weight and height");
function bmiCalculator(weight, height){
    var BMI=weight/Math.pow(height,2);
    return Math.round(BMI);
}

var bmi=bmiCalculator(65, 1.8);

console.log("BMI= "+ bmi);
