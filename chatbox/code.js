////////////////////////////////////////////////////////////////////
////////////////Twitch Chatbox by TerroredUnleashed/////////////////
////////////////////////////////////////////////////////////////////
n = 5 ///number of seconds to display on scene, 0 means infinite////
f = 3 //fade duration in seconds////////////////////////////////////

function Overflow(node) {
	return node.scrollHeight > node.clientHeight
}



let output = document.getElementById("chatbox"), childID;
const client = new tmi.Client({
	channels: [ 'codetestingserver' ]
});

client.connect();

let count
let x = 0
client.on('message', (channel, tags, message, self) => {
	window["element" + x] = document.createElement("p")
	window["element" + x].classList.add("messages")
	window["element" + x].id = x
	output.appendChild(window["element" + x])
	window["element" + x].innerHTML = `${tags['display-name']}: ${message}`
	x++
});
if (n != 0) {
	const catch_messages = setInterval(function(){
		count = output.childNodes.length
		if (count > 1) {
			for (i = 1; i < count; i++) {
				childID = output.childNodes[i]
				try {
					if (typeof window["temp" + childID.id] == typeof undefined){
						window["temp" + childID.id] = n
					}
					else {
						window["temp" + childID.id]--
					}
					if (window["temp" + childID.id] == 0) {
						childID.style.animation = `fade ${f}s linear`
						childID.addEventListener("animationend", function() {
							this.remove()
						});
						window["temp" + childID.id].delete
					}
				}
				catch ({ name, message }) {
					console.log("Handled exception: " + name + " " + message + ", object was deleted for efficiency")
				}
			}
		}
	}, 1000);
}
client.on('message', (channel, tags, message, self) => {
	for (i=1; i < output.childNodes.length; i++) {
		childElement = output.childNodes[i]
		if (childElement.getBoundingClientRect().top < output.getBoundingClientRect().top){
			childElement.style.animation = `fade ${f}s linear`
			childElement.addEventListener("animationend", function() {
				this.remove()
			});
		}
	}
});