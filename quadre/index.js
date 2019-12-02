let loader = document.getElementById('loader');
window.onload = function() {
    if (SHOW_LOGO) {
        document.getElementById('loadlogo').classList.add('logoanimation');
        setTimeout(function() {
            loader.style.opacity = 0;
        }, 2000);
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
} else {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

function updateTop() {
    if (document.getElementById('top')) {
        document.getElementById('top').style.marginTop = (document.getElementById('nav').clientHeight + 10) + 'px';
    }
}
updateTop();
window.onresize = function() {
    updateTop();
}