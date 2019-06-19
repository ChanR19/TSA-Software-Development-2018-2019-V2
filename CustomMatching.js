var matchingNewQuestionsButton = new Button(320,100,230,40,"New Questions",30,xOffset=15);

var matchingGenerateQuestions = true;

var matchingQuestionMovables=[];
var matchingAnswerMovables=[];

function customMatching(){
  matchingNewQuestionsButton.update();

  if(matchingGenerateQuestions){
    matchingQuestionMovables=[];
    matchingAnswerMovables=[];

    for(var i=0;i<5;i++){
      //matchingQuestions.push(customQuestions[Math.floor(random(customQuestions.length))].split(";"));
      var question=customQuestions[Math.floor(random(customQuestions.length))].split(";");
      matchingQuestionMovables.push(new Movable(random(320,800),random(150,700),question[0].length*9+60,50,question[0],20));
      matchingAnswerMovables.push(new Movable(random(320,800),random(150,700),question[1].length*9+60,50,question[1],20));
    }
    //console.log(temp);
    matchingGenerateQuestions = false;
  }

  for(var i=0;i<matchingQuestionMovables.length;i++){
    matchingQuestionMovables[i].update();
    matchingAnswerMovables[i].update();

    if(matchingQuestionMovables[i].touching(matchingAnswerMovables[i])){
      matchingQuestionMovables.splice(i,1);
      matchingAnswerMovables.splice(i,1);
    }
  }

  if(matchingNewQuestionsButton.clicked){
    matchingGenerateQuestions = true;
  }
}
