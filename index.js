//page 4
const storedGenres = localStorage.getItem('selectedGenres');
const useSelectedGenres = storedGenres ? JSON.parse(storedGenres) : null;
const title1 = document.getElementById('title1');
const title2 = document.getElementById('title2');
const title3 = document.getElementById('title3');
const title4 = document.getElementById('title4');

const playlistChoicesI = document.querySelectorAll(".firstChoice");

playlistChoicesI.forEach((choice) => {
  choice.addEventListener("click", () => {
    console.log("hello");
    const clickedTitleI = choice.querySelector('.title').innerHTML; 
    localStorage.setItem('clickedTitleI', clickedTitleI); 
    window.location.href = "index5.html";
  });
});

const playlistChoicesII = document.querySelectorAll(".secondChoice");

playlistChoicesII.forEach((choice) => {
  choice.addEventListener("click", () => {
    console.log("hello")
    const clickedTitleII = choice.querySelector('.title').innerHTML; 
    localStorage.setItem('clickedTitleII', clickedTitleII); 
    window.location.href = "index5-2.html";
  });
});

const playlistChoicesIsystem = document.querySelectorAll(".firstSystem");


//playlistChoicesIsystem.forEach((choice) => {
//  console.log("hello");
 // const titlesPresented = Array.from(choice.querySelectorAll('.title')).map((title) => title.innerHTML);
 // localStorage.setItem('titlesPresented', JSON.stringify(titlesPresented));
//  window.location.href = "index5i.html";
//});


const playlistChoices = document.querySelectorAll(".playlist-choice");

const pPlaylistTitles = {  // Personalized playlists  
  "pop":            [    "Pop Picks Just for You",    "Your Daily Pop Mix",    "Pop Jams Tailored to You",    "Pop Discoveries for You",   "Pop Bangers Handpicked for You"  ],
  "rock":           [    "Your Personal Rock Journey",    "Rock Essentials for You",    "Rock Classics Curated for You",    "Your Rock Favorites",    "Rock Hits Tailored to You"  ],
  "R&B":            [    "Your Daily R&B Mix",    "R&B Discoveries for You",    "R&B Essentials Tailored to You",    "R&B Gems Handpicked for You",    "Your Personal R&B Collection"  ],
  "electronic":     [    "Your Electronic Essentials",    "Electronic Discoveries for You",    "Personalized Electronic Mix",    "Electronic Gems Tailored to You",    "Electronic Beats Just for You"  ] ,
  "classical":      [    "Classical Just for You",    "Your Classical Mix",    "Classical Jams Tailored to You",    "Classical Discoveries for You",    "Classical Bangers Handpicked for You"  ],
  "dance":          [    "Your Personal Dance Journey",    "Dance Essentials for You",    "Dance Classics Curated for You",    "Your Dance Favorites",    "Dance Hits Tailored to You"  ],
  "jazz":          [    "Your Daily Jazz Mix",    "Jazz Discoveries for You",    "Jazz Essentials Tailored to You",    "Jazz Gems Handpicked for You",    "Your Personal Jazz Collection"  ],
  "country":       [    "Your Country Essentials",    "Country Discoveries for You",    "Personalized Country Mix",    "Country Gems Tailored to You",    "Country Beats Just for You"  ] ,
  "indie":         [    "Your Daily Indie Mix",    "Indie Discoveries for You",    "Indie Essentials Tailored to You",    "Indie Gems Handpicked for You",   "Your Personal Indie Collection"  ],
  "metal":         [    "Your Metal Essentials",    "Metal Discoveries for You",    "Personalized Metal Mix",    "Metal Gems Tailored to You",    "Metal Beats Just for You"  ] 
  };
  const npPlaylistTitles = [ "Top Pop Hits of All Time", "The Ultimate Pop Playlist",  "Best Pop Songs of the Decade", "Classic Pop Anthems", "Pop Party Mix", "Greatest Rock Hits of All Time", "The Ultimate Rock Playlist", "Best Classic Rock Songs", "Hard Rock Anthems", "Rock Road Trip Mix", "Top Hip Hop Hits of All Time", "The Ultimate Hip Hop Playlist",  "Best Hip Hop Songs of the Decade",  "Classic Hip Hop Anthems", "Hip Hop Party Mix", "Top Electronic Hits of All Time", "The Ultimate Electronic Playlist",  "Best Electronic Songs of the Decade", "Classic Electronic"
  ];
 

console.log("selected:", useSelectedGenres);
// Personalized genre to show
const randomSelectedGenre = useSelectedGenres[Math.floor(Math.random() * useSelectedGenres.length)];

console.log(randomSelectedGenre);
// Filter personalized playlists by genre and flatten the array
const personalizedPlaylists = pPlaylistTitles[randomSelectedGenre];
const nonpersonalizedPlaylist = npPlaylistTitles;
const titles = document.querySelectorAll(".personalizedTitle");

// Assign random personalized titles to h2 elements
/*
titles.forEach((title) => {
  const obj_keys = Object.keys(personalizedPlaylists)
  const randomIndex = obj_keys[Math.floor(Math.random() *obj_keys.length)];
  title.innerHTML = personalizedPlaylists[randomIndex];
  delete personalizedPlaylists[randomIndex];
});*/

//with local storage
let selectedItems = [];

titles.forEach((title) => {
  const obj_keys = Object.keys(personalizedPlaylists);
  const randomIndex = obj_keys[Math.floor(Math.random() * obj_keys.length)];
  const selectedPlaylistH2 = personalizedPlaylists[randomIndex];
  
  selectedItems.push(selectedPlaylistH2);

  delete personalizedPlaylists[randomIndex];

  console.log(selectedPlaylistH2);

  localStorage.setItem('selectedPlaylist', JSON.stringify(selectedPlaylistH2));

  // Update the title element with the selected item
  title.innerHTML = selectedPlaylistH2;
});

// Save the array of selected items to local storage
localStorage.setItem('selectedItems', JSON.stringify(selectedItems));


//page 4II
document.querySelectorAll(".nonPersonalizedTitle").forEach(function(el) {
const randomIndex = Math.floor(Math.random() * npPlaylistTitles.length);
const randomTitle = npPlaylistTitles[randomIndex]; 
el.innerHTML = randomTitle; 
});

// Store selected genre and personalized playlist title in local storage page 4
localStorage.setItem('selectedGenre', randomSelectedGenre);
localStorage.setItem('personalizedTitle', JSON.stringify(personalizedPlaylists));


//page 5i



//page 4IV 