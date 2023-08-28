var count = 10;

function timer() {
    if (count == 0) {
        console.log("Times up!!");
        clearInterval(id);
    }
    console.log(count);
    count--;
}

var id = setInterval(timer, 1000);
