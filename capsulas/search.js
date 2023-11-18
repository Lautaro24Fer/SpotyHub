import './stylesSearch.css';

export function renderSearch(btnHome, auxEvents) {
    const punteroMain = document.querySelector('#idMain');

    var containerSearch = document.createElement('article');
    containerSearch.innerHTML = `
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
    `;

    btnHome.addEventListener('click', () => {
        removeSearch(containerSearch, auxEvents);
    });

    punteroMain.appendChild(containerSearch);

    var G_client_id = 'bc16d65feba34c608d8450e9d764d834';
    var G_client_secret = 'e3192148ff3e4499b1d11b79371c43df';
    var token = '';
    const searchContainer = document.getElementById('searchContainer');

    function obtenerNuevoToken() {
        var authOptions = {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa(G_client_id + ':' + G_client_secret),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials'
        };

        fetch('https://accounts.spotify.com/api/token', authOptions)
            .then(response => response.json())
            .then(data => {
                token = data.access_token;
                console.log('Nuevo token de acceso:', token);
            })
            .catch(error => console.error('Error al obtener un nuevo token:', error));
    }

    document.getElementById('buscarButton').addEventListener('click', function () {
        buscarDatos();
    });

    document.getElementById('botonesTipos').addEventListener('click', function (event) {
        if (event.target.classList.contains('tipo-btn')) {
            document.querySelectorAll('.tipo-btn').forEach(btn => btn.classList.remove('tipo-activo'));
            event.target.classList.add('tipo-activo');
            document.querySelectorAll('.tipo-btn').forEach(btn => {
                btn.style.backgroundColor = 'rgb(139, 134, 134)';
                btn.style.color = '#fff';
            });
            event.target.style.backgroundColor = 'rgb(61, 206, 61)';
            event.target.style.color = 'white';
        }
    });

    function buscarDatos() {
        const tipoSeleccionado = document.querySelector('.tipo-btn.tipo-activo').value;
        const barraBusqueda = document.getElementById('barraBusqueda');
        const busqueda = barraBusqueda.value.trim();
    
        // Limpiar el contenedor antes de realizar una nueva búsqueda
        searchContainer.innerHTML = '';
    
        if (busqueda) {
            fetch(`https://api.spotify.com/v1/search?q=${busqueda}&type=${tipoSeleccionado}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Resultados de la búsqueda:', data);
                    mostrarResultados(data, tipoSeleccionado);
                })
                .catch(error => {
                    console.error('Error al realizar la búsqueda:', error);
                });
        } else {
            console.error('No se proporcionó un término de búsqueda válido');
            mostrarAviso('Por favor, complete el campo de búsqueda.');
        }
    }

    function mostrarResultados(data, tipoSeleccionado) {
        const resultados = data[tipoSeleccionado + 's'].items.slice(0, 12);

        resultados.forEach(resultado => {
            let src, name, href;
            href = resultado.external_urls.spotify;

            if (tipoSeleccionado === 'track') {
                if (resultado.album && resultado.album.images && resultado.album.images.length > 0) {
                    src = resultado.album.images[0].url;
                } else {
                    src = '../assets/default_image.png';
                }
            } else {
                if (resultado.images && resultado.images.length > 0) {
                    src = resultado.images[0].url;
                } else {
                    src = '../assets/default_image.png';
                }
            }

            if (resultado.name) {
                name = resultado.name;
            } else {
                name = 'Nombre no disponible';
            }

            generateDiv(
                href,
                src,
                name,
                tipoSeleccionado
            );
        });
    }

    function generateDiv(href, src, name, type) {
        const searchContainer = document.getElementById('searchContainer');

        const article = document.createElement('article');
        article.classList.add('element', 'discoElementSpotify');

        const imgDiv = document.createElement('div');
        imgDiv.classList.add('img');

        const img = document.createElement('img');
        img.src = src;
        img.alt = `logo-${name}`;
        img.classList.add('result-img');

        const textDiv = document.createElement('div');
        textDiv.classList.add('text');

        const nameHeader = document.createElement('h3');
        nameHeader.classList.add('nombre');

        const maxLength = 11; // longitud máxima
        nameHeader.textContent = truncateText(name, maxLength);

        const artistDiv = document.createElement('div');
        artistDiv.classList.add('artista');
        artistDiv.textContent = type;

        const spotifyBtn = document.createElement('button');
        spotifyBtn.classList.add('goToSpotifyBtn');
        spotifyBtn.id = 'goToSpotify';

        const svg = document.createElement('svg');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('height', '1em');
        svg.setAttribute('viewBox', '0 0 384 512');

        const path = document.createElement('path');
        path.setAttribute('d', 'M73...');

        svg.appendChild(path);
        spotifyBtn.appendChild(svg);

        imgDiv.appendChild(img);
        textDiv.appendChild(nameHeader);
        textDiv.appendChild(artistDiv);

        article.appendChild(imgDiv);
        article.appendChild(textDiv);
        article.appendChild(spotifyBtn);

        article.addEventListener('click', () => {
            window.open(href, '_blank');
        });

        searchContainer.appendChild(article);
    }

    function truncateText(text, maxLength) {
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    }

    function mostrarAviso(aviso) {
        const searchContainer = document.getElementById('searchContainer');
        const avisoDiv = document.createElement('div');
        avisoDiv.classList.add('aviso');
        avisoDiv.textContent = aviso;
        searchContainer.appendChild(avisoDiv);
    }

    obtenerNuevoToken();

    setInterval(obtenerNuevoToken, 50 * 60 * 1000);
}

function removeSearch(containerSearch, auxEvents) {
    containerSearch.innerHTML = '';
    auxEvents.style.display = 'block';
}
