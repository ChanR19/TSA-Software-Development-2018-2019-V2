//volume Code; use this as an example if you're new:

//Textbox parameters: (x,y,width,height,text size)
//Button parameters: (x,y,width,height,text,text size)
var volumeTextBox = new TextBox(320,180,350,40,30);
var volumeCheckButton = new Button(380,240,180,40,"Check",30,xOffset=50);
var volumeNewQuestionButton = new Button(370,300,220,40,"New Question",30,xOffset=15);
var volumeGenerateQuestion = true;
var volumeRandomNumberOne = 0;
var volumeRandomNumberTwo = 0;
var volumeFeedback="";
var volumeExplanation = "";

var height=0;
var length=0;
var width=0;
var volumeAnswer=0;

function volume(){
  fill(255,238,153,100);
  noStroke();
  rect(735,155,615,525,10,0,0,10);
  stroke(0);
  volumeTextBox.update();
  volumeCheckButton.update();
  volumeNewQuestionButton.update();

  /*If a question has not been generated yet,make 2 numbers
  between 0 and 50 and make the answer. Then set generatedQuestion
  to true at the end so it does not generate a new one
  before the current one is answered
  */
  if(volumeGenerateQuestion == true){
    height= int(random(1,50));
    length= int(random(1,50));
    width= int(random(1,50));
    volumeAnswer= height*length*width;
    volumeGenerateQuestion=false;
  }

  /*If the volumeNewQuestionButon is clicked, set volumeGenerateQuestion
  to true, so it generates a new question in the next frame
  */
  if(volumeNewQuestionButton.clicked==true){
    volumeTextBox.data="";
    volumeExplanation = ""
    volumeGenerateQuestion = true;
  }

  /*check if the user's answer is right or not when the
  volumeCheckButton is clicked
  */
  if(volumeCheckButton.clicked==true){
    /*The parseInt() function turns volumeTextBox.data, which is a string (or text)
    data type into an int datatype so they can be compared
    */
    if(parseInt(volumeTextBox.data)==volumeAnswer){
      volumeFeedback="Correct!";
    }else{
      volumeFeedback="Try again"
    }

    volumeExplanation="Step 1-Mutiply: "+height+"*"+length+"*"+width+ "\n Step 2-Solve: "+volumeAnswer;
  }

  //Display the output, feedback, and work
  //box(width, height, length);
  text("The question is: What is the volume of a rectangular prism with sides \n"+height+", "+length+", and "+width+"?",320,125);
  text("Feedback: " + volumeFeedback,320,370);

  text("Work/Explanation:",800,200);
  text(volumeExplanation,800,250);
}
