document.getElementById("signupButton").addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    console.log("checking passwords")

    // check if any pass is missing
    if (!password1 || !password2) {
        alert("Missing pass or confirmation pass. ")
        return
    }
    // check if passwords match
    if (password1 !== password2) {
        alert("Passwords do not match.");
        return;
    }
    console.log("signing up user")
    signUp(username, password1);
});


function signUp(username, password) {
    fetch("https://grapevine.grape.wtf/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => console.log("Success:", data))
    .catch(error => console.error("Error:", error));
}
