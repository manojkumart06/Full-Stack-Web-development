// Write your code here:

var weight = prompt();
var height = prompt();

//var weight = 58;
//var height = 1.60;

var BMI = weight/(height*height);

var category;

if(BMI<18.5){
   	category = "Underweight";
}else if(BMI >= 18.6 && BMI <= 24.9){
	category = "Healthy";
}else if(BMI >= 25 && BMI <= 25.9){
    category = "Overweight";
}
else{
    category = "Obese";
}
console.log("Your Body Mass Index is:"+ BMI + " and You are " +category+ "."); 

