const playBtn=document.getElementById("playBtn");

const pauseBtn=document.getElementById("pauseBtn");

const mood=document.getElementById("mood");

const audio=document.getElementById("audio");


const music={

happy:
"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",

relax:
"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",

sad:
"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",

romantic:
"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"

};


playBtn.addEventListener("click",()=>{

let selectedMood=
mood.value;

audio.src=
music[selectedMood];

audio.play();

playBtn.innerHTML=
"🎶 Playing...";

});


pauseBtn.addEventListener("click",()=>{

audio.pause();

playBtn.innerHTML=
"▶️ Generate Music";

});