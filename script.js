// Datos de las bandas
const bands = [
    {
        name: "Slipknot",
        genre: "Nu Metal",
        formed: "Formada en 1995, Des Moines, Iowa",
        description: "Banda conocida por sus máscaras y su agresivo sonido nu metal.",
        fullInfo: `
            <h3>Historia</h3>
            <p>Slipknot se formó en Des Moines, Iowa en 1995. La banda es conocida por su imagen agresiva, máscaras únicas y su intenso sonido que combina metal extremo con elementos de nu metal.</p>
            
            <h3>Miembros destacados</h3>
            <ul>
                <li>Corey Taylor - Vocalista (#8)</li>
                <li>Shawn Crahan - Percusión (#6)</li>
                <li>Mick Thomson - Guitarra (#7)</li>
                <li>Jim Root - Guitarra (#4)</li>
            </ul>
            
            <h3>Álbumes importantes</h3>
            <ul>
                <li>Slipknot (1999)</li>
                <li>Iowa (2001)</li>
                <li>Vol. 3: The Subliminal Verses (2004)</li>
                <li>We Are Not Your Kind (2019)</li>
            </ul>
        `
    },
    {
        name: "Nirvana",
        genre: "Grunge",
        formed: "Formada en 1987, Aberdeen, Washington",
        description: "Pioneros del grunge que cambiaron el panorama del rock en los 90.",
        fullInfo: `
            <h3>Historia</h3>
            <p>Nirvana fue la banda que llevó el grunge a las masas. Liderada por Kurt Cobain, la banda revolucionó el rock alternativo y definió el sonido de una generación en los años 90.</p>
            
            <h3>Miembros</h3>
            <ul>
                <li>Kurt Cobain - Voz y guitarra</li>
                <li>Krist Novoselic - Bajo</li>
                <li>Dave Grohl - Batería</li>
            </ul>
            
            <h3>Álbumes</h3>
            <ul>
                <li>Bleach (1989)</li>
                <li>Nevermind (1991) - Álbum icónico con "Smells Like Teen Spirit"</li>
                <li>In Utero (1993)</li>
            </ul>
        `
    },
    {
        name: "Metallica",
        genre: "Thrash Metal",
        formed: "Formada en 1981, Los Ángeles, California",
        description: "Una de las 'Big Four' del thrash metal y banda de metal más exitosa de todos los tiempos.",
        fullInfo: `
            <h3>Historia</h3>
            <p>Metallica es considerada una de las bandas de metal más influyentes de la historia. Formada en 1981, han vendido más de 125 millones de álbumes en todo el mundo.</p>
            
            <h3>Miembros actuales</h3>
            <ul>
                <li>James Hetfield - Voz y guitarra rítmica</li>
                <li>Lars Ulrich - Batería</li>
                <li>Kirk Hammett - Guitarra principal</li>
                <li>Robert Trujillo - Bajo</li>
            </ul>
            
            <h3>Álbumes clásicos</h3>
            <ul>
                <li>Kill 'Em All (1983)</li>
                <li>Ride the Lightning (1984)</li>
                <li>Master of Puppets (1986)</li>
                <li>...And Justice for All (1988)</li>
                <li>Metallica (The Black Album) (1991)</li>
            </ul>
        `
    },
    {
        name: "Korn",
        genre: "Nu Metal",
        formed: "Formada en 1993, Bakersfield, California",
        description: "Pioneros del nu metal con su característico sonido de bajo de 7 cuerdas.",
        fullInfo: `
            <h3>Historia</h3>
            <p>Korn es considerada una de las bandas fundadoras del nu metal. Su sonido único, caracterizado por bajos de 7 cuerdas y letras oscuras, influyó en toda una generación de bandas.</p>
            
            <h3>Miembros</h3>
            <ul>
                <li>Jonathan Davis - Voz</li>
                <li>James "Munky" Shaffer - Guitarra</li>
                <li>Brian "Head" Welch - Guitarra</li>
                <li>Reginald "Fieldy" Arvizu - Bajo</li>
                <li>Ray Luzier - Batería</li>
            </ul>
            
            <h3>Discografía destacada</h3>
            <ul>
                <li>Korn (1994)</li>
                <li>Life Is Peachy (1996)</li>
                <li>Follow the Leader (1998)</li>
                <li>Issues (1999)</li>
            </ul>
        `
    },
    {
        name: "System of a Down",
        genre: "Metal Alternativo",
        formed: "Formada en 1994, Glendale, California",
        description: "Conocidos por su estilo único que mezcla metal con influencias armenias y letras políticas.",
        fullInfo: `
            <h3>Historia</h3>
            <p>System of a Down es una banda de metal alternativo formada por músicos armenio-americanos. Son conocidos por su estilo único, cambios de tempo impredecibles y letras con fuerte contenido político y social.</p>
            
            <h3>Miembros</h3>
            <ul>
                <li>Serj Tankian - Voz, teclados</li>
                <li>Daron Malakian - Guitarra, voz</li>
                <li>Shavo Odadjian - Bajo</li>
                <li>John Dolmayan - Batería</li>
            </ul>
            
            <h3>Álbumes</h3>
            <ul>
                <li>System of a Down (1998)</li>
                <li>Toxicity (2001)</li>
                <li>Steal This Album! (2002)</li>
                <li>Mezmerize (2005)</li>
                <li>Hypnotize (2005)</li>
            </ul>
        `
    },
    {
        name: "Linkin Park",
        genre: "Nu Metal / Rock Alternativo",
        formed: "Formada en 1996, Agoura Hills, California",
        description: "Fusionaron rock, hip-hop y electrónica creando un sonido revolucionario.",
        fullInfo: `
            <h3>Historia</h3>
            <p>Linkin Park revolucionó el nu metal al incorporar elementos de hip-hop, electrónica y rock alternativo. Con más de 100 millones de álbumes vendidos, son una de las bandas más exitosas del siglo XXI.</p>
            
            <h3>Miembros</h3>
            <ul>
                <li>Chester Bennington - Voz (1976-2017)</li>
                <li>Mike Shinoda - Voz, teclados, guitarra</li>
                <li>Brad Delson - Guitarra</li>
                <li>Dave "Phoenix" Farrell - Bajo</li>
                <li>Joe Hahn - DJ, samples</li>
                <li>Rob Bourdon - Batería</li>
            </ul>
            
            <h3>Álbumes principales</h3>
            <ul>
                <li>Hybrid Theory (2000) - Uno de los álbumes debut más exitosos</li>
                <li>Meteora (2003)</li>
                <li>Minutes to Midnight (2007)</li>
                <li>A Thousand Suns (2010)</li>
            </ul>
        `
    },
    {
        name: "Limp Bizkit",
        genre: "Nu Metal / Rap Metal",
        formed: "Formada en 1994, Jacksonville, Florida",
        description: "Pioneros en fusionar rap y metal con un estilo agresivo y controversial.",
        fullInfo: `
            <h3>Historia</h3>
            <p>Limp Bizkit fue una de las bandas más populares y controversiales del nu metal en los late 90s y early 2000s. Su fusión de rap, metal y rock alternativo los convirtió en uno de los actos más exitosos de su época.</p>
            
            <h3>Miembros</h3>
            <ul>
                <li>Fred Durst - Voz</li>
                <li>Wes Borland - Guitarra</li>
                <li>Sam Rivers - Bajo</li>
                <li>John Otto - Batería</li>
                <li>DJ Lethal - DJ, samples</li>
            </ul>
            
            <h3>Álbumes destacados</h3>
            <ul>
                <li>Three Dollar Bill, Y'all$ (1997)</li>
                <li>Significant Other (1999)</li>
                <li>Chocolate Starfish and the Hot Dog Flavored Water (2000)</li>
                <li>Results May Vary (2003)</li>
            </ul>
        `
    },
    {
        name: "Gorillaz",
        genre: "Rock Alternativo / Art Pop",
        formed: "Formada en 1998, Londres, Reino Unido",
        description: "Banda virtual creada por Damon Albarn y Jamie Hewlett, fusionando múltiples géneros.",
        fullInfo: `
            <h3>Historia</h3>
            <p>Gorillaz es una banda virtual única creada por el músico Damon Albarn (Blur) y el artista Jamie Hewlett. La banda está representada por cuatro personajes animados: 2-D, Murdoc Niccals, Noodle y Russel Hobbs.</p>
            
            <h3>Miembros</h3>
            <ul>
                <li>Damon Albarn - Voz, instrumentos y compositor principal</li>
                <li>Jamie Hewlett - Arte visual y diseño de personajes</li>
                <li>Colaboradores variados en cada álbum</li>
            </ul>
            
            <h3>Álbumes</h3>
            <ul>
                <li>Gorillaz (2001)</li>
                <li>Demon Days (2005)</li>
                <li>Plastic Beach (2010)</li>
                <li>Humanz (2017)</li>
                <li>Cracker Island (2023)</li>
            </ul>
        `
    },
    {
        name: "Rammstein",
        genre: "Industrial Metal / Neue Deutsche Härte",
        formed: "Formada en 1994, Berlín, Alemania",
        description: "Pioneros del Neue Deutsche Härte con espectáculos pirotécnicos épicos.",
        fullInfo: `
            <h3>Historia</h3>
            <p>Rammstein es una banda alemana de industrial metal conocida por sus intensos shows en vivo con pirotecnia elaborada y sus letras en alemán. Son los pioneros del género Neue Deutsche Härte.</p>
            
            <h3>Miembros</h3>
            <ul>
                <li>Till Lindemann - Voz</li>
                <li>Richard Kruspe - Guitarra principal</li>
                <li>Paul Landers - Guitarra rítmica</li>
                <li>Oliver Riedel - Bajo</li>
                <li>Christoph Schneider - Batería</li>
                <li>Christian Lorenz - Teclados</li>
            </ul>
            
            <h3>Álbumes</h3>
            <ul>
                <li>Herzeleid (1995)</li>
                <li>Sehnsucht (1997)</li>
                <li>Mutter (2001)</li>
                <li>Reise, Reise (2004)</li>
                <li>Zeit (2022)</li>
            </ul>
        `
    }
];

