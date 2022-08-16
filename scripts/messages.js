const chats_thumbnail = document.getElementsByClassName("message");
const message_instances = document.getElementById("message-instances")

const clear_message = () => {
    const message_contact_id = document.getElementById("message-contact-id");
    message_instances.innerHTML = "";

    for(const chat_thumbnail of chats_thumbnail){
        chat_thumbnail.classList.remove("message-active");
    }
}

const activate_chat = (chat) => {
    clear_message();
    console.log(chat)
    chat.classList.add("message-active");
}

console.log(chats_thumbnail)

for(const chat_thumbnail of chats_thumbnail){
    chat_thumbnail.addEventListener("click", ()=>{
        activate_chat(chat_thumbnail)
    })
}