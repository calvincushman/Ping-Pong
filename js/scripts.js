$(document).ready(function() {
    $("form").submit(function(event){
      event.preventDefault();
      var userInput = parseInt( $("#inputNumber").val() );
      for (index=1; index<=userInput; index+=1) {
        $("button#submit").click(function() {
        $("ul").addClass("li");
        });
       }
       var pingPongOutput = (userInput);

       if (!pingPongOutput) {
         pingPongOutput = "Please input a number"
      }
    $("#pingPongOutput").text(pingPongOutput);
   });
  });
