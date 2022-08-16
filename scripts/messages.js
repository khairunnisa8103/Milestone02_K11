const CHATS_DATA = {
    "johnny": {
        "name": "John Doe",
        "messages":
        [
            {"is_author_self": true, "content": "Halo dunia!"},
            {"is_author_self": false, "content": "Halo jugaa!"}
        ],
        "unread_count": 1,
        "profile_picture": ""
    },
    "jennie": {
        "name": "Jane Doe",
        "messages": 
        [
            {"is_author_self": false, "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod sem non ligula maximus,"},
            {"is_author_self": false, "content": "quis lobortis augue vestibulum."},
            {"is_author_self": true, "content": "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."},
            {"is_author_self": false, "content": "Nam ultrices consequat urna vitae rutrum. Interdum et malesuada fames ac ante ipsum primis in faucibus."},
            {"is_author_self": true, "content": "Fusce purus urna, commodo vitae quam vitae, faucibus gravida justo."},
            {"is_author_self": false, "content": "Duis condimentum sapien eget turpis blandit, quis semper diam elementum. Aenean id venenatis nulla. Curabitur vestibulum nulla quis libero tincidunt, a aliquet ex viverra."},
            {"is_author_self": false, "content": "Nullam eu porttitor mi. Nunc mollis mattis pretium. Vivamus volutpat justo sit amet tortor lobortis euismod. Donec vel condimentum magna, id tristique tellus. Vestibulum velit augue, sollicitudin sed imperdiet ac, volutpat vitae ante. Fusce velit orci, mattis tristique ornare vel, consequat ac mi. Sed vitae ullamcorper nisi. Sed ac magna ut lectus accumsan fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."},
        ],
        "unread_count": 2,
        "profile_picture": ""
    }
}

const CHATS_USERNAME = ["johnny", "jennie"]

const chats_thumbnail = document.getElementsByClassName("message");
const message_list = document.getElementById("message-list");
const message_instances = document.getElementById("message-instances")
const inactive_messsage = document.getElementById("inactive-message")
const active_messsage = document.getElementById("active-message")
const message_ids = document.getElementById("message-contact-id").getElementsByTagName("span");
const message_name = message_ids[0];
const message_username = message_ids[1];
const send_message_form = document.getElementById("message-response").getElementsByTagName("form")[0];

{/* <div id="message-list">
        <div class="message flex-container container" username="johnny">
            <span class="profile-icon"></span>
            <div class="flex flex-container flex-column">
                <span class="display-name">John Doe</span>
                <span class="display-chat">lorem ipsum dolor sit amet</span>
            </div>
            <div class="unread-content-count"><span class="center">1</span></div>
        </div>
    </div> */}

const generate_chat_instance = (data, username) => {
    const messages = data["messages"];
    const last_message = messages[messages.length-1]["content"];

    const chat_thumbnail = document.createElement("div");
    const profile_icon = document.createElement("span");
    const chat_id_container = document.createElement("div");
    const display_name = document.createElement("span");
    const display_last_message = document.createElement("span");
    const unread_count_container = document.createElement("div");
    const unread_count = document.createElement("span");

    chat_thumbnail.classList.add("message", "flex-container", "container")
    chat_thumbnail.setAttribute("username", username);

    profile_icon.classList.add("profile-icon");

    chat_id_container.classList.add("flex", "flex-container", "flex-column");

    display_name.classList.add("display-name");
    display_name.innerText = data["name"];

    display_last_message.classList.add("display-chat");
    if(last_message.length > 26){
        display_last_message.innerText = last_message.substring(0, 26) + "...";
    }else{
        display_last_message.innerText = last_message;
    }

    chat_thumbnail.appendChild(profile_icon);
    chat_id_container.appendChild(display_name);
    chat_id_container.appendChild(display_last_message);
    chat_thumbnail.appendChild(chat_id_container);

    if(data["unread_count"]>0){
        unread_count_container.classList.add("unread-content-count");
    
        unread_count.classList.add("center");
        unread_count.innerText = data["unread_count"]

        unread_count_container.appendChild(unread_count);
        chat_thumbnail.appendChild(unread_count_container);
    }

    return chat_thumbnail;
}

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
    
    CHATS_DATA[active_username]["unread_count"] = 0;

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

// for(const chat_thumbnail of chats_thumbnail){
//     chat_thumbnail.addEventListener("click", ()=>{
//         activate_chat(chat_thumbnail)
//     })
// }

document.addEventListener("DOMContentLoaded", (event) => {
    for(const chat_username of CHATS_USERNAME){
        const chat_instance = generate_chat_instance(CHATS_DATA[chat_username], chat_username);

        chat_instance.addEventListener("click", ()=>{
            activate_chat(chat_instance)
        })

        message_list.appendChild(chat_instance);
    }
})