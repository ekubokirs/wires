var criteria = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var breed = ["Compare", 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
$(document).ready(function(){
  for (i=0; i<criteria.length; i++){
    var c = criteria[i];
    $("ul").append("<li>Criteria " + c + "</li>");
  }
  for (j=0; j<breed.length; j++){
    var breeds = breed[j];
    $("select").append("<option>Breed " + breeds +"</option>");
  }
  $("#selector").change(function(){
    var b = $("#selector").val();
    if (b === "Breed Compare"){
      $(".select").addClass("hidden");
      $(".image").addClass("hidden");
    }
    else{
      $(".select").removeClass("hidden");
      $(".image").removeClass("hidden");
      $(".image").attr("src", 'images/puppy4.jpg');
    }
  });
});