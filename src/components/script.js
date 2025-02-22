const ChatInput = document.querySelector(".chat-input textarea")
const sendChatBtn = document.querySelector(".chat-input span")
const chatbox = document.querySelector(".chatbox")

const API_KEY = ""

const createChatLi = (message, className) =>{
    const chatLi = document.createElement("li")
    chatLi.classList.add("chat", className)
    let chatContent = className === "outgoing" ? `<p>${message}<p/>`: `<p>${message}<p/>`
    chatLi.innerHTML = chatContent
    return chatLi


}
let userMessage 
const generateResponse = (incomingChatLi) =>{
    const API_URL = ""
    const messageElement = incomingChatLi.querySelector("p")

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            
        })
        
    }
    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = data.choices[0].message.content
    }).catch((error) =>{
        messageElement.textContent = "oops something went wrong, try again"
        
        
    })
}
const handlechat =()=>{
    userMessage = ChatInput.value.trim()
    if(!userMessage) return

    chatbox.appendChild(createChatLi(userMessage, "outgoing"))
    setTimeout(() =>{
        const incomingChatLi = createChatLi("thinking...", "incoming")
        chatbox.appendChild(incomingChatLi)
        
        generateResponse(incomingChatLi)
    },600)


}
sendChatBtn.addEventListener("click", handlechat)