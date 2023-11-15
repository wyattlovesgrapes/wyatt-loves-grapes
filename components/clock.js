export function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    if (hours >= 13) {
        hours = hours - 12;
    }

    document.getElementById('clock').innerHTML =
        hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

    setTimeout(updateClock, 1000); // Update every second
}