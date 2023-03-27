// page 2

let selectedGenres = [];

function fn1() {
  let selectedNumber = 0;
  const table = document.querySelector('#musicForm table');
  const rows = document.querySelectorAll('.question');

  for (let i = 0; i < rows.length; i++) {
    const inputs = rows[i].querySelectorAll('input');
    if (inputs[0].checked) {
      selectedGenres.push(inputs[0].name);
      selectedNumber++;
    }
    if (inputs[1].checked) {
      selectedNumber++;
    }
  }

  if (selectedNumber < (rows.length)) {
    alert("Please make sure all sections are filled in.");
    selectedGenres = [];
  } 

  if (selectedNumber === (rows.length)) {
    // All questions have been answered
    localStorage.setItem('selectedGenres', JSON.stringify(selectedGenres));
    window.location.href = "index3.html";
    selectedGenres = [];
  } else {
    console.log(selectedGenres);
  }
}

console.log(selectedGenres);

// page 3
function IorII() {
  const randomNum = Math.random();
  if (randomNum < 0.5) {
    window.location.href = "index4I.html";;
  } else {
    window.location.href = "index4II.html";
  }
}

// page 4I


// selectedGenre[] -> names of genre replaced by titles for that genre [pop, rock] -> 
// selectedGenres[ //pop [    "Pop Picks Just for You",    "Your Daily Pop Mix",    "Pop Jams Tailored to You",    "Pop Discoveries for You",    "Pop Bangers Handpicked for You"  ], //rock [titles]....]
// I - random all personalized
// II - random all non-personalized
// III - random p n p n
// IV - random n p n p
//titles are displayed in h2

const storedGenres = localStorage.getItem('selectedGenres');
const useSelectedGenres = storedGenres ? JSON.parse(storedGenres) : null;

// Get all elements with class "playlist-choice"
const playlistChoicesI = document.querySelectorAll(".firstChoice");

// Loop through each element and add event listener
playlistChoicesI.forEach((choice) => {
  choice.addEventListener("click", () => {
    console.log("hello")
    window.location.href = "index5.html";
  });
});

// Get all elements with class "playlist-choice"
const playlistChoicesII = document.querySelectorAll(".secondChoice");

// Loop through each element and add event listener
playlistChoicesII.forEach((choice) => {
  choice.addEventListener("click", () => {
    console.log("hello")
    window.location.href = "index5-2.html";
  });
});

const playlistChoices = document.querySelectorAll(".playlist-choice");

const pPlaylistTitles = {  // Personalized playlists  
  "pop":        [    "Pop Picks Just for You",    "Your Daily Pop Mix",    "Pop Jams Tailored to You",    "Pop Discoveries for You",    "Pop Bangers Handpicked for You"  ],
  "rock":       [    "Your Personal Rock Journey",    "Rock Essentials for You",    "Rock Classics Curated for You",    "Your Rock Favorites",    "Rock Hits Tailored to You"  ],
  "R&B":    [    "Your Daily Hip Hop Mix",    "Hip Hop Discoveries for You",    "Hip Hop Essentials Tailored to You",    "Hip Hop Gems Handpicked for You",    "Your Personal Hip Hop Collection"  ],
  "electronic": [    "Your Electronic Essentials",    "Electronic Discoveries for You",    "Personalized Electronic Mix",    "Electronic Gems Tailored to You",    "Electronic Beats Just for You"  ] ,
  "classical":        [    "Pop Picks Just for You",    "Your Daily Pop Mix",    "Pop Jams Tailored to You",    "Pop Discoveries for You",    "Pop Bangers Handpicked for You"  ],
  "dance":       [    "Your Personal Rock Journey",    "Rock Essentials for You",    "Rock Classics Curated for You",    "Your Rock Favorites",    "Rock Hits Tailored to You"  ],
  "jazz":    [    "Your Daily Hip Hop Mix",    "Hip Hop Discoveries for You",    "Hip Hop Essentials Tailored to You",    "Hip Hop Gems Handpicked for You",    "Your Personal Hip Hop Collection"  ],
  "country": [    "Your Electronic Essentials",    "Electronic Discoveries for You",    "Personalized Electronic Mix",    "Electronic Gems Tailored to You",    "Electronic Beats Just for You"  ] ,
  "indie":    [    "Your Daily Hip Hop Mix",    "Hip Hop Discoveries for You",    "Hip Hop Essentials Tailored to You",    "Hip Hop Gems Handpicked for You",   "Your Personal Hip Hop Collection"  ],
  "metal": [    "Your Electronic Essentials",    "Electronic Discoveries for You",    "Personalized Electronic Mix",    "Electronic Gems Tailored to You",    "Electronic Beats Just for You"  ] 
  };
  const npPlaylistTitles = [
    "Top Pop Hits of All Time",
    "The Ultimate Pop Playlist",
    "Best Pop Songs of the Decade",
    "Classic Pop Anthems",
    "Pop Party Mix",
    "Greatest Rock Hits of All Time",
    "The Ultimate Rock Playlist",
    "Best Classic Rock Songs",
    "Hard Rock Anthems",
    "Rock Road Trip Mix",
    "Top Hip Hop Hits of All Time",
    "The Ultimate Hip Hop Playlist",
    "Best Hip Hop Songs of the Decade",
    "Classic Hip Hop Anthems",
    "Hip Hop Party Mix",
    "Top Electronic Hits of All Time",
    "The Ultimate Electronic Playlist",
    "Best Electronic Songs of the Decade",
    "Classic Electronic"
  ];
 

console.log("selected:", useSelectedGenres);
// Personalized genre to show
const randomSelectedGenre = useSelectedGenres[Math.floor(Math.random() * useSelectedGenres.length)];

console.log(randomSelectedGenre);
// Filter personalized playlists by genre and flatten the array
const personalizedPlaylists = pPlaylistTitles[randomSelectedGenre];
const nonpersonalizedPlaylist = npPlaylistTitles;
const titles = document.querySelectorAll("h2");

// Assign random personalized titles to h2 elements
titles.forEach((title) => {
  const obj_keys = Object.keys(personalizedPlaylists)
  const randomIndex = obj_keys[Math.floor(Math.random() *obj_keys.length)];
  title.innerHTML = personalizedPlaylists[randomIndex];
  delete personalizedPlaylists[randomIndex];
});

//page 4II
document.querySelectorAll(".randomTitle").forEach(function(el) {
const randomIndex = Math.floor(Math.random() * npPlaylistTitles.length);
const randomTitle = npPlaylistTitles[randomIndex]; 
el.innerHTML = randomTitle; 
});