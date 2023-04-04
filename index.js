

//page 4
/*
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
  const npPlaylistTitles = [ //non personalized titles
    "Top Pop Hits of All Time", "The Ultimate Pop Playlist",  "Best Pop Songs of the Decade", "Classic Pop Anthems", "Pop Party Mix", "Greatest Rock Hits of All Time", "The Ultimate Rock Playlist", "Best Classic Rock Songs", "Hard Rock Anthems", "Rock Road Trip Mix", "Top Hip Hop Hits of All Time", "The Ultimate Hip Hop Playlist",  "Best Hip Hop Songs of the Decade",  "Classic Hip Hop Anthems", "Hip Hop Party Mix", "Top Electronic Hits of All Time", "The Ultimate Electronic Playlist",  "Best Electronic Songs of the Decade", "Classic Electronic"
  ];

const storedGenres = localStorage.getItem('selectedGenres');
const useSelectedGenres = storedGenres ? JSON.parse(storedGenres) : null;
console.log("selected:", useSelectedGenres);
console.log('hi');

const allSelectedGenres = useSelectedGenres.flatMap((x) => pPlaylistTitles[x]);
const personalizedPlaylists = allSelectedGenres;

let selectedItems = [];

const storedSelectedTitles = JSON.parse(sessionStorage.getItem('selectedTitles'));
if (storedSelectedTitles && storedSelectedTitles.length === 4) {
  // retrieve the selected titles from session storage
  selectedItems = storedSelectedTitles;

  // display the selected playlist titles
  document.querySelectorAll(".personalizedTitle").forEach(function(title, index) {
    title.innerHTML = storedSelectedTitles[index];
    console.log('1');
  });
} else {
  console.log("selected:", useSelectedGenres);

  // generate a new set of selected titles
  const selectedTitles = [];
  while (selectedTitles.length < 4 && personalizedPlaylists.length > 0) {
    const randomIndex = Math.floor(Math.random() * personalizedPlaylists.length);
    const title = personalizedPlaylists.splice(randomIndex, 1)[0];
    selectedTitles.push(title);
  }
  console.log(selectedTitles);

  // assign each title element to a different title from the selectedTitles array
  document.querySelectorAll(".personalizedTitle").forEach(function(title, index) {
    title.innerHTML = selectedTitles[index];
    console.log('2');
  });

  // save the selected titles array to session storage
  sessionStorage.setItem('selectedTitles', JSON.stringify(selectedTitles));
  console.log(selectedTitles);

  // save the selected items array
  selectedItems = selectedTitles;
}



//NON PERSONALIZED TITLES

/*
const storedNonPersonalizedTitles = JSON.parse(sessionStorage.getItem('selectedNpPlaylist'));
let selectedItemsNp = [];

if (storedNonPersonalizedTitles) {
  // display the selected titles from session storage
  document.querySelectorAll(".nonPersonalizedTitle").forEach(function(title, index) {
    title.innerHTML = storedNonPersonalizedTitles[index];
  });

  selectedItemsNp = selectedItemsNp.concat(storedNonPersonalizedTitles);
  console.log(storedNonPersonalizedTitles);
} else {
  // if titles are not stored in session storage, pick new ones
  const nonpersonalizedPlaylist = npPlaylistTitles;
  const selectedTitlesNP = [];

  while (selectedTitlesNP.length < 4) {
    const randomIndex = Math.floor(Math.random() * nonpersonalizedPlaylist.length);
    const title = nonpersonalizedPlaylist[randomIndex];
    if (!selectedTitlesNP.includes(title)) {
      selectedTitlesNP.push(title);
    }
  }
  
  // assign each title element to a different title from the selectedTitles array
  document.querySelectorAll(".nonPersonalizedTitle").forEach(function(title, index) {
    title.innerHTML = selectedTitlesNP[index];
    
  });
  
  // save the selected titles array to session storage
  sessionStorage.setItem('selectedNpPlaylist', JSON.stringify(selectedTitlesNP));
  
  // save the selected items array to session storage
  selectedItemsNp = selectedItemsNp.concat(selectedTitlesNP);
}

sessionStorage.setItem('selectedItemsNp', JSON.stringify(selectedItemsNP));
console.log(storedNonPersonalizedTitles);

// Store selected genre and personalized playlist title in local storage page 4
localStorage.setItem('selectedGenre', allSelectedGenres);

