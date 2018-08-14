$(document).ready(function(){
  $("form#numberinput").submit(function(event){
    event.preventDefault();
    var result = 1;
    var numberInput = parseInt($("#number").val());
    for (var index = numberInput; index >= 1; index -= 1 ) {
      result*=index;
      console.log(result);
      }
  });
});
