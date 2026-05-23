const imageUpload=
document.getElementById(
"imageUpload"
);

const previewImage=
document.getElementById(
"previewImage"
);

const detectBtn=
document.getElementById(
"detectBtn"
);

const result=
document.getElementById(
"result"
);

let model;


// Load AI model

cocoSsd.load()

.then((loadedModel)=>{

model=loadedModel;

result.innerHTML=
"✅ AI Model Loaded";

});


// Image Preview

imageUpload.addEventListener(

"change",

function(){

const file=
this.files[0];

if(file){

previewImage.src=
URL.createObjectURL(file);

previewImage.style.display=
"block";

}

});




// Real Detection

detectBtn.addEventListener(

"click",

async()=>{

if(!previewImage.src){

alert(
"Upload image first"
);

return;

}

result.innerHTML=
"🔍 Detecting...";


const predictions=

await model.detect(
previewImage
);


if(predictions.length>0){

let output="";

predictions.forEach(

prediction=>{

output +=

`🎯 ${prediction.class}

<br>

📊 Confidence:
${(
prediction.score*100
).toFixed(2)}%

<br><br>`;

});

result.innerHTML=
output;

}

else{

result.innerHTML=
"❌ No object detected";

}

});
