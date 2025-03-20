export function loadAndDisplayContent(contentUrl) {
    fetch(contentUrl)
        .then(response => response.text())
        .then(content => {

            // Create a temporary div to store the retrieved html content
            const pageContent = document.createElement('div');
            pageContent.innerHTML = content;
            console.log("Post Content: " + pageContent.innerHTML);

            // Select blog window post and title HTML elements from index.html
            const blogWindowPost = document.getElementById('blog-window-post');
            const blogWindowTitle = document.getElementById('blog-window-title');

            // Select post title and post content html elements from pageContent
            const contentTitleElement = pageContent.querySelector('.post-title');
            console.log("Post Title Element: " + contentTitleElement.innerHTML);
            const contentPostElement = pageContent.querySelector('.post');
            console.log("Contnet Post Element: " + contentPostElement.innerHTML);

            createBorder('blog-window-border');

            // If these exist
            if (contentTitleElement && contentPostElement) {
                // Assign the post title and content to the blog window HTML elements
                blogWindowTitle.innerHTML = contentTitleElement.innerHTML;
                blogWindowPost.innerHTML = contentPostElement.innerHTML;

               
                // Display the blog window and page dimmer
                document.getElementById('blog-window-border').style.display = 'block';
                document.getElementById('dimmer').style.display = 'block';
            
                // Ensure the new content is in the DOM before querying
                //document.body.appendChild(pageContent);
            
                // Select the content blocks
                const contentBlocks = pageContent.querySelectorAll('.content-block');
            
                console.log("Blocks Found:", contentBlocks.length);
                console.log(contentBlocks);
            
                contentBlocks.forEach((block, index) => {
                    console.log(index + " ID: " + block.id);
                    console.log("Block:", block);
                    createBorder(block.id);
                    // Create and append a corner image to each block
                    //const img = document.createElement('img');
                    //img.className = 't-left-corner';
                   // img.src = '/assets/graphics/t-left-corner.png';
                   // blogWindowPost.appendChild(img);
            
                    //console.log("Block after appending image:", block.innerHTML);
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
    document.getElementById('blog-window-border').style.display = 'none';
    document.getElementById('dimmer').style.display = 'none';
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
