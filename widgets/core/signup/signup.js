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

document.getElementById("loginButton").addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password1 = document.getElementById("password1").value;
    if (!username || !password1) {
        alert("Missing username or password")
        return
    }
    login(username, password1)
})

document.getElementById("checkButton").addEventListener("click", () => {
    testProtectedRoute()
})

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

function login(username, password){
    fetch("https://grapevine.grape.wtf/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => console.log("Success:", data))
    .catch(error => console.error("Error:", error));
}

function testProtectedRoute() {
    fetch("https://grapevine.grape.wtf/protected", {
        method: "GET",  // Use GET as it's a route you want to read data from
        credentials: 'include',  // Ensures cookies (like session token) are sent with the request
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Not authenticated or session expired.");
        }
        return response.json();
    })
    .then(data => {
        console.log("Success:", data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
}
