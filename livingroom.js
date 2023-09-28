img="";
status1="";
function preload(){
    img = loadImage("that one room with the couch.jpeg");
    }
    
    function setup(){
    
    canvas = createCanvas(640,420)
    canvas.center()
    
    objectdetector = ml5.objectDetector('cocossd', modelloaded)
 document.getElementById("status").innerHTML = "Status : detecting objects ";
}

function modelloaded(){
    console.log("Model is loaded")
    status1 = true;
    objectdetector.detect(img,gotResults)
}

function gotResults(error,results){
 if(error){
    console.error(error)
 }
 else{
    console.log(results)
 }
}

    function  draw(){
        image(img,0,0,700,420);

        fill("#040202")
        text("couch 100%",200,210)
       noFill()
         stroke("#040202")
           rect(200,200,285,140)
       


           fill("#040202")
        text("table 100%",200,310)
        noFill()
           stroke("#040202")
           rect(200,300,290,100)
    }
