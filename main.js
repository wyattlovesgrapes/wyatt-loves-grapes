import { desktopIconArray, mobileIconArray } from "./widgets/widget-icon-config.js";
import { updateClock } from "./components/core/clock.js";
import { renderHomepage } from "./components/core/homepage.js";

/*--event-loop------------------------*/
document.addEventListener('DOMContentLoaded', function () {

    /*--clock------------------------*/
    updateClock();

    /*--render-homepage------------------------*/
    if (window.innerWidth <= 768) {
        renderHomepage(mobileIconArray);
    } else {
        renderHomepage(desktopIconArray);
    }

    /*--resize------------------------*/
    window.addEventListener('resize', function () {
        if (window.innerWidth <= 768) {
            renderHomepage(mobileIconArray);
        } else {
            renderHomepage(desktopIconArray);
        }
    });

});




