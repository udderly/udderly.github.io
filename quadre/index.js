let loader = document.getElementById('loader');
window.onload = function() {
    if (SHOW_LOGO) {
        document.getElementById('loadlogo').classList.add('logoanimation');
        setTimeout(function() {
            loader.style.opacity = 0;
        }, 1000);
    } else {
        loader.style.opacity = 0;
    }
}

function goTo(name) {
    loader.style.opacity = 1;
    setTimeout(function() {
        window.location.href = './' + name;
    }, 1000);
}

const DISABLE_LOADER = false;

if (DISABLE_LOADER) {
    document.getElementById('loader').style.visibility = 'hidden';
}

const urlParams = new URLSearchParams(window.location.search);

if (urlParams.get('p')) {
    window.scroll({
        top: document.getElementById('q' + urlParams.get('p')).offsetTop,
        left: 0,
        behavior: 'smooth'
    });
}