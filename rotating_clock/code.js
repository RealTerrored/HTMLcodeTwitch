const big = document.getElementById("big");
const small = document.getElementById("small");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const miliseconds = document.getElementById("miliseconds");
let i = 1;

let time_hours = new Date().getHours()
let time_minutes = new Date().getMinutes()
let time_seconds = new Date().getSeconds()
let time_miliseconds = new Date().getMilliseconds()

let time_rotate_hours
let time_rotate_minutes
let time_rotate_seconds
let time_rotate_miliseconds

const intervalId = setInterval(function() {
  if (1 == 1) {
    time_miliseconds = new Date().getMilliseconds()
    time_seconds = new Date().getSeconds()
    time_minutes = new Date().getMinutes()
    time_hours = new Date().getHours()

    time_rotate_miliseconds = time_miliseconds*0.36
    time_rotate_seconds = (time_seconds + (time_miliseconds/1000))*6
    time_rotate_minutes = (time_minutes + ((time_seconds + (time_miliseconds/1000))/60))*6
    time_rotate_hours = (time_hours + ((time_minutes + ((time_seconds + (time_miliseconds/1000))/60))/60))*30
    

    big.style.transform = `translate(-676.035pt, 394.4925pt) rotate(${i}deg)`;
    small.style.transform = `translate(-676.035pt, 394.4925pt) rotate(${i * 2.25}deg)`;
    hours.style.transform = `rotate(${time_rotate_hours}deg)`;
    minutes.style.transform = `rotate(${time_rotate_minutes}deg)`;
    seconds.style.transform = `rotate(${time_rotate_seconds}deg)`;
    miliseconds.style.transform = `translate(0, 105.8175pt) rotate(${time_rotate_miliseconds}deg)`;
    i++;
    if (i == 1440){
      i = 0
    }
  } else {
    clearInterval(intervalId);
  }
}, 10);