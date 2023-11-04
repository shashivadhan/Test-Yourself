javascript
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTop = function() {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    };

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 0) {
            document.getElementById('scrollTop').style.display = 'block';
        } else {
            document.getElementById('scrollTop').style.display = 'none';
        }
    });

    document.getElementById('scrollTop').addEventListener('click', function() {
        scrollToTop();
    });
});