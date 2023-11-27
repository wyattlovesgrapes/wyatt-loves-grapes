// main.js
import { desktopIconArray, mobileIconArray } from "./components/icon-config.js";
import { updateClock } from "./components/clock.js";
import { loadingBar } from "./components/loading-bar.js";
import { renderIcons } from "./components/homepage.js";


document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM content loaded');

    /* Call Functions */
    loadingBar(); //Display loading bar
    updateClock(); //Start clock cycle

    // Default icon render
    if (window.innerWidth <= 768) {
        renderIcons(mobileIconArray);
    } else {
        renderIcons(desktopIconArray);
    }

    // Attach event listener for window resize
    window.addEventListener('resize', function () {
        if (window.innerWidth <= 768) {
            renderIcons(mobileIconArray);
        } else {
            renderIcons(desktopIconArray);
        }
    });


});




