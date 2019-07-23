window.onload = function() {
    let loader = document.getElementById('loader');
    loader.classList.add('loadanimation');
    document.getElementById('loadlogo').classList.add('gan');
    setTimeout(function() {
        loader.style.display = 'none';
    }, 5000 * 0.9);
}

function goScrollTo(id) {
    window.scroll({
        top: document.getElementById(id).offsetTop - 85,
        behavior: 'smooth'
    });
}

const DISABLE_LOADER = false;

if (DISABLE_LOADER) {
    document.getElementById('loader').style.visibility = 'hidden';
}

