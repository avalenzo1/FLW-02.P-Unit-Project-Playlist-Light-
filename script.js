// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let displayImage = document.querySelector(".display-image");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayLink = document.querySelector(".display-link");

// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

let imageList = ["https://media.npr.org/assets/img/2016/08/22/frank-ocean-blond_sq-39d3ea0f3d905cd9c9674e7ebfb68ffcc4dbb441.jpg", "https://f4.bcbits.com/img/a4099353330_10.jpg", "https://upload.wikimedia.org/wikipedia/en/1/1b/Joji_-_Nectar.png", "https://i.scdn.co/image/ab67616d0000b2733146654ae759334b9f24a2f5", "https://apollo2.dl.playstation.net/cdn/UP4360/CUSA02608_00/N4O4O40BNaI8rm6rh4yOQIsNgNK9oGhd.png"];
let songList = ["Nights", "恢复", "NITROUS", "Turnin’ Me Up", "The Sea"];
let artistList = ["Frank Ocean", "2814", "Joji", "BJ The Chicago Kid", "Floex"];
let urlList = ["https://music.youtube.com/watch?v=Fx3b85eDQvw&feature=share", "https://music.youtube.com/watch?v=CwJx3Dbh4e8&feature=share", "https://music.youtube.com/watch?v=0SGe9cjnqxg&feature=share", "https://music.youtube.com/watch?v=QgzTaKA7MnM&feature=share", "https://music.youtube.com/watch?v=PmzKsWSkROQ&feature=share"];


//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

  // task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
  let userImage = image.value;
  let userSong = songName.value;
  let userArtist = artist.value;
  let userLink = songLink.value;

  // task 10: use `.push()` to add each input value to the correct array.

  imageList.push(userImage);
  songList.push(userSong);
  artistList.push(userArtist);
  urlList.push(userLink);
}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

  // task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.

  for (let image of imageList) {
    displayImage.insertAdjacentHTML('beforeend', `<img src='${image}'>`);
  }

  for (let song of songList) {
    displaySong.insertAdjacentHTML('beforeend', `<p>${song}</p>`);
  }

  for (let artist of artistList) {
    displayArtist.insertAdjacentHTML('beforeend', `<p>${artist}</p>`);
  }

  for (let url of urlList) {
    displayLink.insertAdjacentHTML('beforeend', `<a href="${url}">${url}</a>`);
  }
}





// click event to add and display songs
add.onclick = function() {
  emptyDisplay();
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
