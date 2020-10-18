const days = ['Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

/* HTML */

const displayers = document.querySelectorAll(".column h2");

// console.log(displayers);

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();
const futureDate = new Date(currentYear, currentMonth, currentDay + 10, 17, 30, 0);

function getRemaindingTime() {
    let timeInMeli = new Date().getTime();
    let futureMeli = futureDate.getTime();
    let difference = futureMeli - timeInMeli;
    // ! conversion
    const day = 24 * 60 * 60 * 1000;
    const hour = 60 * 60 * 1000;
    const minute = 60 * 1000;
    // ! logic
    let inDays = Math.floor(difference / day);
    let inHours = Math.floor((difference % day) / hour);
    let inMinutes = Math.floor((difference % hour) / minute);
    let inSecs = Math.floor((difference % minute) / 1000);
    const values = [0, inDays, inHours, inMinutes, inSecs];
    // ! display
    displayers.forEach(function(item, index) {
        item.innerHTML = format(values[index]);
    });
}

function format(item) {
    if (item < 10) {
        return `0${item}`;
    }
    return item;
}

let countdown = setInterval(getRemaindingTime, 1000);
//set initial values
getRemaindingTime();