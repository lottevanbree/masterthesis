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
    window.location.href = "index3.html";
    selectedGenres = [];
  } else {
    console.log(selectedGenres);
  }
}

/*
// page 4
const playlistChoices = document.querySelectorAll(".playlist-choice");

playlistChoices.forEach((choice) => {
  choice.addEventListener("click", () => {
    console.log("hello")
    window.location.href = "index5.html";
  });
});

/*const titles = ["Classical Music You'll Love", "Your Top Repeats", "Classical Collection Curated for You", "Your Daily Mix"];

const h2Elements = document.querySelectorAll("h2");
const usedTitles = [];

h2Elements.forEach((h2) => {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * titles.length);
  } while (usedTitles.includes(randomIndex));
  usedTitles.push(randomIndex);
  h2.textContent = titles[randomIndex];
});

const playlistTitles = [  // Personalized playlists  
  [    "Pop Picks Just for You",    "Your Daily Pop Mix",    "Pop Jams Tailored to You",    "Pop Discoveries for You",    "Pop Bangers Handpicked for You"  ],
  [    "Your Personal Rock Journey",    "Rock Essentials for You",    "Rock Classics Curated for You",    "Your Rock Favorites",    "Rock Hits Tailored to You"  ],
  [    "Your Daily Hip Hop Mix",    "Hip Hop Discoveries for You",    "Hip Hop Essentials Tailored to You",    "Hip Hop Gems Handpicked for You",    "Your Personal Hip Hop Collection"  ],
  [    "Your Electronic Essentials",    "Electronic Discoveries for You",    "Personalized Electronic Mix",    "Electronic Gems Tailored to You",    "Electronic Beats Just for You"  ],
  // Non-personalized playlists
  [    "Top Pop Hits of All Time",    "The Ultimate Pop Playlist",    "Best Pop Songs of the Decade",    "Classic Pop Anthems",    "Pop Party Mix"  ],
  [    "Greatest Rock Hits of All Time",    "The Ultimate Rock Playlist",    "Best Classic Rock Songs",    "Hard Rock Anthems",    "Rock Road Trip Mix"  ],
  [    "Top Hip Hop Hits of All Time",    "The Ultimate Hip Hop Playlist",    "Best Hip Hop Songs of the Decade",    "Classic Hip Hop Anthems",    "Hip Hop Party Mix"  ],
  [    "Top Electronic Hits of All Time",    "The Ultimate Electronic Playlist",    "Best Electronic Songs of the Decade",    "Classic Electronic"  ]
];

// Personalized genre to show
const genre = "Pop";

// Filter personalized playlists by genre and flatten the array
const personalizedPlaylists = playlistTitles.filter(playlist => playlist[0].includes(genre))
  .reduce((acc, curr) => acc.concat(curr.slice(1)), []);

// Display personalized playlist titles in h2 elements
const titles = document.querySelectorAll("h2");
personalizedPlaylists.forEach((title, index) => {
  if (index < titles.length) {
    titles[index].textContent = title;
  }
});

// Randomly choose personalized playlist titles
const personalizedTitles = playlistTitles.slice(0, 4).map((playlist) => {
  const randomIndex = Math.floor(Math.random() * playlist.length);
  return playlist[randomIndex] || nonPersonalizedTitles[Math.floor(Math.random() * nonPersonalizedTitles.length)];
});

// Randomly choose non-personalized playlist titles
const nonPersonalizedTitles = playlistTitles.slice(4).map((playlist) => {
  const randomIndex = Math.floor(Math.random() * playlist.length);
  return playlist[randomIndex];
});

// Randomly choose a mix of personalized and non-personalized playlist titles
const mixedTitles = [];
for (let i = 0; i < 4; i++) {
  if (Math.random() < 0.5) {
    // Choose a personalized playlist title
    const playlist = playlistTitles[i];
    const randomIndex = Math.floor(Math.random() * playlist.length);
    mixedTitles.push(playlist[randomIndex]);
  } else {
    // Choose a non-personalized playlist title
    const playlist = playlistTitles[i + 4];
    const randomIndex = Math.floor(Math.random() * playlist.length);
    mixedTitles.push(playlist[randomIndex]);
  }
}

// Set the chosen playlist titles to the H2 elements in the HTML
document.getElementById("title1").textContent = mixedTitles[0];
document.getElementById("title2").textContent = mixedTitles[1];
document.getElementById("title3").textContent = mixedTitles[2];
document.getElementById("title4").textContent = mixedTitles[3];*/