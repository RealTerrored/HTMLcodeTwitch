function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const seconds = "300"
const output = document.getElementById("output")
const quote = document.getElementById("quote")
const lines = ["BREWING TEA", "STARTING GAMES", "PREPARING MUSIC", "STRESSING OUT", "JUST SLEEPING", "MAKING 'FUNNY' JOKES", "LOCKING THE DOOR", "SETTING UP AUDIO", "CHATTING ON DISCORD", "CHECKING TWITTER", "THINKING ABOUT LIFE"]

let time_now = new Date().getTime()
time_now = Math.round(time_now/1000) * 1000
let time_then = time_now + Number(seconds)*1000
let quote_pick = getRandomInt(10)
const intervalId = setInterval(function() {
    if (time_now < time_then) {
        if (time_now % 15000 == 0){
            quote_pick = getRandomInt(10)
        }
        output.innerHTML = new Date(time_then - time_now).toISOString().slice(11,19)
        quote.innerHTML = lines[quote_pick]
        time_now = time_now + 1000
    } else {
        output.innerHTML = "Any minute now..."
        clearInterval(intervalId);
    }
  }, 1000);