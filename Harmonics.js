//Declare your variables here. If you declare them inside the harmonics() function, the variable will be reset 25 times per second.
var harmonicsTextBox = new TextBox(320,150,350,40,30);
var harmonicsCheckButton = new Button(380,200,180,40,"Check",30,xOffset=50);
var harmonicsNewQuestionButton = new Button(370,250,220,40,"New Question",30,xOffset=15);
var harmonicsGenerateQuestion = true;
var harmonicsTheta=0;
var harmonicsMass=0;
var harmonicsLength=0;
var harmonicsAnswer = 0;
var harmonicsTau = 0;
var harmonicsFeedback="";
var harmonicsExplanation = "";

//When the harmonics button is clicked, the harmonics() function is called 25 times per second in the main.js file (in line 76).
function harmonics(){
  //These 4 lines just display the yellow block on the side. You can ignore these
  fill(255,238,153,100);
  noStroke();
  rect(735,155,615,525,20,0,0,20);
  stroke(0);

  //These update the text box and buttons
  harmonicsTextBox.update();
  harmonicsCheckButton.update();
  harmonicsNewQuestionButton.update();

  //This "if statement" generates stuff for a new question
  /*If a question has not been generated yet, generate stuff. Then set generatedQuestion
  to true at the end so it does not generate a new one before the current one is answered*/
  //Make sure to calculate the answer in here and store it in the harmonicsAnswer variable
  if(harmonicsGenerateQuestion == true){
    harmonicsTheta=int(random(235,325));
    harmonicsLength=(random(0,10));
    harmonicsMass=(random(0,45));
    harmonicsTau= 2*3.14*sqrt(harmonicsLength/9.8)

    //console.log prints stuff out to the console (F12 > Console in the browser).Very useful for debgging
    console.log("length: "+harmonicsLength);
    console.log("tau: "+harmonicsTau);

    harmonicsGenerateQuestion = false;
  }

  /*If the new question button is clicked, reset the text
  and set harmonicsGenerateQuestion to true so a new question will be generated the next time
  the function is called (With the if statement directly above this).
  You can ignore this.*/
  if(harmonicsNewQuestionButton.clicked==true){
    harmonicsTextBox.data="";
    harmonicsExplanation = "";
    harmonicsFeedback = "";
    harmonicsGenerateQuestion = true;
  }

  /*check if the user's answer is right or not when the
  Check Button is clicked*/
  if(harmonicsCheckButton.clicked==true){
    /*The parseInt() function turns algebraTextBox.data, which is a string (or text)
    data type into an int datatype so they can be compared*/
    if(parseInt(harmonicsTextBox.data)==harmonicsAnswer){
      harmonicsFeedback="Correct!";
    }else{
      harmonicsFeedback="Try again"
    }

    harmonicsExplanation="Your explaination here (Look at the Algebra.js code if you're confused)";
  }

  //Uncomment this below to generate a wave (translateX,translateY,amplitude,period)
  //generateSineWave(300,200,30,2);
  //generateCosWave(300,500,30,2);

  text("Your Question here",320,120);

  text("Feedback: " + harmonicsFeedback,320,330);

  text("Work/Explanation:",800,200);
  text(harmonicsExplanation,800,250);
}

var displace=0;
function generateSineWave(translateX, translateY, amplitude, period){
  displace+=.1;

  for(var x=0;x<250;x++){
    var xPoint = x+translateX;
    var yPoint = amplitude*sin(radians(x*period)+displace)+translateY;
    point(xPoint,yPoint);
  }
}

function generateCosWave(translateX, translateY, amplitude, period){
  displace+=.1;

  for(var x=0;x<250;x++){
    var xPoint = x+translateX;
    var yPoint = amplitude*cos(radians(x*period)+displace)+translateY;
    point(xPoint,yPoint);
  }
}
