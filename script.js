const translateBtn = document.getElementById("translateBtn");
const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");

const source = document.getElementById("source");
const target = document.getElementById("target");

const swap = document.getElementById("swap");
const copyBtn = document.getElementById("copyBtn");
const speakBtn = document.getElementById("speakBtn");

translateBtn.addEventListener("click", async ()=>{

let text=inputText.value.trim();

if(text===""){
alert("Please enter text");
return;
}

outputText.value="Translating...";

try{

let response = await fetch(
`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${source.value}|${target.value}`
);

let data=await response.json();

outputText.value=data.responseData.translatedText;

}
catch(error){

outputText.value="Translation Failed";

}

});

swap.addEventListener("click",()=>{

let temp=source.value;
source.value=target.value;
target.value=temp;

});

copyBtn.addEventListener("click",()=>{

navigator.clipboard.writeText(outputText.value);

alert("Copied!");

});

speakBtn.addEventListener("click",()=>{

let textToSpeak = outputText.value || inputText.value;

if(textToSpeak===""){
alert("No text to speak");
return;
}

let speech = new SpeechSynthesisUtterance(textToSpeak);

const languageMap = {
en:"en-US",
hi:"hi-IN",
kn:"kn-IN",
ml:"ml-IN",
ta:"ta-IN"
};

speech.lang = languageMap[target.value] || "en-US";

window.speechSynthesis.cancel();
window.speechSynthesis.speak(speech);

});