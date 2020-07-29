const result = document.getElementById("time")
const userInput = document.getElementById("minutes")
let timer
let second

function startMinCountdown() {
    result.innerHTML = `${userInput.value}:00`
    second = userInput.value * 60
    timer = setInterval(() => {
        second--
        result.innerHTML = `${Math.floor(second / 60)}:${second % 60}`
    }, 1000)
}

function pauseMinCountdown() { 
    clearInterval(timer)
}

function restartMinCountdown() {
    timer = setInterval(() => {
        second--
        result.innerHTML = `${Math.floor(second / 60)}:${second % 60}`
    }, 1000)
}