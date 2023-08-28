array = [10,20,20,50,80,90,3];

const test = function (x) {
    return x>5;
}

if(!array.every(test)){
    console.log("Statement 1");
}
else{
    console.log("Statement 2");
}