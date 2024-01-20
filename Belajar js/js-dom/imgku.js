const main = document.querySelector('main');
const jumbo = document.querySelector('.jumbo');
const thumb = document.querySelectorAll('.thumb');
main.addEventListener('click', function(e) {
    if (e.target.className == 'thumb') {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function() {
            jumbo.classList.remove('fade');
        }, 500);
        thumb.forEach(function(thumbs) {
            thumbs.className = 'thumb';
        })
        e.target.classList.add('active');
    }
});