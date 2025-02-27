import { loadAndDisplayContent } from "./blog.js";
import { partyTime } from "./party-time.js";
import { stopTheParty } from "./party-time.js";


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

function createEmptyIcon() {
    var emptyIcon = document.createElement('div');
    emptyIcon.className = 'empty-space';

    return emptyIcon;
}

export function renderIcons(iconArray) {
    var homepage = document.getElementById('homepage');
    homepage.innerHTML = ''; // Clear existing icons before rendering
    
    iconArray.forEach(function (iconInfo) {
        if (iconInfo.empty === false) {
            var icon = createIcon(iconInfo);
        } else {
            var icon = createEmptyIcon();
        }
        homepage.appendChild(icon);
    });

    addClickEvents();
}

function addClickEvents() {
    // Attach click event listeners to all icon images
    window.addEventListener('click', stopTheParty);
    const icons = document.querySelectorAll('.icon img');

    icons.forEach(img => {
        img.addEventListener('click', function () {
            // Get the parent icon element
            const icon = img.closest('.icon');
            
            if (icon) {
                // Get the icon id
                const iconId = icon.id;
                console.log('Clicked on icon with ID:', iconId);

                switch (iconId) {
                    case 'party-time':
                        console.log('the party has been started');
                        partyTime();
                        break;

                    default:
                        loadAndDisplayContent(`/blog-posts/${iconId}.html`);
                        break;
                }
            }
        });
    });
}

//const homepage = document.getElementById('homepage');
//homepage.addEventListener('click', stopTheParty, {once: true});