let username = document.querySelector("#username");
let password = document.querySelector("#password");
let submitBtn = document.querySelector("button");
let usernameMsg = document.querySelector(".username .msg");
let passwordMsg = document.querySelector(".password .msg");


function login(event) {
   event.preventDefault();
   usernameValue = username.value;
   passwordValue = password.value;
   let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
   let ifSendData = true;

   if (
    !(regex.test(usernameValue))
   ) {
     usernameMsg.innerText = "please enter a valid email";
     ifSendData = false;
   }
   if (passwordValue.length <= 4) {
       passwordMsg.innerText = "your password is too short. it shoud contain at least 5 characters"
       ifSendData = false;
   }

   if (ifSendData) {
    let body = JSON.stringify({
        username: usernameValue,
        password: passwordValue
    })
    
    let headers = {"Content-type": "application/json"}
    

       fetch('https://jsonplaceholder.typicode.com/posts', {
         method: "POST",
         body: body,
         headers: headers,
       })
         .then((response) => {
             if (response.ok) {
                 let result = document.querySelector(".final-msg");
                 result.innerHTML = "you are registerd successfully";
                 passwordMsg.innerText = "";
                 usernameMsg.innerText = ""
             }
         })

   }
}


submitBtn.addEventListener("click", login)

