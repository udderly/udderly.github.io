window.onload = function() {
    let loader = document.getElementById('loader');
    loader.classList.add('loadanimation');
    document.getElementById('loadlogo').classList.add('gan');
    setTimeout(function() {
        loader.style.display = 'none';
    }, 5000 * 0.9);
}