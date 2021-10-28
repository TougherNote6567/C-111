prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width:300,
    height:350,
    image_format:"png",
    png_quality:90
});

wc = document.getElementById("something_something");

Webcam.attach(wc);

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("pictr").innerHTML = '<img id="Ya" src="'+data_uri+'">';
    });
}
console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-OofrCp0C/model.json", model_loaded);

function model_loaded(){
    console.log("Model has been intialized by NOV-8");
}

function speak(){
    
    
    var synth = window.speechSynthesis;
    var speak_data1 = "Prediction 1 is" + prediction_1;
    var speak_data2 = "Prediction 2 is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1+ speak_data2);
    synth.speak(utterThis);

}