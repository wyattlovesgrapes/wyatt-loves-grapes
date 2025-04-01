export function loadingBar(){
    const progressBar = document.getElementById('progress-bar');
    const loadingBar = document.getElementById('loading-bar');

    let width = 0;
    let interval = setInterval(function() {
        if (width >= 100){
            clearInterval(interval);
            loadingBar.style.display = 'none';

        } else {
            width += 10;
            progressBar.style.width = width + '%';
        }
    }, 100);
}