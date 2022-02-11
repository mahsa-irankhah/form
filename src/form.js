let username = document.querySelector("#username");
let password = document.querySelector("#password");
let submitBtn = document.querySelector("button");
let usernameMsg = document.querySelector(".username .msg");
let passwordMsg = document.querySelector(".password .msg");


function login(event) {
   event.preventDefault();
   usernameValue = username.value;
   passwordValue = password.value;
   let ifSendData = true;

   if (
     usernameValue.length === 0 ||
     usernameValue.indexOf("@") === -1 ||
     usernameValue.indexOf(".") === -1
   ) {
     usernameMsg.innerHTML = "please enter a valid email";
     ifSendData = false;
   }
   if (passwordValue.length <= 4) {
       passwordMsg.innerHTML = "your password is too short. it shoud contain at least 5 characters"
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
                 result.innerHTML = "you are registerd successfully"
             }
         })

   }
}


submitBtn.addEventListener("click", login)