// Función de login
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Validación simple
    if (username === 'rock' && password === 'metal') {
        // Guardar sesión
        sessionStorage.setItem('loggedIn', 'true');
        // Redirigir a la página principal
        window.location.href = 'index.html';
    } else {
        errorMessage.style.display = 'block';
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 3000);
    }
}

// Verificar si el usuario está logueado
function checkAuth() {
    const loggedIn = sessionStorage.getItem('loggedIn');
    if (!loggedIn || loggedIn !== 'true') {
        window.location.href = 'login.html';
    }
}

// Cargar bandas en el grid
function loadBands() {
    const bandsGrid = document.getElementById('bandsGrid');
    if (!bandsGrid) return;
    
    bandsGrid.innerHTML = '';
    
    bands.forEach((band, index) => {
        const bandCard = document.createElement('div');
        bandCard.className = 'band-card';
        
        // Crear nombre de archivo para cada banda
        const fileName = band.name.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '') + '.html';
        
        bandCard.innerHTML = `
            <h3>${band.name}</h3>
            <span class="genre">${band.genre}</span>
            <p class="description">${band.description}</p>
            <p class="formed">${band.formed}</p>
            <a href="${fileName}" class="band-btn">Ver más ⚡</a>
        `;
        
        bandsGrid.appendChild(bandCard);
    });
}

// Cerrar sesión
function logout() {
    sessionStorage.removeItem('loggedIn');
    window.location.href = 'login.html';
}

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Si estamos en login.html
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Si estamos en index.html
    const bandsGrid = document.getElementById('bandsGrid');
    if (bandsGrid) {
        checkAuth();
        loadBands();
    }
});