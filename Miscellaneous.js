function displayDecorations(){
  push();
  noStroke();
  textSize(30);
  text("Points:\n"+localStorage.getItem("totalQGpoints"),1380,50);
  textSize(50);
  fill(0);
  text("TSA Question Generator",320,70);
  fill(30,30,30,100);
  rect(0,0,300,280);
  fill(100,100,100,100);
  rect(0,280,300,1070);
  fill(255,255,255);
  textSize(40);

  text("Categories",10,50);
  text("Generators",10,320);

  if(mathSwitch.switchedOn){
    fill(100,150,200,100);
  }else if(scienceSwitch.switchedOn){
    fill(100,200,100,100);
  }else if(customSwitch.switchedOn){
    fill(255,130,10,100);
  }else{
    fill(100,100,100,100);
  }
  rect(1350,0,300,1200);
  pop();
}

function addPoints(points){
  var totalPoints=parseInt(localStorage.getItem("totalQGpoints"))+points;
  localStorage.setItem("totalQGpoints",totalPoints.toString());
}
