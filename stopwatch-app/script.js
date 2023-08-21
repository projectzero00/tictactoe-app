window.onload = () => {
    seconds.innerHTML = `${secondsDec}${secondsInt}`
    minutes.innerHTML = `${minutesDec}${minutesInt}`
}

let minutes = document.querySelector('.minutes')
let seconds = document.querySelector('.seconds')
let start = document.querySelector('.start')
let stop = document.querySelector('.stop')
let reset = document.querySelector('.reset')
let intervalId

let secondsInt = 0;
let secondsDec = 0;
let minutesInt = 0;
let minutesDec = 0;

start.addEventListener('click', () => {
    intervalId = setInterval(() => {
        secondsInt++
        if (secondsInt > 9) {
            secondsInt = 0
            secondsDec++
        }
        if (secondsDec > 5) {
            secondsDec = 0
            minutesInt++
        }
        if (minutesInt > 9) {
            minutesInt = 0
            minutesDec++
        }
        if (minutesDec === 6) {
            clearInterval(intervalId)
        }

        seconds.innerHTML = `${secondsDec}${secondsInt}`
        minutes.innerHTML = `${minutesDec}${minutesInt}`
    }, 1000);
})



stop.addEventListener('click', () => {
    clearInterval(intervalId)
})

reset.addEventListener('click', () => {
    clearInterval(intervalId)
    secondsInt = 0;
    secondsDec = 0;
    minutesInt = 0;
    minutesDec = 0;
    seconds.innerHTML = `${secondsDec}${secondsInt}`
    minutes.innerHTML = `${minutesDec}${minutesInt}`
})

