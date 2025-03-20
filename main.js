import { desktopIconArray, mobileIconArray } from "./components/icon-config.js";
import { updateClock } from "./components/core/clock.js";
import { renderIcons } from "./components/core/homepage.js";

/*--event-loop------------------------*/
document.addEventListener('DOMContentLoaded', function () {

    /*--clock------------------------*/
    updateClock();

    /*--render-icons------------------------*/
    if (window.innerWidth <= 768) {
        renderIcons(mobileIconArray);
    } else {
        renderIcons(desktopIconArray);
    }

    /*--resize------------------------*/
    window.addEventListener('resize', function () {
        if (window.innerWidth <= 768) {
            renderIcons(mobileIconArray);
        } else {
            renderIcons(desktopIconArray);
        }
    });


});




