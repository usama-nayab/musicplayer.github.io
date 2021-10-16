const music = document.querySelector('audio');
const img = document.querySelector('img');
const title = document.getElementById('song');
const artist = document.getElementById('artist');
const play = document.getElementById('play');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const songs = [
    {
    name: 'music-1',
    title: 'Iltja',
    artist: 'Jhokey'
    },
    {
    name: 'music-2',
    title: 'Gawah Rehna',
    artist: 'Talhah Anjum'
    },
    {
    name: 'music-3',
    title: 'Scars||Screws',
    artist: 'Shamoon'
    }
];

let isPlaying = false;

// for playing music
const playMusic = () => {
    music.play();
    isPlaying = true;
    play.classList.replace("fa-play" , "fa-pause");
    img.classList.add('anime');
    
};

// for pausing music
const pauseMusic = () => {
    music.pause();
    isPlaying = false;
    play.classList.replace("fa-pause" , "fa-play");
    img.classList.remove('anime');
    
};

// play and pause functionality
play.addEventListener('click' , () => {
    isPlaying? pauseMusic() : playMusic();
})

// loading song
const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    img.src = `images/${songs.name}.jpg`;
    music.src = `music/${songs.name}.mp3`;
};

let songIndex = 0;

// for next music
const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

// for previous music
const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

next.addEventListener('click' , nextSong);
prev.addEventListener('click' , prevSong);