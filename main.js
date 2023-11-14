// main.js
var desktopIconArray = [
    { name: 'home', position: 1, visible: true, empty: false },
    { name: 'notes', position: 2, visible: true, empty: false },
    { name: 'Icon3', position: 3, visible: true, empty: true },
    { name: 'crown', position: 4, visible: true, empty: false },
    { name: 'snacks', position: 5, visible: true, empty: false },
    { name: 'photos', position: 6, visible: true, empty: false },
    { name: 'likes', position: 7, visible: true, empty: false },
    { name: 'micro-machines', position: 8, visible: true, empty: false },
    { name: 'Icon9', position: 9, visible: true, empty: true },
    { name: 'Icon10', position: 10, visible: true, empty: true },
    { name: 'Icon11', position: 11, visible: true, empty: true },
    { name: 'Icon12', position: 12, visible: true, empty: true },
    { name: 'Icon13', position: 13, visible: true, empty: true },
    { name: 'Icon14', position: 14, visible: true, empty: true },
    { name: 'Icon15', position: 15, visible: true, empty: true },
    { name: 'Icon16', position: 16, visible: true, empty: true },
    { name: 'Icon17', position: 17, visible: true, empty: true },
    { name: 'Icon18', position: 18, visible: true, empty: true },
    { name: 'Icon19', position: 19, visible: true, empty: true },
    { name: 'Icon20', position: 20, visible: true, empty: true },
    { name: 'Icon21', position: 21, visible: true, empty: true },
    { name: 'Icon22', position: 22, visible: true, empty: true },
    { name: 'Icon23', position: 23, visible: true, empty: true },
    { name: 'Icon24', position: 24, visible: true, empty: true },
    { name: 'Icon25', position: 25, visible: true, empty: true },
    { name: 'Icon26', position: 26, visible: true, empty: true },
    { name: 'Icon27', position: 27, visible: true, empty: true },
    { name: 'Icon28', position: 28, visible: true, empty: true },
];

renderIcons(desktopIconArray);
updateClock();

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM content loaded');
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

    const closeBlogPostButton = document.getElementById('close-blog-post');
    closeBlogPostButton.addEventListener('click', function () {
        closeContentWindow();

    });
});

function loadAndDisplayContent(contentUrl) {
    fetch(contentUrl)
        .then(response => response.text())
        .then(content => {
            // Display the loaded content in a container
            console.log(content);
            const postContent = document.createElement('div');
            postContent.innerHTML = content;
            const blogWindowPost = document.getElementById('blog-window-post');
            const blogWindow = document.getElementById('blog-window');
            const blogWindowTitle = document.getElementById('blog-window-title');

            console.log(postContent.querySelector('#post-title'));
            const postTitleElement = postContent.querySelector('#post-title');
            postContentElement = postContent.querySelector('#post');


            blogWindowTitle.innerHTML = postTitleElement.innerHTML;
            blogWindowPost.innerHTML = postContentElement.innerHTML;
            //blogWindowPost.style.display = 'block'; // or 'flex', 'grid', etc.
            blogWindow.style.display = 'block';
            //blogWindowTitle.style.display ='block';



            // You can add additional logic or styles here if needed
        })
        .catch(error => console.error('Error loading content:', error));
}

function closeContentWindow(){
    console.log("closed content window");
    const blogWindow  = document.getElementById('blog-window');
    blogWindow.style.display = 'none';
}




//Icon Functions
function addEmptyIcon() {
    var emptyIcon = document.createElement('div');
    emptyIcon.className = 'empty-space';

    return emptyIcon;
}

function removeIcon(icon) {
    var homepage = document.getElementById('homepage');

     // Replace 'childIdToRemove' with the actual id of the child you want to remove
    var childToRemove = document.getElementById(icon);

    if (childToRemove) {
        homepage.removeChild(childToRemove);
    }
}

function createIcon(iconInfo) {
    var icon = document.createElement('div');
    icon.id = iconInfo.name;
    icon.className = 'icon';
    icon.innerHTML = `
        <img src="/assets/icons/${iconInfo.name.toLowerCase()}.png" alt="${iconInfo.name}">
        <p class='icon-title'>${iconInfo.name}</p>
    `;
    return icon;
}

function renderIcons(iconArray) {
    var homepage = document.getElementById('homepage');

    iconArray.forEach(function (iconInfo) {

        if (iconInfo.empty === false) {
            var icon = createIcon(iconInfo);
        } else {
            var icon = addEmptyIcon();
        }
        homepage.appendChild(icon);
    });
}


function updateClock() {
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

