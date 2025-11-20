function signin() {
 let username = document.getElementById("email").value;
 let password = document.getElementById("password").value;
 let error = document.getElementById("error");




 if (username === "admin" && password === "12345") {
   alert("Login successful!");
   window.location.href = "home.html";
 } else {
   error.textContent = "Invalid username or password!";
 }
}




