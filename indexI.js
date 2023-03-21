// Get all elements with class "playlist-choice"
const playlistChoices = document.querySelectorAll(".playlist-choice");

// Loop through each element and add event listener
playlistChoices.forEach((choice) => {
  choice.addEventListener("click", () => {
    console.log("hello")
    window.location.href = "index5.html";
  });
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

//selectedGenre[] 

// Personalized genre to show
const genre = "Pop";

// Filter personalized playlists by genre and flatten the array
const personalizedPlaylists = playlistTitles.filter(playlist => playlist[0].includes(genre))
  .reduce((acc, curr) => acc.concat(curr.slice(1)), []);

  
const titles = document.querySelectorAll("h2");
personalizedPlaylists.forEach((title, index) => {
  if (index < titles.length) {
    titles[index].textContent = title;
  }
});

/*// Randomly choose personalized playlist titles
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