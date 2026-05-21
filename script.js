const chatBox=document.getElementById("chatBox");
const userInput=document.getElementById("userInput");

const sendBtn=document.getElementById("sendBtn");
const voiceBtn=document.getElementById("voiceBtn");
const clearBtn=document.getElementById("clearBtn");


const replies={

"what is ai":
"🤖 Artificial Intelligence enables machines to think and learn like humans 🧠✨",

"what is machine learning":
"📊 Machine Learning is a branch of AI where systems learn from data.",

"what is nlp":
"💬 NLP helps computers understand human language.",

"what is chatgpt":
"🚀 ChatGPT is an AI chatbot that generates human-like responses.",

"what is deep learning":
"🧠 Deep Learning uses neural networks with multiple layers.",

"hello":
"👋 Hello Sharanya! Nice to see you 😊",

"hi":
"🌟 Hi! Ask me anything about AI 🤖"

};


function addMessage(message,className){

let msg=document.createElement("div");

msg.classList.add(className);

msg.innerText=message;

chatBox.appendChild(msg);

chatBox.scrollTop=chatBox.scrollHeight;

}


sendBtn.addEventListener("click",()=>{

let question=userInput.value.toLowerCase().trim();

if(question==="") return;

addMessage("👩 "+userInput.value,
"user-message");

userInput.value="";


let typing=document.createElement("div");

typing.classList.add(
"bot-message"
);

typing.innerText=
"🤖 Typing...";

chatBox.appendChild(typing);

chatBox.scrollTop=
chatBox.scrollHeight;


setTimeout(()=>{

typing.remove();

let answer=
replies[question] ||
"😅 Sorry, I don't know that answer yet.";

addMessage(
answer,
"bot-message"
);

},1000);

});



clearBtn.addEventListener("click",()=>{

chatBox.innerHTML=`

<div class="bot-message">

🤖 Hello Sharanya! Ask me about AI, ML, NLP, ChatGPT etc ✨

</div>

`;

});



voiceBtn.addEventListener("click",()=>{

let recognition=
new webkitSpeechRecognition();

recognition.lang="en-US";

recognition.start();

recognition.onresult=
function(event){

userInput.value=
event.results[0][0].transcript;

};

});