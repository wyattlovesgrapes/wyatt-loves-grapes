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

    iconArray.forEach(function (iconInfo) {

        if (iconInfo.empty === false) {
            var icon = createIcon(iconInfo);
        } else {
            var icon = createEmptyIcon();
        }
        homepage.appendChild(icon);
    });
}

/*
function removeIcon(icon) {
    var homepage = document.getElementById('homepage');

     // Replace 'childIdToRemove' with the actual id of the child you want to remove
    var childToRemove = document.getElementById(icon);

    if (childToRemove) {
        homepage.removeChild(childToRemove);
    }
}
*/