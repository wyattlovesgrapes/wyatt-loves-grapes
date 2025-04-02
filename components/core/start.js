document.addEventListener('DOMContentLoaded', function () {
    // console.log('start menu loaded');
    const startButton = document.getElementById('start-button');
    const startButtonPressed = document.getElementById('start-button-pressed');
    const startMenu = document.getElementById('start-menu');
    let menuState = false;
    
    startButton.addEventListener('click', function(){

       
        console.log('start menu open');
        startMenu.style.display = 'block';
        startButtonPressed.style.display = 'block'
        startButton.style.display = 'none';
        //menuState = true;

    })

    startButtonPressed.addEventListener('click', function(){
        console.log('start menu closed');
        startMenu.style.display = 'none';
        startButtonPressed.style.display = 'none'
        startButton.style.display = 'block';
        //menuState = false;
    })
    document.getElementById("logoutButton").addEventListener("click", () => {
        logout()
    })
})

function logout() {
    fetch("https://grapevine.grape.wtf/logout", {
        method: "GET",  // Use GET as it's a route you want to read data from
        credentials: 'include',  // Ensures cookies (like session token) are sent with the request
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then(response => response.json())
    .then(data => console.log("Success:", data))
    .catch(error => console.error("Error:", error));
}