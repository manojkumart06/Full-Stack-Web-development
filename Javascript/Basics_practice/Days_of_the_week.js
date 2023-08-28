// Write your code here:
function returnDay(number){
    var week = ['Monday','Tuesday','Wednesday',"Thursday","Friday","Satuarday","Sunday"];
    if (number < 1 || number > 7){
        return null;
    }
    else{
    return week[number-1];
    }
}



console.log(returnDay(7));


