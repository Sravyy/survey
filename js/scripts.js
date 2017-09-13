$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();

    var foodInput = $("#food").val();
    $(".output1").text(foodInput);

    var flavor = $("input:radio[name=flavor]:checked").val();
    $(".output2").text(flavor);

    var dob = $("#born").val();
    $(".output3").text(dob);

    var color = $("#color").val();
    $(".output4").text(color);
  })
})
