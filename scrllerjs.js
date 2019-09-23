(function() {
  var scroll = window.innerHeight;
  window.addEventListener("scroll", function(e) {
    var pos = window.scrollY + window.innerHeight;
    if (scroll < pos) {
      // code when scrolling down is here
      var ele = document.querySelector("/* put css selector for element here */");
      if (isVisible(ele) && ele.getBoundingClientRect().top + window.scrollY < pos) {
        //code to execute when top of element enters the screen
      }
    } else {
      // code when scrolling up is here
    }
    scrollPos = pos;
  });

  // check if the element is visible
  function isVisible(element) {
    if (!element) return false;
    return element.offsetWidth > 0 || element.offsetHeight > 0;
  }
})();
