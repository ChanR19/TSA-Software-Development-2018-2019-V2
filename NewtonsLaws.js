var nLButtons = [new Button(320,380,120,40,"",30,xOffset=20),new Button(320,430,120,40,"",30,xOffset=20),new Button(320,480,120,40,"",30,xOffset=20)];
var nLAnswerButton = 0;

var nLNewQuestionButton = new Button(320,530,220,40,"New Question",30,xOffset=15);
var nLFeedback="";
var nLExplanation="";
var nLRandom=-1;
var nLQuestion="";
var nLTempExplanation="";

var nLGenerateQuestion = true;

function newtonsLaws(){
  fill(255,238,153,100);
  noStroke();
  rect(735,155,615,525,20,0,0,20);
  stroke(0);
  nLButtons[0].update();
  nLButtons[1].update();
  nLButtons[2].update();
  nLNewQuestionButton.update();

  if(nLGenerateQuestion){
    nLRandom=Math.floor(random(0,3));
    if(nLRandom==0){
      nLGeneratePulleyAcceleration();
    }else if(nLRandom==1){
      nLGeneratePulleyTension();
    }else if(nLRandom==2){
      nLGenerateSlideAcceleration();
    }
    nLGenerateQuestion=false;
  }

  if(nLNewQuestionButton.clicked){
    nLGenerateQuestion=true;
    nLExplanation="";
  }

  if(nLButtons[nLAnswerButton].clicked){
    nLFeedback="Correct!";
    nLExplanation=nLTempExplanation;
  }else if(nLButtons[0].clicked||nLButtons[1].clicked||nLButtons[2].clicked){
    nLFeedback="Try again";
    nLExplanation=nLTempExplanation;
  }

  if(nLRandom==0||nLRandom==1){
    nLDisplayPulley();
  }else if(nLRandom==2){
    nLDisplaySlide();
  }

  text("Work/Explanation: ",750,200);
  textSize(20)
  text(nLExplanation,750,200)
  textSize(30);
  text("Feedback:" + nLFeedback,320,610);
}

var nLMass1 = 0;
var nLMass2 = 0;

function nLGeneratePulleyAcceleration(){
  nLMass1 = Math.round(((Math.random() * 25)+1)*100)/100;
  nLMass2 = Math.round(((Math.random() * 25)+1)*100)/100;
  var acceleration = (nLMass2*9.8)/(nLMass1+nLMass2);
  acceleration=Math.round(acceleration*100)/100;
  nLQuestion="Mass 1 is " + nLMass1 + "kg and Mass 2 is " + nLMass2 + "kg. They are connected by a string and pulley. \nWhat is the acceleration of the two masses? Ignore friction.";
  nLTempExplanation="\n\nStep 1- Use F=ma=sum of all forces\n\nStep 2- Forces on m2 are gravity and tension,so m2a=m2g-T\n\nStep 3- force on m1 is only tension, so m1a=T\n\nStep 4- Use substitution to get m2a=m2g-m1a\n\nStep 5-Solve for a to get: " + acceleration;

  nLAnswerButtonIndex = Math.floor(Math.random() * 3);
  for(var i=0;i<3;i++){
    if(i==nLAnswerButtonIndex){
      nLButtons[i].text=acceleration;
    }else{
      nLButtons[i].text=Math.round(((Math.random() * 25)+1)*100)/100;
    }
  }
}

function nLGeneratePulleyTension(){
  nLMass1 = Math.floor(Math.random() * 10)+1;
  nLMass2 = Math.floor(Math.random() * 10)+1;
  nLQuestion="Mass 1 is " + nLMass1 + "kg and Mass 2 is " + nLMass2 + "kg. They are connected by a string and pulley. \nWhat is the tension of the string? Use 9.8m/s^2 for gravity and ignore friction."
  var tension = 9.8*(nLMass1+nLMass2);
  tension=Math.round(tension*100)/100;

  nLTempExplanation="\n\nStep 1- Use F=ma=sum of all forces\n\nStep 2- Forces on m2 are gravity and tension,so m2a=m2g-T\n\nStep 3- force on m1 is only tension, so m1a=T\n\nStep 4- Solve for a from Step 3 to get a=T/m1 \n\nStep 5- Use substitution to get m2(T/m1)=m2g-T\n\nStep 6- Solve for T to get: " + tension;
  nLAnswerButton = Math.floor(Math.random() * 3);
  for(var i=0;i<3;i++){
    if(i==nLAnswerButton){
      nLButtons[i].text=tension;
    }else{
      nLButtons[i].text=Math.round(((Math.random() * 120)+1)*100)/100;
    }
  }
}

function nLDisplayPulley(){
  fill(0);
  line(385,170,450,170);
  line(370,190,370,270);
  textSize(20);
  text(nLQuestion,320,110);
  textSize(30);
  text("M1",455,180);
  text("M2",345,300);
  rect(385,200,180,150);
  noFill();
  rect(450,150,50,50);
  rect(340,270,50,50);
  ellipse(385,185,30,30);
  fill(0);
}

var theta=0;
var TrigOpposite=0;
function nLGenerateSlideAcceleration(){
  theta=Math.round(random(10,45));
  var friction=random(1).toFixed(2);
  var mass=Math.round(3,20);

}

function nLDisplaySlide(){
  strokeWeight(5);
  line(385,350,585,350);
  TrigOpposite=Math.tan(radians(theta)) * 200;
  line(385,350,385,350-TrigOpposite);
  line();
  strokeWeight(0);


}
