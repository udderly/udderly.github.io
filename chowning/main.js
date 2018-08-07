document.addEventListener('scroll', function() {
    update();
});

function update() {
    var percent = document.documentElement.scrollTop / document.documentElement.scrollHeight;
    document.getElementById('image').style.marginTop = (2050 * percent) + 'px';
    document.getElementById('back').style.backgroundPosition = '0 ' + (50 * percent) + '%';
}

update();