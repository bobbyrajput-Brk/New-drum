// Sounds mapping
const sounds = {
    kick: "sounds/kick.mp3",
    snare: "sounds/snare.mp3",
    hihat: "sounds/hihat.mp3",
    tom1: "sounds/tom1.mp3",
    tom2: "sounds/tom2.mp3",
    cymbal: "sounds/cymbal.mp3",
    clap: "sounds/clap.mp3"
};

// Play sound function
function playSound(id) {
    const audio = new Audio(sounds[id]);
    audio.play();
}

// Event listeners for buttons
document.querySelectorAll('.drum').forEach(button => {
    button.addEventListener('click', () => {
        playSound(button.id);
    });
});

// Recording functionality
let recording = [];
let isRecording = false;

document.getElementById('record').addEventListener('click', () => {
    isRecording = !isRecording;
    recording = [];
    alert(isRecording ? "Recording started!" : "Recording stopped!");
});

document.getElementById('play').addEventListener('click', () => {
    if (recording.length === 0) {
        alert("No recording found!");
        return;
    }
    recording.forEach((note, index) => {
        setTimeout(() => playSound(note), index * 500);
    });
});

// Capture clicks for recording
document.querySelectorAll('.drum').forEach(button => {
    button.addEventListener('click', () => {
        if (isRecording) recording.push(button.id);
    });
});