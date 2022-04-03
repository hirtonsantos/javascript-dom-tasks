const form = document.querySelector("form");
const searchInput = document.querySelector("input");
const buttonElement = document.querySelector("form button");
const songsContainer = document.querySelector("#songs-container")


const insertSongsPage = (songsInfo) => {
  songsContainer.innerHTML = songsInfo.data.map((song) =>
    `<li class="song">
      <span class="song-artist"><strong>${song.artist.name}</strong> - ${song.title}</span>
      <button class="btn" 
      data-artist="${song.artist.name}"
      data-song-title="${song.title}"
      >
      Ver letra
      </button>
    </li>`
  ).join('')
}



const fetchSongs = async (term) => {
  const response = await fetch(`${apiURL}/suggest/${term}`);
  const data = await response.json();

  insertSongsPage(data)

  console.log(data)

  // fetch("https://api.lyrics.ovh/suggest/Led Zeppelin")
  // .then(response => response.json())
  // .then(data => console.log(data))
};


form.addEventListener("submit", (event) => {
  event.preventDefault()

  const searchTerm = searchInput.value.trim()

  if (!searchTerm){
    songsContainer.innerHTML = 
    `<li class="warning-message">Por favor, digite uma música válida</li>`
  }

  fetchSongs(searchTerm)
})

const fetchLyrics = async (artist, songTitle) => {
  const response = await fetch(`${apiURL}/v1/${artist}/${songTitle}`)
  const data = await response.json()
  const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>')

  songsContainer.innerHTML = 
  `
  <li class="lyrics-container">
    <h2><strong>${artist}</strong> - ${artist}</h2>
    <p class="lyrics">${lyrics}</p>
  </li>
  `
}

songsContainer.addEventListener("click", (event) => {
  event.preventDefault()

  const artist = event.target.dataset.artist
  const songTitle = event.target.dataset.songTitle

  fetchLyrics(artist, songTitle)

})

