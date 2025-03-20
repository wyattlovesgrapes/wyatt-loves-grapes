export function loadAndDisplayContent(contentUrl) {
    fetch(contentUrl)
        .then(response => response.text())
        .then(content => {

            // create a temporary div to store the fetched html content
            const pageContent = document.createElement('div');
            pageContent.innerHTML = content;
            console.log("Block Content: " + pageContent.innerHTML);

            // select explorer title and content
            const explorerTitle = document.getElementById('explorer-title');
            const explorerContent = document.getElementById('explorer-content');

            // select post title and content
            const widgetTitle = pageContent.querySelector('.widget-title');
            console.log("Widget Title: " + widgetTitle.innerHTML);
            const widgetContent = pageContent.querySelector('.widget-content');
            console.log("Widget Content: " + widgetContent.innerHTML);

            createBorder('explorer');

            // If these exist
            if (widgetTitle && widgetContent) {
                // Assign the post title and content to the blog window HTML elements
                explorerTitle.innerHTML = widgetTitle.innerHTML;
                explorerContent.innerHTML = widgetContent.innerHTML;

               
                // display the explorer and page dimmer
                document.getElementById('explorer').style.display = 'block';
                document.getElementById('dimmer').style.display = 'block';
            
                // display the content blocks
                const contentBlocks = pageContent.querySelectorAll('.content-block');
            
                console.log("Blocks Found:", contentBlocks.length);
                console.log(contentBlocks);
            
                contentBlocks.forEach((block, index) => {
                    console.log(index + " ID: " + block.id);
                    console.log("Block:", block);
                    createBorder(block.id);
                });

            } else {
                console.error("Post title or content element not found.");
            }
            
        })
        .catch(error => {
            console.error("Error fetching content:", error);
        });
}

export function closeContentWindow() {
    console.log("closed content window");
    document.getElementById('explorer').style.display = 'none';
    document.getElementById('dimmer').style.display = 'none';
    cleanupBorder('explorer');
}

document.addEventListener('DOMContentLoaded', function () {
    // console.log('blog close button added');

    // Attach click event for blog window close button
    const closeBlogPostButton = document.getElementById('close-blog-post');
    closeBlogPostButton.addEventListener('click', function () {
        closeContentWindow();
    });
});

function createBorder(elementID) {

    console.log('creating border');
     // Creates the master window border
     const border = document.getElementById(elementID)
     for (var i=0; i <= 3; i++){
         const img = document.createElement('img');
         img.className = 'corner-' + i;
         img.src = '/assets/graphics/corner-' + i + '.png';
         border.appendChild(img);  
     }

     for (var i=0; i <= 3; i++){
        const img = document.createElement('img');
        img.className = 'line-' + i;
        img.src = '/assets/graphics/line.jpg';
        border.appendChild(img);  
    }
}

function cleanupBorder(elementID) {
    console.log('cleaning up border');
    const border = document.getElementById(elementID);
    if (border.children) {
        while (border.children.length > 2) {
            // remove all children except the first two (which are the title and content)
            border.removeChild(border.lastChild);
        }
    }
}
