// main.js

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM content loaded');

    // Attach click event listeners to all icons
    const icons = document.querySelectorAll('.icon');

    console.log(icons);
    icons.forEach(icon => {
        icon.addEventListener('click', function () {
            const iconId = icon.id;
            console.log('Clicked on icon with ID:', iconId);

            loadAndDisplayContent(`/blog-posts/post${iconId.replace('icon', '')}.html`);


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
