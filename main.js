// main.js
import { desktopIconArray } from "./components/icon-config.js";
import { updateClock } from "./components/clock.js";
import { loadingBar } from "./components/loading-bar.js";
import { loadAndDisplayContent, closeContentWindow } from "./components/blog.js";
import { renderIcons } from "./components/homepage.js";

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM content loaded');

    /* Call Functions */
    loadingBar(); //Display loading bar
    renderIcons(desktopIconArray); //Render initial icon layout
    updateClock(); //Start clock cycle

    /* Event Listeners */
    // Attach click event listeners to all icons
    const icons = document.querySelectorAll('.icon');
    console.log(icons);
    icons.forEach(icon => {
        icon.addEventListener('click', function () {
            const iconId = icon.id;
            console.log('Clicked on icon with ID:', iconId);

            loadAndDisplayContent(`/blog-posts/${icon.id}.html`);
        });
    });

    // Attach click event for blog window x button
    const closeBlogPostButton = document.getElementById('close-blog-post');
    closeBlogPostButton.addEventListener('click', function () {
        closeContentWindow();

    });
});




