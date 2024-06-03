// include.js
window.addEventListener('load', function() {
    var allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function(el) {
        var tagHref = el.dataset.tagHref;
        if (tagHref) {
            el.href = `https://${window.location.host}${tagHref}`;
            console.log(el.href);
        }
    });
});