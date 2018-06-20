var pollyfills = function() {

    // проверяем поддержку
    if (!Element.prototype.closest) {
  
      // реализуем
      Element.prototype.closest = function(css) {
        var node = this;
  
        while (node) {
          if (node.matches(css)) return node;
          else node = node.parentElement;
        }
        return null;
      };
    }
    var e = Element.prototype;
    var matches = e.matches || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector;
    !matches ? (e.matches = e.matchesSelector = function matches(selector) {
        var matches = document.querySelectorAll(selector);
        var th = this;
        return Array.prototype.some.call(matches, function(e) {
            return e === th;
        });
    }) : (e.matches = e.matchesSelector = matches);
  
  };

  module.exports = pollyfills;

