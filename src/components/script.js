const ChatInput = document.querySelector(".chat-input textarea")
const sendChatBtn = document.querySelector(".chat-input span")

const createChatLi = (message, className) =>{
    const chatLi = document.createElement("li")
    chatLi.classList.add("chat", className)
    let chatContent = className === "outgoing" ? `<p>${message}<p/>`: `<p>${message}<p/>`
    

}
let userMessage 
const handlechat =()=>{
    userMessage = ChatInput.value.trim()
    if(!userMessage) return

    createChatLi(userMessage, "outgoing")

}
sendChatBtn.addEventListener("click", handlechat)