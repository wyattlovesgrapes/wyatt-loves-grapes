import { loadAndDisplayContent } from "./explorer.js";
import { partyTime } from "../../widgets/tertiary/party-time/party-time.js";
import { stopTheParty } from "../../widgets/tertiary/party-time/party-time.js";

/*--icons------------------------*/
function createIcon(iconInfo) {
    var icon = document.createElement('div');
    icon.id = iconInfo.name;
    icon.className = 'icon';
    icon.innerHTML = `
        <img src="/assets/widget-icons/${iconInfo.name.toLowerCase()}.png" alt="${iconInfo.name}">
        <p class='icon-title'>${iconInfo.name}</p>
    `;
    return icon;
}

function createEmptyIcon() {
    var emptyIcon = document.createElement('div');
    emptyIcon.className = 'empty-space';

    return emptyIcon;
}

/*--click-events------------------------*/
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
                        console.log('party time case running');
                        partyTime();
                        break;

                    default:
                        loadAndDisplayContent(`/widgets/core/${iconId}/${iconId}.html`,`/widgets/core/${iconId}/${iconId}.js`,);
                        loadAndDisplayContent(`/widgets/tertiary/${iconId}/${iconId}.html`,`/widgets/tertiary/${iconId}/${iconId}.js`,);
                        break;
                }
            }
        });
    });
}

/*--render-----------------------*/
export function renderHomepage(iconArray) {
    var homepage = document.getElementById('homepage');
    homepage.innerHTML = '';
    
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