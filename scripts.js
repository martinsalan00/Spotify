document.addEventListener('DOMContentLoaded', () => {

    const artistsData = [
        { name: 'Henrique & Juliano', image: './img/artista-henrique-juliano.jpg' },
        { name: 'Jorge & Mateus', image: './img/artista-jorge-mateus.jpg' },
        { name: 'Zé Neto & Cristiano', image: './img/artista-ze-neto.jpg' },
        { name: 'Gusttavo Lima', image: './img/artista-gustavo-lima.jpg' },
        { name: 'Grupo Menos é Mais', image: './img/grupo-menos-é-mais.jpg' },
        { name: 'MC Tuto', image: './img/mc-tuto.jpg' }
    ];

    const albumsData = [
        { name: 'Tardezinha (No Maraca)', artist: 'Thiaguinho', image: './img/album-tardezinha-thiaguinho.jpg' },
        { name: 'O Céu Explica Tudo', artist: 'Henrique & Juliano', image: './img/album-ceu-explica.jpg' },
        { name: 'Nada como um dia após o outro', artist: 'Racionais', image: './img/album-vida-loka.jpg' },
        { name: '333 Matuê', artist: 'Matuê', image: './img/333-Álbum-Matuê.jpg' },
        { name: 'Acústico MTV', artist: 'Charlie Brown Jr.', image: './img/album-acustico-mtv.jpg' },
        { name: 'This is Marília', artist: 'Marília Mendonça', image: './img/album-marilia-mendonca.jpg' }
    ];

    const artistGrid = document.querySelector('.artists-grid');
    const albumsGrid = document.querySelector('.albums-grid');

    artistsData.forEach(artist => {
        artistGrid.innerHTML += `
            <div class="artist-card">
                <img src="${artist.image}" alt="${artist.name}">
                <h3>${artist.name}</h3>
                <p>Artista</p>
            </div>
        `;
    });

    albumsData.forEach(album => {
        albumsGrid.innerHTML += `
            <div class="album-card">
                <img src="${album.image}" alt="${album.name}">
                <h3>${album.name}</h3>
                <p>${album.artist}</p>
            </div>
        `;
    });

});
