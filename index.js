// page 2


/*
function fn1() {
  var a1 = document.getElementById("a1");
  var a2 = document.getElementById("a2");
  
  if (a1.checked==true) {
    selectedGenres.push(a1.name);
    console.log(selectedGenres);
    console.log("yes")
  } else if (a2.checked==true){
    console.log('no')
  } else { 
    alert("Please make sure all sections are filled in.");
  }
}*/
let selectedGenres = [];
function fn1() {
  const table = document.querySelector('#musicForm table');
  const rows = document.querySelectorAll('.question');

  for (let i = 0; i < rows.length; i++) {
    const inputs = rows[i].querySelectorAll('input');

    if (inputs[0].checked) {
      selectedGenres.push(inputs[0].name);
    }

    if (inputs[1].checked) {
      selectedGenres.push(inputs[1].name);
    }
  }

  if (selectedGenres.length < (rows.length)) {
    alert("Please make sure all sections are filled in.");
    selectedGenres = [];
  } 

  if (selectedGenres.length === (rows.length)) {
    // All questions have been answered
    localStorage.setItem('selectedGenres', JSON.stringify(selectedGenres));
    window.location.href = "index3.html";
    selectedGenres = [];
  } else {
    console.log(selectedGenres);
  }
}



// page 4

//selectedGenre[] -> should be stored to use at page 4
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
const playlistChoices = document.querySelectorAll(".playlist-choice");

// Loop through each element and add event listener
playlistChoices.forEach((choice) => {
  choice.addEventListener("click", () => {
    console.log("hello")
    window.location.href = "index5.html";
  });
});

const pPlaylistTitles = {  // Personalized playlists  
  "Pop":        [    "Pop Picks Just for You",    "Your Daily Pop Mix",    "Pop Jams Tailored to You",    "Pop Discoveries for You",    "Pop Bangers Handpicked for You"  ],
  "Rock":       [    "Your Personal Rock Journey",    "Rock Essentials for You",    "Rock Classics Curated for You",    "Your Rock Favorites",    "Rock Hits Tailored to You"  ],
  "Hip Hop":    [    "Your Daily Hip Hop Mix",    "Hip Hop Discoveries for You",    "Hip Hop Essentials Tailored to You",    "Hip Hop Gems Handpicked for You",    "Your Personal Hip Hop Collection"  ],
  "Electronic": [    "Your Electronic Essentials",    "Electronic Discoveries for You",    "Personalized Electronic Mix",    "Electronic Gems Tailored to You",    "Electronic Beats Just for You"  ] ,
  "Classic":        [    "Pop Picks Just for You",    "Your Daily Pop Mix",    "Pop Jams Tailored to You",    "Pop Discoveries for You",    "Pop Bangers Handpicked for You"  ],
  "Dance":       [    "Your Personal Rock Journey",    "Rock Essentials for You",    "Rock Classics Curated for You",    "Your Rock Favorites",    "Rock Hits Tailored to You"  ],
  "Jazz":    [    "Your Daily Hip Hop Mix",    "Hip Hop Discoveries for You",    "Hip Hop Essentials Tailored to You",    "Hip Hop Gems Handpicked for You",    "Your Personal Hip Hop Collection"  ],
  "Country": [    "Your Electronic Essentials",    "Electronic Discoveries for You",    "Personalized Electronic Mix",    "Electronic Gems Tailored to You",    "Electronic Beats Just for You"  ] ,
  "Indie":    [    "Your Daily Hip Hop Mix",    "Hip Hop Discoveries for You",    "Hip Hop Essentials Tailored to You",    "Hip Hop Gems Handpicked for You",   "Your Personal Hip Hop Collection"  ],
  "Metal": [    "Your Electronic Essentials",    "Electronic Discoveries for You",    "Personalized Electronic Mix",    "Electronic Gems Tailored to You",    "Electronic Beats Just for You"  ] 
  };
 
 const npPlaylistTitles = { // Non Personalized playlists
  "Pop":        [    "Top Pop Hits of All Time",    "The Ultimate Pop Playlist",    "Best Pop Songs of the Decade",    "Classic Pop Anthems",    "Pop Party Mix"  ],
  "Rock":       [    "Greatest Rock Hits of All Time",    "The Ultimate Rock Playlist",    "Best Classic Rock Songs",    "Hard Rock Anthems",    "Rock Road Trip Mix"  ],
  "Hip Hop":    [    "Top Hip Hop Hits of All Time",    "The Ultimate Hip Hop Playlist",    "Best Hip Hop Songs of the Decade",    "Classic Hip Hop Anthems",    "Hip Hop Party Mix"  ],
  "Electronic": [    "Top Electronic Hits of All Time",    "The Ultimate Electronic Playlist",    "Best Electronic Songs of the Decade",    "Classic Electronic"  ]
 };


// Personalized genre to show
const randomSelectedGenre = "Rock"; //should be the array selectedGenre[] created at page2
// const genreIndex = ["Pop", "Rock", "Hip Hop", "Electronic"].indexOf(randomSelectedGenre); //in the array should be the selectedGenre[];
//const randomSelectedGenre = useSelectedGenres
//const genreIndex = ["Pop", "Rock", "Hip Hop", "Electronic"].indexOf(randomSelectedGenre); //in the array should be the selectedGenre[];

// Filter personalized playlists by genre and flatten the array
const personalizedPlaylists = pPlaylistTitles[randomSelectedGenre];
const nonpersonalizedPlaylist = npPlaylistTitles;
const titles = document.querySelectorAll("h2");

// Assign random personalized titles to h2 elements
titles.forEach((title) => {
  const obj_keys = Object.keys(personalizedPlaylists)
  const randomIndex = obj_keys[Math.floor(Math.random() *obj_keys.length)];
  title.innerHTML = personalizedPlaylists[randomIndex];
});

//selectedGenre[] 

/* Personalized genre to show
const genre = selectedGenre;

>>>>>>> 4e9c9a1c8bd384ca5e739eb8461ba31276d42613
// Filter personalized playlists by genre and flatten the array
const personalizedPlaylists = pPlaylistTitles;
const nonpersonalizedPlaylist = npPlaylistTitles;*/