let hasBacks = document.getElementsByClassName("has-back");
for (i = 0; i < hasBacks.length; i++) {
    let a = hasBacks[i].style.backgroundImage.split(/(\d+)/)[2],
        s = hasBacks[i].style.backgroundImage.match(/(\d+)/)[0] + a.split("+front")[0];
    setInterval(flash, Math.floor(20000 * Math.random()) + 1000, i, s)
}

function flash(a, s) {
    let e = document.getElementsByClassName("has-back")[a];
    e.style.backgroundImage.includes("back") ? e.style.backgroundImage = "url('/img/" + s + "+front.png')" : e.style.backgroundImage = "url('/img/" + s + "+back.png')"
}