//https://teachablemachine.withgoogle.com/models/tstZnxqXI/

Webcam.set({
    width: 340, 
    height: 300,
    image_format: "jpg",
    jpg_quality: 90
});
var camera=document.getElementById("camera");
Webcam.attach("#camera");

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capture_image' src='"+data_uri+"'>";
        });
}
console.log("ml5 version",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/SMHw3h0F5/model.json",modelloaded);
function modelloaded(){
    console.log("model is loaded");
}
function check(){
    var img=document.getElementById("capture_image");
    classifier.classify(img,gotresult);
}
function gotresult(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("result_objectname").innerHTML=results[0].label;
    document.getElementById("result_objectaccuracy").innerHTML=results[0].confidence.toFixed(2);
}
}
