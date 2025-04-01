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
                        loadWidgetIfExists(iconId);
                        break;
                }
            }
        });
    });
}

// helper function to check if files exist before loading them
// need to update this to be more graceful, probably should store
// widget types in the widget-icon-config to avoid a lot of whats below
// currently throwing errors for aborted cases
function loadWidgetIfExists(iconId) {

    const htmlPathCore = `/widgets/core/${iconId}/${iconId}.html`;
    const jsPathCore = `/widgets/core/${iconId}/${iconId}.js`;

    const htmlPathTertiary = `/widgets/tertiary/${iconId}/${iconId}.html`;
    const jsPathTertiary = `/widgets/tertiary/${iconId}/${iconId}.js`;

    //console.log(htmlPathCore,jsPathCore,htmlPathTertiary,jsPathTertiary)
    let htmlCore = false
    let jsCore = false
    let htmlTer = false
    let jsTer = false

  
    //console.log(htmlCore,jsCore,htmlTer,jsTer)

    Promise.all([
        fileExists(htmlPathCore),
        fileExists(jsPathCore),
        fileExists(htmlPathTertiary),
        fileExists(jsPathTertiary)
    ]).then(([htmlCore, jsCore, htmlTer, jsTer]) => {
        //console.log(htmlCore, jsCore, htmlTer, jsTer);

        if (htmlCore && jsCore) {
            loadAndDisplayContent(htmlPathCore, jsPathCore);
        } else if (!htmlCore && jsCore) {
            loadAndDisplayContent(null, jsPathCore);
        } else if (htmlCore && !jsCore) {
            loadAndDisplayContent(htmlPathCore, null);
        } else if (htmlTer && jsTer) {
            loadAndDisplayContent(htmlPathTertiary, jsPathTertiary);
        } else if (!htmlTer && jsTer) {
            loadAndDisplayContent(null, jsPathTertiary);
        } else if (htmlTer && !jsTer) {
            loadAndDisplayContent(htmlPathTertiary, null);
        } else {
            console.error(`Widget named ${iconId} is missing code files.`);
        }
    });
}

function fileExists(filePath) {
    return fetch(filePath)
        .then(response => response.ok)
        .catch(() => false); 
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