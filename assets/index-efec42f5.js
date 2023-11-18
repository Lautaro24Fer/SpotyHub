(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function l(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(a){if(a.ep)return;a.ep=!0;const s=l(a);fetch(a.href,s)}})();function k(){const e=document.querySelector("#contBiblioMain"),t=document.createElement("div");e.innerHTML="",t.innerHTML=`
<section class="favouritesAlbums-logged-column">
                <button class="elementAlbumLogged"><a href="https://open.spotify.com/intl-es/album/2cWBwpqMsDJC1ZUwz813lo" target="_blank">
                  <div class="imageAlbum">
    
                  </div>
                  <div class="nameAlbum">
    
                  </div>
                </a></button>
                <button class="elementAlbumLogged"><a href="https://open.spotify.com/intl-es/album/4otkd9As6YaxxEkIjXPiZ6" target="_blank">
                  <div class="imageAlbum">
    
                  </div>
                  <div class="nameAlbum">
                    
                  </div>
                </a></button>
                <button class="elementAlbumLogged"><a href="https://open.spotify.com/intl-es/album/27xqCLyTHom0wyjtw08K12" target="_blank">
                  <div class="imageAlbum">
    
                  </div>
                  <div class="nameAlbum">
                    
                  </div>
                </a></button>
                <button class="elementAlbumLogged"><a href="https://open.spotify.com/intl-es/album/26nUVuonXEdbJTo9PeBYoR" target="_blank">
                  <div class="imageAlbum">
    
                  </div>
                  <div class="nameAlbum">
                    
                  </div>
                </a></button>
                <button class="elementAlbumLogged"><a href="https://open.spotify.com/intl-es/album/5tPDpnIZLtftbejuG6BllH" target="_blank">
                  <div class="imageAlbum">
    
                  </div>
                  <div class="nameAlbum">
                    
                  </div>
                </a></button>
                <button class="elementAlbumLogged"><a href="https://open.spotify.com/intl-es/album/33cj3kzLqVOg9zvy69Wrc8" target="_blank">
                  <div class="imageAlbum">
    
                  </div>
                  <div class="nameAlbum">
                    
                  </div>
                </a></button><button class="elementAlbumLogged"><a href="https://open.spotify.com/intl-es/album/5K3EGqntkI4To4TKtmIj2r" target="_blank">
                  <div class="imageAlbum">
    
                  </div>
                  <div class="nameAlbum">
                    
                  </div>
                </a></button>
              </section>


`;const l=[{artist:"Eminem",name:"The Eminem Show",id:"2cWBwpqMsDJC1ZUwz813lo",url:"https://i.scdn.co/image/ab67616d0000b2736ca5c90113b30c3c43ffb8f4"},{artist:"Eminem",name:"Music to be murderer By",id:"4otkd9As6YaxxEkIjXPiZ6",url:"https://i.scdn.co/image/ab67616d0000b2732f44aec83b20e40f3baef73c"},{artist:"Canserbero",name:"Muerte",id:"27xqCLyTHom0wyjtw08K12",url:"https://i.scdn.co/image/ab67616d0000b273fd7bf6e660e2da01813c70f7"},{artist:"Duko",name:"Antes de Ameri",id:"26nUVuonXEdbJTo9PeBYoR",url:"https://i.scdn.co/image/ab67616d0000b273f74269b6ebdb5ab2773c0be9"},{artist:"YSY A",name:"Antezana 247",id:"5tPDpnIZLtftbejuG6BllH",url:"https://i.scdn.co/image/ab67616d0000b27369445bc08d1eb43cc33965c6"},{artist:"Jacob Collier",name:"Djesse Vol.3",id:"33cj3kzLqVOg9zvy69Wrc8",url:"https://i.scdn.co/image/ab67616d0000b27334de228d223a20a8a5d1f465"},{artist:"Virus",name:"Locura",id:"5K3EGqntkI4To4TKtmIj2r",url:"https://i.scdn.co/image/ab67616d0000b273292c1ca632a1e120d1208c95"}],c=t.querySelectorAll("section.favouritesAlbums-logged-column button");function a(){l.map((s,r)=>{const u=document.createElement("img");u.src=s.url;const b=document.createElement("h4");b.innerHTML=s.name;const h=c[r].querySelector(".imageAlbum"),f=c[r].querySelector(".nameAlbum");h.appendChild(u),f.innerHTML=`
        <div class="albumName">
        ${s.name}
        </div>
        <div class="artistName">
        ${s.artist}
        </div>
        `})}a(),e.appendChild(t)}function I(){const e=document.querySelector("#headerTag"),t=document.createElement("div");t.innerHTML=`
  
    <section class="favouritesAlbums-logged" id="discosFavoritos">
    <button class="elementAlbumLogged"><a href="https://open.spotify.com/intl-es/album/1XkGORuUX2QGOEIL4EbJKm" target="_blank">
      <div class="imageAlbum">

      </div>
      <div class="nameAlbum">

      </div>
    </a></button>
    <button class="elementAlbumLogged"><a href="https://open.spotify.com/intl-es/album/78bpIziExqiI9qztvNFlQu" target="_blank">
      <div class="imageAlbum">

      </div>
      <div class="nameAlbum">
        
      </div>
    </a></button>
    <button class="elementAlbumLogged"><a href="https://open.spotify.com/intl-es/album/5MJR9j21vjEi4ODxzhvoTA" target="_blank">
      <div class="imageAlbum">

      </div>
      <div class="nameAlbum">
        
      </div>
    </a></button>
    <button class="elementAlbumLogged"><a href="https://open.spotify.com/intl-es/album/23jZzJ9u5M9p03nf84zuO1" target="_blank">
      <div class="imageAlbum">

      </div>
      <div class="nameAlbum">
        
      </div>
    </a></button>
    <button class="elementAlbumLogged"><a href="https://open.spotify.com/intl-es/album/0hyq754QnaKHYpH32QnWqs" target="_blank">
      <div class="imageAlbum">

      </div>
      <div class="nameAlbum">
        
      </div>
    </a></button><button class="elementAlbumLogged"><a href="https://open.spotify.com/intl-es/album/1F3hULFzB7JebCft7dcdBq" target="_blank">
    <div class="imageAlbum">
    
      </div>
      <div class="nameAlbum">
        
      </div>
    </a></button>
  </section>
    `;const l=[{artist:"Artic Monkeys",name:"Favourite Worst Nightmare",id:"1XkGORuUX2QGOEIL4EbJKm",url:"https://i.scdn.co/image/ab67616d0000b273b1f8da74f225fa1225cdface"},{artist:"Artic Monkeys",name:"AM",id:"78bpIziExqiI9qztvNFlQu",url:"https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163"},{artist:"Pescado Rabioso",name:"Artaud",id:"5MJR9j21vjEi4ODxzhvoTA",url:"https://i.scdn.co/image/ab67616d0000b27350db5a166ea23d5d6c4cd387"},{artist:"Almendra",name:"Almendra",id:"23jZzJ9u5M9p03nf84zuO1",url:"https://i.scdn.co/image/ab67616d0000b273ccf6d7a68e129185513921e8"},{artist:"Soda Stereo",name:"Nada personal",id:"0hyq754QnaKHYpH32QnWqs",url:"https://i.scdn.co/image/ab67616d0000b273e28947f6ad2f100af9c1965a"},{artist:"Pappo's blues",name:"Pappo's blues, Vol. 3",id:"1F3hULFzB7JebCft7dcdBq",url:"https://i.scdn.co/image/ab67616d0000b273b0bad878d09332d8ef4bb87f"}],c=t.querySelectorAll("section.favouritesAlbums-logged button");function a(){l.map((r,u)=>{const b=document.createElement("img");b.src=r.url;const h=document.createElement("h5");h.innerHTML=`${r.name}`;const f=c[u].querySelector(".imageAlbum"),y=c[u].querySelector(".nameAlbum");f.appendChild(b),y.append(h),c[u].appendChild(f),c[u].appendChild(y)})}a(),e.appendChild(t),document.querySelector("#cerrarSesionBtn").addEventListener("click",()=>{t.innerHTML=""})}const F="river",O="912";function j(){const e=document.createElement("article");e.innerHTML=`
    <article class="userLogin">
      <section class="nav">
        <h1 class="name">SpotiHub</h1>
      </section>
      <main class="mainContent">
        <header class="cont-caja">
          <section class="caja">
            <h1 class="titulo">Inicia sesión en SpotiHub</h1>
            <form class="login">
              
              <input type="text" id="usernameId" placeholder="Nombre de usuario" autocomplete="off">
              
              <input type="password" id="passId" placeholder="Contraseña" autocomplete="off">
            </form>
            <button id="iniciarSesionId" class="boton"><strong>Iniciar sesión</strong></button>
            <button id="modoInvitadoId" class="boton"><strong>Modo Invitado</strong></button>
            <p><a class="a2" href="#">Te has olvidado la contraseña?</a></p>
            <hr>
            <footer class="footer">
              <h4>No tenes una cuenta? <a href="#" class="register">Registrate</a></h4>
            </footer>
            <p class="terminos">Esta página aplica los Términos del servicio y la Política de privacidad de Google.</p>
          </section>
        </header>
      </main>
    </article>
    `,document.querySelector("#loginContainer").appendChild(e);const l=e.querySelector("#usernameId"),c=e.querySelector("#passId"),a=e.querySelector("#modoInvitadoId"),s=e.querySelector("#iniciarSesionId");a.addEventListener("click",()=>{e.innerHTML="",B()});const r=document.querySelector("#cerrarSesionBtn");r.addEventListener("click",()=>{e.innerHTML="",B(),r.style.display="none"}),s.addEventListener("click",()=>{F===`${l.value}`&&O===`${c.value}`&&(e.innerHTML="",k(),I(),r.style.display="block")})}function B(){const e=document.querySelector("#contBiblioMain");e.innerHTML="";const t=document.createElement("div");t.innerHTML=`
    <div class="biblioCard firstList">
    <h6>Crea tu primera lista</h6>
    <p>Es muy fácil, y te echaremos una mano.</p>
    <button class="bcButton">Crear lista</button>
  </div>
  <div class="biblioCard firstList" style="margin: 1em 0 0 0;">
    <h6>Encuentra pódcasts que quieras seguir</h6>
    <p>Te avisaremos cuando salgan nuevos episodios</p>
    <button class="bcButton">Explorar pódcasts</button>
  </div>
</div>

    `,e.appendChild(t),t.querySelectorAll("button").forEach(c=>{c.addEventListener("click",()=>{j()})})}function P(e,t){const l=document.querySelector("#idMain");var c=document.createElement("article");c.innerHTML=`
        <div id="mainSearchContainer" class="containerElements search-container">
            <article class="containerOfSearch">
                <header>
                    <div class="search-container">
                        <div class="search-box">
                            <input type="text" id="barraBusqueda" placeholder="Buscar en Spotify">
                            <button id="buscarButton">Buscar</button>
                        </div>
                        <div id="botonesTipos">
                            <button class="tipo-btn tipo-activo" value="artist">Artista</button>
                            <button class="tipo-btn" value="album">Álbum</button>
                            <button class="tipo-btn" value="track">Canción</button>
                            <button class="tipo-btn" value="playlist">Playlist</button>
                        </div>
                    </div>
                </header>
                <section class="fromSpotify">
                    <h2 class="text-result">Resultados de la búsqueda</h2>
                    <div id="searchContainer" class="containerElements">
                        <!-- Aquí se mostrarán los resultados de la búsqueda -->
                    </div>
                </section>
            </article>
        </div>
    `,e.addEventListener("click",()=>{R(c,t)}),l.appendChild(c);var a="bc16d65feba34c608d8450e9d764d834",s="e3192148ff3e4499b1d11b79371c43df",r="";const u=document.getElementById("searchContainer");function b(){var o={method:"POST",headers:{Authorization:"Basic "+btoa(a+":"+s),"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=client_credentials"};fetch("https://accounts.spotify.com/api/token",o).then(n=>n.json()).then(n=>{r=n.access_token,console.log("Nuevo token de acceso:",r)}).catch(n=>console.error("Error al obtener un nuevo token:",n))}document.getElementById("buscarButton").addEventListener("click",function(){h()}),document.getElementById("botonesTipos").addEventListener("click",function(o){o.target.classList.contains("tipo-btn")&&(document.querySelectorAll(".tipo-btn").forEach(n=>n.classList.remove("tipo-activo")),o.target.classList.add("tipo-activo"),document.querySelectorAll(".tipo-btn").forEach(n=>{n.style.backgroundColor="rgb(139, 134, 134)",n.style.color="#fff"}),o.target.style.backgroundColor="rgb(61, 206, 61)",o.target.style.color="white")});function h(){const o=document.querySelector(".tipo-btn.tipo-activo").value,d=document.getElementById("barraBusqueda").value.trim();u.innerHTML="",d?fetch(`https://api.spotify.com/v1/search?q=${d}&type=${o}`,{method:"GET",headers:{Authorization:`Bearer ${r}`}}).then(i=>i.json()).then(i=>{console.log("Resultados de la búsqueda:",i),f(i,o)}).catch(i=>{console.error("Error al realizar la búsqueda:",i)}):(console.error("No se proporcionó un término de búsqueda válido"),H("Por favor, complete el campo de búsqueda."))}function f(o,n){o[n+"s"].items.slice(0,12).forEach(i=>{let p,m,g;g=i.external_urls.spotify,n==="track"?i.album&&i.album.images&&i.album.images.length>0?p=i.album.images[0].url:p="../assets/default_image.png":i.images&&i.images.length>0?p=i.images[0].url:p="../assets/default_image.png",i.name?m=i.name:m="Nombre no disponible",y(g,p,m,n)})}function y(o,n,d,i){const p=document.getElementById("searchContainer"),m=document.createElement("article");m.classList.add("element","discoElementSpotify");const g=document.createElement("div");g.classList.add("img");const E=document.createElement("img");E.src=n,E.alt=`logo-${d}`,E.classList.add("result-img");const A=document.createElement("div");A.classList.add("text");const S=document.createElement("h3");S.classList.add("nombre");const N=11;S.textContent=M(d,N);const q=document.createElement("div");q.classList.add("artista"),q.textContent=i;const L=document.createElement("button");L.classList.add("goToSpotifyBtn"),L.id="goToSpotify";const v=document.createElement("svg");v.setAttribute("xmlns","http://www.w3.org/2000/svg"),v.setAttribute("height","1em"),v.setAttribute("viewBox","0 0 384 512");const C=document.createElement("path");C.setAttribute("d","M73..."),v.appendChild(C),L.appendChild(v),g.appendChild(E),A.appendChild(S),A.appendChild(q),m.appendChild(g),m.appendChild(A),m.appendChild(L),m.addEventListener("click",()=>{window.open(o,"_blank")}),p.appendChild(m)}function M(o,n){return o.length>n?o.substring(0,n)+"...":o}function H(o){const n=document.getElementById("searchContainer"),d=document.createElement("div");d.classList.add("aviso"),d.textContent=o,n.appendChild(d)}b(),setInterval(b,50*60*1e3)}function R(e,t){e.innerHTML="",t.style.display="block"}const _=document.querySelectorAll(".discoElementSpotify .img"),w=document.querySelectorAll(".discoElementSpotify .text .nombre"),z=document.querySelectorAll(".discoElementSpotify .text .artista"),Y=[{name:"The War to End All Wars",artist:"Sabaton",id:"3kB4VjXKKCY7l5xeH113Da",url:"https://open.spotify.com/album/3kB4VjXKKCY7l5xeH113Da",src:"https://i.scdn.co/image/ab67616d0000b2734973c03327b47148881afe9c"},{name:"X 100PRE",artist:"Bad Bunny",id:"7CjJb2mikwAWA1V6kewFBF",url:"https://open.spotify.com/album/7CjJb2mikwAWA1V6kewFBF",src:"https://i.scdn.co/image/ab67616d0000b2732fbd77033247e889cb7d2ac4"},{name:"TU DUO FAVORITO",artist:"YSY A, Bhavi",id:"4n6BNKtpmZOYUyfecMzzpZ",url:"https://open.spotify.com/album/4n6BNKtpmZOYUyfecMzzpZ",src:"https://i.scdn.co/image/ab67616d0000b27396c8e24989c8ba422385e80c"},{name:"Peperina",artist:"Serú Girán",id:"5VxrZQkdX8rZaiPgXp23xT",url:"https://open.spotify.com/album/5VxrZQkdX8rZaiPgXp23xT",src:"https://i.scdn.co/image/ab67616d0000b2735e73b5c3235f1dae08842ed4"},{name:"Clics Modernos",artist:"Charly García",id:"3OyBf97NOuJjhEpQHY920H",url:"https://open.spotify.com/album/3OyBf97NOuJjhEpQHY920H",src:"https://i.scdn.co/image/ab67616d0000b273b14842a87b833bc0a9339f60"},{name:"Wars In A Wonderland",artist:"Neoni",id:"2npzGBEPDOfVLN8ajYm3pZ",url:"https://open.spotify.com/album/2npzGBEPDOfVLN8ajYm3pZ",src:"https://i.scdn.co/image/ab67616d0000b2735949fe5472d5ad4d30494569"},{name:"nadie sabe lo que va a pasar mañana",artist:"Bad Bunny",id:"4FftCsAcXXD1nFO9RFUNFO",url:"https://open.spotify.com/album/4FftCsAcXXD1nFO9RFUNFO",src:"https://i.scdn.co/image/ab67616d0000b2737b1fc51ff3257b5286a1ecec"},{name:"Corazón de papel",artist:"Los Charros",id:"1gFTYh0ijDv3y8sjdzR4Fq",url:"https://open.spotify.com/album/1gFTYh0ijDv3y8sjdzR4Fq",src:"https://i.scdn.co/image/ab67616d0000b273ac7b8e4c547645666bb5c26d"},{name:"Estrella",artist:"Mora",id:"0SoJvPHbKVhvmVJOp3kzp3",url:"https://open.spotify.com/album/0SoJvPHbKVhvmVJOp3kzp3",src:"https://i.scdn.co/image/ab67616d0000b2734cc96ed1e38fa517608c2fb0"},{name:"The Car",artist:"Artic Monkeys",id:"2GROf0WKoP5Er2M9RXVNNs",url:"https://open.spotify.com/album/2GROf0WKoP5Er2M9RXVNNs",src:"https://i.scdn.co/image/ab67616d0000b27307823ee6237208c835802663"},{name:"OKTUBRE",artist:"Patricio Rey y sus Redonditos de Ricota",id:"1Eh8uP6MvoseEDTWIb8qv6",url:"https://open.spotify.com/album/1Eh8uP6MvoseEDTWIb8qv6",src:"https://i.scdn.co/image/ab67616d0000b273c7c1ffa44473871a6f004786"},{name:"Un Verano Sin Ti",artist:"Bad Bunny",id:"3RQQmkQEvNCY4prGKE6oc5",url:"https://open.spotify.com/album/3RQQmkQEvNCY4prGKE6oc5",src:"https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72"},{name:"Night Visions",artist:"Imagine Dragons",id:"6nxDQi0FeEwccEPJeNySoS",url:"https://open.spotify.com/album/6nxDQi0FeEwccEPJeNySoS",src:"https://i.scdn.co/image/ab67616d0000b273407bd04707c463bbb3410737"},{name:"Smite and Ignite",artist:"Pentakill",id:"15uKqLeki8fZuLdR44Qtz8",url:"https://open.spotify.com/album/15uKqLeki8fZuLdR44Qtz8",src:"https://i.scdn.co/image/ab67616d0000b27311b83ddd0da87a35c322da13"},{name:"÷",artist:"Ed Sheeran",id:"3T4tUhGYeRNVUGevb0wThu",url:"https://open.spotify.com/album/3T4tUhGYeRNVUGevb0wThu",src:"https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96"},{name:"Narrated For You",artist:"Alec Benjamin",id:"6jKZplJpy21R5lHaYHHjmZ",url:"https://open.spotify.com/album/6jKZplJpy21R5lHaYHHjmZ",src:"https://i.scdn.co/image/ab67616d0000b273459d675aa0b6f3b211357370"},{name:"Amor Escupido",artist:"Pol Granch",id:"14WhMR0dMyEdhoNVXnvG7w",url:"https://open.spotify.com/album/14WhMR0dMyEdhoNVXnvG7w",src:"https://i.scdn.co/image/ab67616d0000b2731c0167799b5c26d966c4860a"},{name:"The Marshall Mathers LP",artist:"Eminem",id:"6t7956yu5zYf5A829XRiHC",url:"https://open.spotify.com/album/6t7956yu5zYf5A829XRiHC",src:"https://i.scdn.co/image/ab67616d0000b273dbb3dd82da45b7d7f31b1b42"},{name:"Bocanada",artist:"Gustavo Cerati",id:"2rIdWbXPjcq8K7BCccBhhC",url:"https://open.spotify.com/album/2rIdWbXPjcq8K7BCccBhhC",src:"https://i.scdn.co/image/ab67616d0000b2731152471596980e1bba03b6ab"},{name:"Toro y Pampa",artist:"Almafuerte",id:"5owqdiYsub7Bbe47LnNy7E",url:"https://open.spotify.com/album/5owqdiYsub7Bbe47LnNy7E",src:"https://i.scdn.co/image/ab67616d0000b27368361c6b8f3672ca8cfc71ce"}];function K(){Y.map((e,t)=>{const l=document.createElement("img");l.src=e.src,_[t].appendChild(l),w[t].innerHTML=`
      ${e.name}
      `,z[t].innerHTML=`
      ${e.artist}
      `})}K();const x=document.querySelector("#cerrarSesionBtn");function G(){let e=localStorage.getItem("isLoggedIn")==="true";e===null&&(e=!1,localStorage.setItem("isLoggedIn","false")),e?D():(V(),x.style.display="none")}function D(){I(),k()}function V(){B()}G();const X=document.querySelector("#searchButtonId"),U=document.querySelector("#homeButtonId"),T=document.querySelector("#aux-events");X.addEventListener("click",()=>{T.style.display="none",P(U,T)});
