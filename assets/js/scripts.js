function flipIcon () {
        var i = document.getElementById("flippy");
        var i2 = document.getElementById("flippy2");
        i.classList.add("rotate-hor-center");
        setTimeout(function clicky() {window.location.replace(i2);}, 350);
}
