$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
  var number = $("input#number1").val();
  function factorial (number){
    if (number === ""){
      return alert("Enter a number please !")
    } else if (number > 1) {
    return number * factorial(number - 1)
    }
    else if (number <= 1){
      return 1
    }
  }

    $("#result").text(factorial(number));
    $("#result").show();

  });
});
