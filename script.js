
let messages = [];

        document.getElementById("message-input").addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                getMessage();
                event.preventDefault();
            }
        });

        function getMessage() {
            const messageInput = document.getElementById("message-input");
            messages.push(messageInput.value);
            messageInput.value = "";
            displayMessages();
        }

        function displayMessages() {
            const outputElement = document.getElementById("message-output");
            outputElement.innerHTML = messages.map((message, index) => 
                `<div>${message} <span class="delete-btn" onclick="deleteMessage(${index})">Delete</span></div>`
            ).join("");
        }

        function deleteMessage(index) {
            messages.splice(index, 1);
            // Is line me index woh position hai jahan se hum element ko remove karna chahte hain. 1 ka matlab hai ki sirf ek element ko us position se hataana hai. Matlab ki index ke position par jo bhi message hai, usko remove karna hai, aur 1 batata hai ki bas ek hi message
            displayMessages();
        }

