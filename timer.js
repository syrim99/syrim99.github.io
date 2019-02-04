/*Syntax To Timer */
var hou = 0;
var min = 0;
var second = 0;
var mili = 0;
var timerID = null;

function TimerTick() {
    if (mili >= 9) {
        mili = 0;
        if (second >= 59) {
            second = 0;
            if (min >= 59) {
                min = 0;
                hou += 1;
            }
            else {
                min += 1;
            }
        }
        else {
            second += 1;
        }
    }
    else {
        mili += 1;
    }
    
    var MyTimerCount = document.getElementById("myTimer");
    MyTimerCount.value = hou+':'+min+':'+second + '.' + mili;
}

function starttimer() {
    timerID = setInterval(TimerTick, 100, null);
}

function stoptimer() {
    if (timerID != null) clearInterval(timerID);
}