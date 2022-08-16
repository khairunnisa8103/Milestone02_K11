const CHATS_DATA = {
    "johnny": {
        "name": "John Doe",
        "messages":
        [
            {"is_author_self": false, "content": "Halo dunia!"},
            {"is_author_self": true, "content": "Halo jugaa!"}
        ],
        "unread_count": 3,
        "profile_picture": ""
    }
}

const chats_thumbnail = document.getElementsByClassName("message");
const message_instances = document.getElementById("message-instances")
const inactive_messsage = document.getElementById("inactive-message")
const active_messsage = document.getElementById("active-message")
const message_ids = document.getElementById("message-contact-id").getElementsByTagName("span");
const message_name = message_ids[0];
const message_username = message_ids[1];
const send_message_form = document.getElementById("message-response").getElementsByTagName("form")[0];

const generate_message_instance = (data) => {
    const container = document.createElement("div");
    const message = document.createElement("div");
    const message_content = document.createElement("p");

    container.classList.add("message-instance-container", "flex-container");
    message.classList.add("message-instance", "flex-container")

    message_content.innerText = data["content"];
    message.appendChild(message_content);

    if(data["is_author_self"]){
        container.classList.add("message-instance-container-user");
        message.classList.add("message-instance-user");
    }
    else{
        const profile_icon = document.createElement("span");
        profile_icon.classList.add("profile-icon");

        container.appendChild(profile_icon);
    }
    container.appendChild(message);

    return container;
}

const clear_message = () => {
    message_instances.innerHTML = "";
    message_name.innerText = "";
    message_username.innerText = "";
    
    inactive_messsage.classList.remove("void");
    active_messsage.classList.add("void");
    
    for(const chat_thumbnail of chats_thumbnail){
        chat_thumbnail.classList.remove("message-active");
    }
}

const activate_chat = (chat) => {
    clear_message();
    chat.classList.add("message-active");
    chat.getElementsByClassName("unread-content-count")[0].hidden = true;

    const active_username = chat.getAttribute("username");
    const active_instance = CHATS_DATA[active_username];
    const active_name = active_instance["name"];
    const active_message_instances = active_instance["messages"];
    const last_message = chat.getElementsByClassName("display-chat")[0];

    message_username.innerText = active_username;
    message_name.innerText = active_name;

    for(const message of active_message_instances){
        const message_instance = generate_message_instance(message);
        message_instances.appendChild(message_instance);
    };
    
    inactive_messsage.classList.add("void");
    active_messsage.classList.remove("void");

    send_message_form.addEventListener("submit", (event)=>{
        const input_value = send_message_form.getElementsByTagName("input")[0].value;
        const data = {
            "is_author_self": true,
            "content": input_value
        };
        const message_instance = generate_message_instance(data);
        
        CHATS_DATA[active_username]["messages"].push(data);
        message_instances.appendChild(message_instance);

        if(input_value.length > 26){
            last_message.innerText = input_value.substring(0, 26) + "...";
        }else{
            last_message.innerText = input_value;
        }

        send_message_form.reset();
        event.preventDefault();
    });
}

for(const chat_thumbnail of chats_thumbnail){
    chat_thumbnail.addEventListener("click", ()=>{
        activate_chat(chat_thumbnail)
    })
}

