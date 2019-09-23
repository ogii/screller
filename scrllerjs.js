(function () {
    var scroll = window.innerHeight;
    window.addEventListener('scroll', function (e) {
        var pos = window.scrollY + window.innerHeight;
        if (scroll < pos) {
            // code when scrolling down is here
            if ((document.querySelector('/* put css selector for element here */').getBoundingClientRect().top + window.scrollY) < pos) {
                //code to execute when top of element enters the screen
            }
        } else {
            // code when scrolling up is here
        }
        scrollPos = pos;
    });
})();
