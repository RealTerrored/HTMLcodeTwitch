let i = 0
const output = document.getElementById("count")

const intervalId = setInterval(function() {
    output.innerHTML = new Date(i*1000).toISOString().slice(11, 19)
    i++
  }, 1000);