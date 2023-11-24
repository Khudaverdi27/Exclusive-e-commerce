let seconds = 59;
let minutes = 19;
let hours = 23;
let days = 3;
let intervalsec;

function count() {
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


        const updateDisplay = (selector, value) => {
            document.querySelectorAll(selector).forEach(item => {
                item.textContent = value <= 9 ? `0${value}` : value;
            });
        };

        updateDisplay(".seconds", seconds);
        updateDisplay(".minutes", minutes);
        updateDisplay(".hours", hours);
        updateDisplay(".days", days);


    }


    intervalsec = setInterval(second, 1000);
}

count();

export default count