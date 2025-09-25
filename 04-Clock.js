let intervalID;
const clock = document.querySelector('p');
const startButton = document.querySelector('button');
const slider = document.querySelector('.slider');
const showValue = document.querySelector('.value');
let tick = slider.value;
let seconds1 = 0;
let seconds2 = 0;
let minutes1 = 0;
let minutes2 = 0;
let hours1 = 0;
let hours2 = 0;

setInterval(()=>
    {
        tick = slider.value;
        showValue.innerHTML = tick;
    },10);

function startTimer()
{
    startButton.classList.add('block');
    intervalID = setInterval(count,tick);  
}

function stopTimer()
{
    startButton.classList.remove('block');
    clearInterval(intervalID);
}

function resetTimer()
{
    startButton.classList.remove('block');
    stopTimer();
    seconds1 = 0;
    seconds2 = 0;
    clock.innerHTML = "00:00:" + String(seconds1) + String(seconds2);
}

function count()
{
    seconds2++;

    if(hours1 === 9 && hours2 === 9)
    {
        stopTimer();
    }
    else if(hours2 === 9)
    {
        hours1++;
        hours2 = 0;
        seconds2 = 0;
        seconds1 = 0;
        minutes2 = 0;
        minutes1 = 0;
    }
    else if(minutes1 === 5 && minutes2 === 10)
    {
        hours2++;
        seconds2 = 0;
        seconds1 = 0;
        minutes2 = 0;
        minutes1 = 0;
    }
    else if(minutes2 === 10)
    {
        seconds2 = 0;
        seconds1 = 0;
        minutes2 = 0;
        minutes1++;
    }
    else if(seconds2 === 10 && seconds1 === 5)
    {
        seconds2 = 0;
        seconds1 = 0;
        minutes2++;
    }
    else if(seconds2 === 10)
    {
        seconds2 = 0;
        seconds1++;
    }

    clock.innerHTML = String(hours1) + String(hours2) + ":" + String(minutes1) + String(minutes2) + ":" + String(seconds1) + String(seconds2);
}
