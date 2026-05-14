document.addEventListener('DOMContentLoaded', () => {
    // 1. Массив данных [cite: 198]
    const songData = [
        { id: 1, title: "Midnight City", artist: "M83", genre: "Electronic" },
        { id: 2, title: "Blinding Lights", artist: "The Weeknd", genre: "Pop" },
        { id: 3, title: "Nightcall", artist: "Kavinsky", genre: "Synthwave" },
        { id: 4, title: "Starboy", artist: "The Weeknd", genre: "R&B" }
    ];

    const songList = document.getElementById('song-list');

    // 2. Функция отображения через цикл [cite: 199, 203]
    function renderSongs(data) {
        if (!songList) return;
        songList.innerHTML = ""; 
        
        data.forEach(song => {
            const card = document.createElement('div');
            card.className = 'song-card';
            card.innerHTML = `
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
                <button onclick="toggleFavorite(${song.id})">❤ Favorite</button>
            `;
            songList.appendChild(card); // Манипуляция DOM [cite: 202]
        });
    }

    renderSongs(songData);

    // 3. Работа с Local Storage (Бонусные баллы) [cite: 182, 205, 223]
    window.toggleFavorite = (id) => {
        let favorites = JSON.parse(localStorage.getItem('favSongs')) || [];
        
        // Условный оператор (If-Else) [cite: 200, 222]
        if (favorites.includes(id)) {
            alert("This song is already in your favorites!");
        } else {
            favorites.push(id);
            localStorage.setItem('favSongs', JSON.stringify(favorites));
            alert("Added to Local Storage! (Check Application tab in DevTools)");
        }
    };

    // 4. Поиск (Event Listener: keyup) [cite: 201, 222]
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = songData.filter(s => s.artist.toLowerCase().includes(term));
            renderSongs(filtered);
        });
    }
});  
// Находим кнопку по ID
const themeBtn = document.getElementById('theme-toggle');

// Добавляем слушатель события клика 
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        // Меняем стиль фона и текста [cite: 202]
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            document.body.style.backgroundColor = "#2c3e50";
            document.body.style.color = "white";
        } else {
            document.body.style.backgroundColor = "#f0f2f5";
            document.body.style.color = "#333";
        }
        console.log("Theme changed!"); 
    });
} 