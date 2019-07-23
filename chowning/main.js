let inview = [false, false, false];
let dropped = false;

document.addEventListener('scroll', function() {
    update();
});

update();

function update() {
    var percent = document.documentElement.scrollTop / document.documentElement.scrollHeight;
    document.getElementById('background').style.marginTop = (2500 * percent) + 'px';
    
    comein(0, 'sec-bel');
    comein(1, 'sec-lessons');
    comein(2, 'sec-contact');
}

function comein(index, id) {
    let card = document.getElementById(id);
    if (card.getBoundingClientRect().top > window.innerHeight) {
        inview[index] = false;
        card.style.opacity = 0;
        card.style.transform = 'translate(0, 10%)';
    } else if (!inview[index]) {
        card.style.opacity = 1;
        card.style.transform = '';
        inview[index] = true;
    }
}

function moveto(id) {
    let header = document.getElementById(id);
    window.scrollTo({
        top: header.offsetTop - document.getElementById('nav').offsetHeight,
        left: 0,
        behavior: 'smooth'
    });
}

function drop() {
    dropped = !dropped;
    if (dropped) {
        document.getElementById('drop-text').style.height = '100%';
        document.getElementById('drop-text').style.opacity = 1;
    } else {
        document.getElementById('drop-text').style.height = 0;
        document.getElementById('drop-text').style.opacity = 0;
    }
    
    setTimeout(function() {
        comein(0, 'sec-bel');
        comein(1, 'sec-lessons');
        comein(2, 'sec-contact');
    }, 550);
}