let seconds = 59;
let minutes = 19;
let hours = 23;
let days = 3;
let intervalsec;

function geriyeSay() {
    function second() {
        if (seconds > 0) {
            seconds--;
        } else if (minutes > 0) {
            seconds = 59;
            minutes--;
        } else if (hours > 0) {
            seconds = 59;
            minutes = 59;
            hours--;
        } else if (days > 0) {
            seconds = 59;
            minutes = 59;
            hours = 24;
            days--;
        } else {
            clearInterval(intervalsec);
            seconds = "0";
            minutes = "0";
            hours = "0";
            days = "0";
        }

        document.getElementById("seconds").textContent = seconds <= 9 ? `0${seconds}` : seconds;
        document.getElementById("minutes").textContent = minutes <= 9 ? `0${minutes}` : minutes;
        document.getElementById("hours").textContent = hours <= 9 ? `0${hours}` : hours;
        document.getElementById("days").textContent = days <= 9 ? `0${days}` : days;
    }


    intervalsec = setInterval(second, 1000);
}

geriyeSay();
