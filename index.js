

//page 4

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
  const npPlaylistTitles = [ //non personalized titles
    "Top Pop Hits of All Time", "The Ultimate Pop Playlist",  "Best Pop Songs of the Decade", "Classic Pop Anthems", "Pop Party Mix", "Greatest Rock Hits of All Time", "The Ultimate Rock Playlist", "Best Classic Rock Songs", "Hard Rock Anthems", "Rock Road Trip Mix", "Top Hip Hop Hits of All Time", "The Ultimate Hip Hop Playlist",  "Best Hip Hop Songs of the Decade",  "Classic Hip Hop Anthems", "Hip Hop Party Mix", "Top Electronic Hits of All Time", "The Ultimate Electronic Playlist",  "Best Electronic Songs of the Decade", "Classic Electronic"
  ];
 
/*const storedGenres = localStorage.getItem('selectedGenres');

const useSelectedGenres = storedGenres ? JSON.parse(storedGenres) : null;
console.log("selected:", useSelectedGenres);

const allSelectedGenres = useSelectedGenres.flatMap((x) => pPlaylistTitles[x]);
const personalizedPlaylists = allSelectedGenres;
let selectedItems = [];

document.querySelectorAll(".personalizedTitle").forEach(function(title, index) {
  const randomIndex = Math.floor(Math.random() * personalizedPlaylists.length);
  const selectedPlaylistH2 = personalizedPlaylists.splice(randomIndex, 1)[0];
  
  selectedItems.push(selectedPlaylistH2);

  delete selectedPlaylistH2[randomIndex];

  console.log(selectedPlaylistH2);

  sessionStorage.setItem('selectedPlaylist', JSON.stringify(selectedPlaylistH2));

  title.innerHTML = selectedPlaylistH2;
});*/

//PERSONALIZED TITLES

const storedGenres = localStorage.getItem('selectedGenres');
const useSelectedGenres = storedGenres ? JSON.parse(storedGenres) : null;
console.log("selected:", useSelectedGenres);

const allSelectedGenres = useSelectedGenres.flatMap((x) => pPlaylistTitles[x]);
const personalizedPlaylists = allSelectedGenres;

let selectedItems = [];

const storedSelectedPlaylistH2 = JSON.parse(sessionStorage.getItem('selectedPlaylist'));
if (storedSelectedPlaylistH2) {
  selectedItems.push(storedSelectedPlaylistH2);
  console.log(storedSelectedPlaylistH2);

  // display the selected playlist title
  document.querySelectorAll(".personalizedTitle").forEach(function(title, index) {
    title.innerHTML = storedSelectedPlaylistH2[index];
    console.log('1')
  });
} else {
  console.log("selected:", useSelectedGenres);
  

  const selectedTitles = [];
  while (selectedTitles.length < 4) {
    const randomIndex = Math.floor(Math.random() * personalizedPlaylists.length);
    const title = personalizedPlaylists[randomIndex];
    if (!selectedTitles.includes(title)) {
      selectedTitles.push(title);
    }
  }
  console.log(selectedTitles);
  
  // assign each title element to a different title from the selectedTitles array
  document.querySelectorAll(".personalizedTitle").forEach(function(title, index) {
    title.innerHTML = selectedTitles[index];
    console.log('2')
  });
  
  // save the selected titles array to session storage
  sessionStorage.setItem('selectedPlaylist', JSON.stringify(selectedTitles));
  
  // save the selected items array to session storage
  selectedItems = selectedTitles;
}


//NON PERSONALIZED TITLES


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



/*const randomSelectedGenre = useSelectedGenres[Math.floor(Math.random() * useSelectedGenres.length)];

console.log(allSelectedGenres);

const personalizedPlaylists = pPlaylistTitles[randomSelectedGenre];
const nonpersonalizedPlaylist = npPlaylistTitles;
const titles = document.querySelectorAll(".personalizedTitle");

let selectedItems = [];

titles.forEach((title) => {
  const obj_keys = Object.keys(personalizedPlaylists);
  const randomIndex = obj_keys[Math.floor(Math.random() * obj_keys.length)];
  const selectedPlaylistH2 = personalizedPlaylists[randomIndex];
  
  selectedItems.push(selectedPlaylistH2);

  delete personalizedPlaylists[randomIndex];

  console.log(selectedPlaylistH2);

  localStorage.setItem('selectedPlaylist', JSON.stringify(selectedPlaylistH2));

  title.innerHTML = selectedPlaylistH2;
});

localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
*/

//page 4II
/*const nonpersonalizedPlaylist = npPlaylistTitles;
document.querySelectorAll(".nonPersonalizedTitle").forEach(function(el) {
const randomIndex = Math.floor(Math.random() * npPlaylistTitles.length);
const randomTitle = npPlaylistTitles[randomIndex]; 
el.innerHTML = randomTitle; 
});*/

// Store selected genre and personalized playlist title in local storage page 4
localStorage.setItem('selectedGenre', allSelectedGenres);
localStorage.setItem('personalizedTitle', JSON.stringify(personalizedPlaylists));


//page 5i



//page 4IV 


//page 6
const myForm = document.getElementById('myForm');
const payload = new FormData(myForm);
console.log([...payload]);

myForm.addEventListener('click', function(e) {
e.preventDefault();

const inputs = document.querySelectorAll('input:checked');
const values = [];
inputs.forEach(input => {
values.push('Name: ' + input.name + ' Value: ' + input.value);
  });

  console.log(values);

  fetch('http://httpbin.org/post'//use own server when ready AWS
  , {
    method: "POST",
    body: payload,
  })

  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
});
