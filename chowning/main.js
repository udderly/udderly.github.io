document.addEventListener('scroll', function() {
    update();
});

function update() {
    var percent = document.documentElement.scrollTop / document.documentElement.scrollHeight;
    document.getElementById('back').style.backgroundPosition = '0 ' + (50 * percent) + '%';
}

update();