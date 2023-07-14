class Message{
    constructor(n){
        this.n = n
    }
    generate(){
        this = document.createElement("p")
        this.classList.add("messages")
    }
}