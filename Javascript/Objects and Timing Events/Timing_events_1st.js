var sec = 1;


function print(){
    console.log("Hello Baby", sec);
    sec++;
    if(sec == 6){
        clearInterval(id); //specifiy the id instance which u have to stop
    }
}


//setTimeout(print,5000);

var id = setInterval(print,1000);