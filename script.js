let progress = document.getElementById("progress"); // Progress bar element
let ctrlIcon = document.getElementById("ctrlIcon"); // Play/pause control icon
let song = document.getElementById("Song"); // Audio element

// When metadata of the audio is loaded, set the progress bar's maximum value to the duration of the song
song.onloadedmetadata = function () {
    progress.max = song.duration; // Set the maximum value of the progress bar to the duration of the song (in seconds)
    progress.value = song.currentTime; // Set the current value of the progress bar to indicate that it's at the beginning
}

// Function to play or pause the song
function playPause() {
    // If the control icon is set to pause, pause the song and change the icon to play
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause(); // Pause the audio
        ctrlIcon.classList.add("fa-play"); // Change the control icon to play
        ctrlIcon.classList.remove("fa-pause"); // Remove the pause icon
    } else { // If the control icon is set to play, play the song and change the icon to pause
        song.play(); // Play the audio
        ctrlIcon.classList.add("fa-pause"); // Change the control icon to pause
        ctrlIcon.classList.remove("fa-play"); // Remove the play icon
    }
}

// If the song is playing, update the progress bar every 100 milliseconds
if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime; // Update the progress bar value to reflect the current time of the song
    }, 100);
}

// Event listener for when the progress bar value changes
progress.onchange = function(){
    song.play(); // Start playing the audio
    song.currentTime = progress.value; // Set the current time of the audio to the value of the progress bar
    ctrlIcon.classList.add("fa-pause"); // Change the control icon to pause
    ctrlIcon.classList.remove("fa-play"); // Remove the play icon
}