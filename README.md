index.html - root html file

    <header> - contains version number and global page items like <div ="dimmer">

    <div id="hompage"> - main div which renders the homepage using main.js and homepage.js

    <div id="start-menu"> - creates a traditional desktop start menu in the lower left hand corner of the screen using start.js

    <div id="blog-window-border> - displays blog content from blog.js when a icon is clicked

    <div id="party-container> - drops the disco ball and gets the party started

    <footer> - contains the clock and start button


main.js - core functions

    - starts menu clock from clock.js
    - renders icon based on mobile or desktop window size using renderIcons(mobileIconArray/desktopIconArray)
    - attaches an event listener to re-render the icons if the window is resized

homepage.js - renders homepage view

    - creates icons based on icon config using createIcon()
    - creates empty placeholder icons for blank spaces using createEmptyIcon()
    - renders icons based on the passed config array for desktop or mobile using renderIcons(iconInfo)
    - adds click events to icons based on iconId to either render blog posts or complete custom actions such as partyTime()

blog.js - pulls html content from blog-posts directory and renders it within a overlay window

    loadAndDisplayContnet()

        - fetches html content from contentUrl and returns response as text
        - sets the post title and content accordingly within the blog window if content exists
        - displays the blog window by setting its css display style to block, applys this window to the DOM
        - query this content for all divs with id content-block, display and style content blocks based on config parameters

    closeContentWindow()

        - closes content window and hides dimmer by changing css display property to none

    - adds event listener for close button on blog window

icon-config.js - a config file which holds arrays for different screen views containing an icon's name, position, and a boolean value indicating whether the position is empty or not

start.js - creates a traditional desktop style start menu

clock.js - creates menu clock based off current computer clock

loading-bar.js - displays a retro loading screen
creates a traditional desktop start menu in the lower left hand corner of the screen using start.js
partyTime.js - self explanitory

