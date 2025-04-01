export function loadAndDisplayContent(contentUrl, scriptUrl) {
    fetch(contentUrl)
        .then(response => response.text())
        .then(content => {
            // create a temporary div to store the fetched html content
            const pageContent = document.createElement('div');
            pageContent.innerHTML = content;

            // select explorer title and content
            const explorerTitle = document.getElementById('explorer-title');
            const explorerContent = document.getElementById('explorer-content');

            // select post title and content
            const widgetTitle = pageContent.querySelector('.widget-title');
            const widgetContent = pageContent.querySelector('.widget-content');
            
            // create main border
            createBorder('explorer');

            // if these exist
            if (widgetTitle && widgetContent) {
                // assign the post title and content to the explorer window HTML elements
                explorerTitle.innerHTML = widgetTitle.innerHTML;
                explorerContent.innerHTML = widgetContent.innerHTML;

                // display the explorer and page dimmer
                document.getElementById('explorer').style.display = 'block';
                document.getElementById('dimmer').style.display = 'block';
                
                // load the widget script
                if (scriptUrl) {
                    // Check if the script is already loaded
                    if (!isScriptLoaded(scriptUrl)) {
                        const script = document.createElement("script");
                        script.src = scriptUrl;
                        script.onload = () => console.log(`Loaded script: ${scriptUrl}`);
                        script.onerror = () => console.error(`Failed to load script: ${scriptUrl}`);
                        document.getElementById('scripts').appendChild(script);
                    } else {
                        console.log(`Script already loaded: ${scriptUrl}`);
                    }
                }

                // get content blocks if they exist and display them
                const contentBlocks = pageContent.querySelectorAll('.content-block');
                //console.log("Blocks Found:", contentBlocks.length);
                //console.log(contentBlocks);
                contentBlocks.forEach((block, index) => {
                    //console.log(index + " ID: " + block.id);
                    //console.log("Block:", block);
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
    document.getElementById('explorer').style.display = 'none';
    document.getElementById('dimmer').style.display = 'none';
    cleanupExplorer();
}

// Function to check if the script is already loaded
function isScriptLoaded(scriptUrl) {
    return document.querySelector(`script[src="${scriptUrl}"]`) !== null;
}

// pixel window border magic
function createBorder(elementID) {
     const border = document.getElementById(elementID)
     for (var i=0; i <= 3; i++){
         const img = document.createElement('img');
         img.id = 'corner-' + i;
         img.className = 'border'
         img.src = '/assets/graphics/corner-' + i + '.png';
         border.appendChild(img);  
     }
     
     for (var i=0; i <= 3; i++){
        const img = document.createElement('img');
        img.id = 'line-' + i;
        img.src = '/assets/graphics/line.jpg';
        img.className = 'border'
        border.appendChild(img);  
    }
        
}

function cleanupBorder(elementID) {
    const target = document.getElementById(elementID);
    const borders = target.querySelectorAll('.border');
    borders.forEach(border => {
        border.remove();
    });
}

function cleanupExplorer() {
    // clean content
    const cleanContent = document.getElementById('explorer-content')
    cleanContent.innerHTML = '';
    // clean scripts
    const cleanScript = document.getElementById('scripts')
    cleanScript.innerHTML = '';
    // clean border
    cleanupBorder('explorer')
}

document.addEventListener('DOMContentLoaded', function () {
    // Attach click event for blog window close button
    const closeBlogPostButton = document.getElementById('close-blog-post');
    closeBlogPostButton.addEventListener('click', function () {
        closeContentWindow();
        
    });
});
