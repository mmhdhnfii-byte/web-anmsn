const audio = document.getElementById("audio");
const btn = document.getElementById("playBtn");
const lyricsEl = document.getElementById("lyrics");

btn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    btn.textContent = "Pause";
  } else {
    audio.pause();
    btn.textContent = "Play";
  }
});

// lirik manual (sementara)
const lyrics = [
  "Baris lirik pertama",
  "Baris lirik kedua",
  "Baris lirik ketiga"
];

let i = 0;
setInterval(() => {
  lyricsEl.textContent = lyrics[i];
  i = (i + 1) % lyrics.length;
}, 3000);
