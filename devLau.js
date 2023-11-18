
console.log("este es dv lau")
const buttonEl = document.getElementById("biblioteca-button");
const bibliotecaEl = document.getElementById("idBiblio");
let desplegado = false;

buttonEl.addEventListener('click', (e) => {
    e.preventDefault();
    if (desplegado) {
        bibliotecaEl.style.right = '-800px';
    } else {
        bibliotecaEl.style.right = '0';
    }
    desplegado = !desplegado;
});


//animacion del boton que redirecciona a spotify
const LF_albumsArray = document.querySelectorAll(".discoElementSpotify")

LF_albumsArray.forEach(album => {
    album.addEventListener("mouseenter", (e) => {
        let btn = album.querySelector("#goToSpotify")
        btn.style.transition = "all .1s all .4s ease-in"
        btn.style.margin = "0 1em 5em 0"
        btn.style.opacity = "1"
    })
    album.addEventListener("mouseleave", (e) => {
        let btn = album.querySelector("#goToSpotify")
        btn.style.transition = "all .1s all .4s ease-in"
        btn.style.margin = "0 1em 4em 0"
        btn.style.opacity = "0"
    })
});

//hover en navbar

const LF_navBtnEl = document.querySelectorAll(".navButton")

LF_navBtnEl.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        let svg = btn.querySelector("svg")
        let text = btn.querySelector("h6")

        svg.style.transition = "all .2s ease-in"
        text.style.transition = "all .2s ease-in"
        svg.style.fill = "rgb(238, 238, 238)"
        text.style.color = "rgb(238, 238, 238)"
    });
    btn.addEventListener("mouseleave", () => {
        let svg = btn.querySelector("svg")
        let text = btn.querySelector("h6")

        svg.style.transition = "all .2s ease-in"
        text.style.transition = "all .2s ease-in"
        svg.style.fill = "rgb(91, 91, 91)"
        text.style.color = "rgb(91, 91, 91)"
    });
});

//hover en los botones de redes
const LF_mediaButtonsEl = document.querySelectorAll("article.media button")

LF_mediaButtonsEl.forEach(btn => {

    btn.addEventListener("mouseenter", () => {
        let svg = btn.querySelector("svg")

        if (btn.id === "igbtn") {
            btn.style.background = "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)"
        }
        if (btn.id === "xbtn") {
            btn.style.background = "black"

        }
        if (btn.id === "fbbtn") {
            btn.style.background = "rgb(127, 127, 255)"
        }
        btn.style.height = "3.8em"
        btn.style.width = "3.8em"
        svg.style.height = "1.9em"
    })
    btn.addEventListener("mouseleave", () => {
        let svg = btn.querySelector("svg")

        btn.style.height = "3.5em"
        svg.style.height = "1.7em"
        btn.style.width = "3.5em"
        btn.style.background = "rgb(45, 45, 45)"
    })
});

//hover en la biblioteca

const biblioEl = document.querySelector("#idBiblio")

biblioEl.addEventListener("mouseenter", () => {
    let svg = biblioEl.querySelector("svg")
    let text = biblioEl.querySelector("h6")

    svg.style.fill = "rgb(238, 238, 238)"
    text.style.color = "rgb(238, 238, 238)"
})

biblioEl.addEventListener("mouseleave", () => {
    let svg = biblioEl.querySelector("svg")
    let text = biblioEl.querySelector("h6")

    svg.style.fill = "rgb(91, 91, 91)"
    text.style.color = "rgb(91, 91, 91)"
})