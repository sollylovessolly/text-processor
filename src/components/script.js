const ChatInput = document.querySelector(".chat-input textarea")
const sendChatBtn = document.querySelector(".chat-input span")
const chatbox = document.querySelector(".chatbox")

const createChatLi = (message, className) =>{
    const chatLi = document.createElement("li")
    chatLi.classList.add("chat", className)
    let chatContent = className === "outgoing" ? `<p>${message}<p/>`: `<p>${message}<p/>`
    chatLi.innerHTML = chatContent
    return chatLi


}
let userMessage 
const handlechat =()=>{
    userMessage = ChatInput.value.trim()
    if(!userMessage) return

    chatbox.appendChild(createChatLi(userMessage, "outgoing"))
    setTimeout(() =>{
        chatbox.appendChild(createChatLi("thinking...", "incoming"))

    },600)
    

}
sendChatBtn.addEventListener("click", handlechat)