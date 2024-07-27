export function loadAndDisplayContent(contentUrl) {
    fetch(contentUrl)
    .then(response => response.text())
    .then(content => {
        // Store the retrieved content in a temporary div
        //console.log("Fetched content:", content);
        const postContent = document.createElement('div');
        postContent.innerHTML = content;

        // Select blog window post and title html elements
        const blogWindowPost = document.getElementById('blog-window-post');
        const blogWindowTitle = document.getElementById('blog-window-title');

        // Select post content post title and post html content elements
        const postTitleElement = postContent.querySelector('#post-title');
        const postContentElement = postContent.querySelector('#post');

        if (postTitleElement && postContentElement) {
            // Assign the post title and content to the blog window html elements
            blogWindowTitle.innerHTML = postTitleElement.innerHTML;
            blogWindowPost.innerHTML = postContentElement.innerHTML;

            // Display the blog window
            document.getElementById('blog-window-border').style.display = 'block';

            // Display the page dimmer behind the blog window
            document.getElementById('dimmer').style.display ='block';

            // Ensure the new content is in the DOM before querying
            document.body.appendChild(postContent);

            // Select the content blocks
            const contentBlocks = postContent.querySelectorAll('.content-block');

            console.log("Blocks Found:", contentBlocks.length);

            contentBlocks.forEach((block, index) => {
                console.log(index + " ID: " + block.id);
                // Create a corner div
                const img1 = document.createElement('img');
                img1.id = 'cornerA';
                //console.log(img1.id);
                img1.src = '/assets/graphics/t-left-corner.png';
                block.appendChild(img1);
                console.log(block.innerHTML);
                // Append it to the img
            });
        } else {
            console.error("Post title or content element not found.");
        }
    })
    .catch(error => {
        console.error("Error fetching content:", error);
    });
}

export function closeContentWindow(){
    console.log("closed content window");
    document.getElementById('blog-window-border').style.display = 'none';
    document.getElementById('dimmer').style.display ='none';

}

document.addEventListener('DOMContentLoaded', function () {
    console.log('blog close button added');
    // Attach click event for blog window x button
    const closeBlogPostButton = document.getElementById('close-blog-post');
    closeBlogPostButton.addEventListener('click', function () {
        closeContentWindow();

    });
});