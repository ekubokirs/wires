var questions = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var answers = ["A1","A2","A3","A4","A5"];

$(document).ready(function(){

  var mq = window.matchMedia("(max-width: 500px");
  if (mq.matches){
    console.log("mobile");
    for (i=0; i<questions.length; i++){
      var qNum = questions[i];
      $("#question").append("<li class='questions'>"+qNum+"<ol id='"+qNum+"'></ol></li>");
      // var A = $("ol").children.getAttribute('id');
      for (j=0; j<answers.length; j++){
        $("#"+qNum).append("<li class='answers' id='"+qNum+answers[j]+"''>"+answers[j]+"</li>");
      }
    }
    $(".answers").click(selectAnswer);
    $("ul").append("<button>Submit</button>");
  }
  else{
    var start = 0;
    for (i=start; i<start+3; i++){
      var qNum = questions[i];
      $("#question").append("<li class='questions'>"+qNum+"<ol id='"+qNum+"'></ol></li><button class=hide>Submit</button>");
      // var A = $("ol").children.getAttribute('id');
      for (j=0; j<answers.length; j++){
        $("#"+qNum).append("<li class='answers' id='"+qNum+answers[j]+"''>"+answers[j]+"</li>");
      }
    }
    $(".answers").click(selectAnswer);
    $("button").click(loadNext);

  }
});
function selectAnswer(){
  var answer = this.id;
  console.log(answer);
  if($(this).hasClass('selected')){
    $(this).removeClass('selected');
    console.log("Unchosen");
  }
  else{
    $(this).addClass("selected");
    console.log("Chosen");
  }
}

function loadNext(){
  // $(".questions").addClass("collapse");
  // $('button').addClass("collapse");

  console.log("initial: "+i);
  var start = i;
  for (i=start; i<start+3; i++){
    console.log(i);
    var qNum = questions[i];
      $("#question").append("<li class='questions'>"+qNum+"<ol id='"+qNum+"'></ol></li><button class=hide>Submit</button>");
      // var A = $("ol").children.getAttribute('id');
      for (j=0; j<answers.length; j++){
        $("#"+qNum).append("<li class='answers' id='"+qNum+answers[j]+"''>"+answers[j]+"</li>");
      }
    }
    $(".answers").click(selectAnswer);
    console.log("final: " + i);
}