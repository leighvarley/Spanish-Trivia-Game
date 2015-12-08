$(document).ready(function(){

var numCorrect = 0
var position = 0

var forms = $("form");

function checkFormSubmit(formClass){
  var answer = $("."+ formClass +" input[status=correct]").val();
  var input = $("."+ formClass + " input[name=choices]:checked").val();
  position++
  console.log(answer);
  console.log(input);
  if (answer == input) {
    numCorrect++
    alert("Correct! You have gotten " + numCorrect + " out of " + position + " answers correct.")
  }
  else {
    alert("Incorrect. The correct answer is " + answer + ". You have gotten " + numCorrect + " out of " + position + " answers correct.")
  }
}

for (var i=0; i<forms.length; i++){
  $("form").eq(i).on("submit", function(){
    event.preventDefault();
    var formClass = $(this).attr("class");
    checkFormSubmit(formClass);
  });
}

}) 


//PSUEDOCODE
//Define variables for the number of questions that the user has answered correctly and the total number of questions they have answered
//Use jQuery to select all forms in the html and set this equal to var forms
//Set up a function to check whether or not the user input is equal to the correct answer
  //Set var answer equal to the input whose status is correct within the current form
  //Set var input equal to the input that is checked within the current form
  //increment the position
  //If the answer is equal to the input, let the user know that they are correct and tell them how many answers they they have gotten correct out of the total number of questions they have answered.
  //If the answer is not equal to the input, let the user know that their answer is incorrect, tell them their correct answer, and tell them how many answers they have gotten correct out of the total number of questions they have answered.
//Use a for loop to iterate through the forms
  //Use .eq() to create a jQuery object for each form when submit is clicked
  //Use preventDefault() to prevent the page from reloading each time submit is clicked
  //Define var formClass in order to select the the current form
//Invoke the function
