var questions = [1,2,3,4,5,6,7,8,9,10,11];
var answers = ["A1","A2","A3","A4","A5"];

$(document).ready(function(){

  var mq = window.matchMedia("(max-width: 500px");
  if (mq.matches){
    console.log("mobile");
    $("#desktop").addClass("hide");
    for (i=0; i<questions.length; i++){
      var qNum = questions[i];
      $("#question").append("<li class='questions'>"+qNum+"<ol id='"+qNum+"'></ol></li>");
      // var A = $("ol").children.getAttribute('id');
      for (j=0; j<answers.length; j++){
        $("#"+qNum).append("<li class='answers' id='"+qNum+answers[j]+"''>"+answers[j]+"</li>");
      }
    }
    $(".answers").click(selectAnswer);
    $("ul").append("<button onclick=\"location.href='results.html'\">Submit</button>");
  }
  else{
    $('#question').addClass("hide");
    $('#q2').addClass('hide');
    $('#q3').addClass('hide');
    $('#q4').addClass('hide');

    // $('#b1').click(nextPage);
    $("#b1").click(function(){
      $("#q1").addClass('hide');
      $('#q2').removeClass('hide');
    });

    $("#b2").click(function(){
      $("#q2").addClass('hide');
      $('#q3').removeClass('hide');
    });

    $("#b3").click(function(){
      $("#q3").addClass('hide');
      $('#q4').removeClass('hide');
      $('#bl').removeClass("buttonHide");
    });
    
    $(".answers").click(selectAnswer);
    // var start = 0;
    // for (i=start; i<start+3; i++){
    //   var qNum = questions[i];
    //   $("#question").append("<li class='questions'>"+qNum+"<ol id='"+qNum+"'></ol></li><button class=hide>Submit</button>");
    //   // var A = $("ol").children.getAttribute('id');
    //   for (j=0; j<answers.length; j++){
    //     $("#"+qNum).append("<li class='answers' id='"+qNum+answers[j]+"''>"+answers[j]+"</li>");
    //   }
    // }
    // $(".answers").click(selectAnswer);
    // $("button").click(loadNext);
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