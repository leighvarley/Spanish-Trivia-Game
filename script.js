/* Self-scoring trivia game
Basic concept:
-Computer asks question.
-User enters answer.
-If answer is correct, user is notified that they answered the question correctly.
-If answer is incorrect, user is notified that their answer is incorrect and are provided with the correct answer.
-Computer keeps score - displays number of questions answered correctly out of total questions in game.
  --Score updates each time a question is answered.
    ---If user answer is correct, total number of correct questions increments by 1.
    ---If user inswer is incorrect, total number of correct questions remains unchanged.
  --Total number of questions remains the same.
-When all questions are answered, alert user that the game is over and provide them with their final score (number correct out of total questions).
-----Silver level: score tracking box instead of just giving the user the score as a prompt. Give user final grade report at end. Give user option to restart test.
*/

$(document).ready(function(){

//variables:
  //var numCorrect = number of questions answered correctly - begins with 0 and increments by one each time question is answered correctly (numCorrect++) - inside function where we check for the correct answer
  //var totalQuestions = total number of questions in game (question.length?)
  //var userResponse = user's response to the questions
  //correctAnswer = correct response to an individual question

//Unclear on whether trivia questions and answers should be stored in HTML and referenced based on class/id/etc. using jQuery selectors or if everything should be stored in JS and questions shoudl be prompts like choose your own adventure game.

//Need event listeners to listen for submit click

//for loop to iterate through all answer options to see if userResponse matches correctAnswer

//function to see if userResponse is correct or incorrect
// function isItCorrect() {
//var numCorrect = 0;
// if userResponse === (correct answer)
// alert("Correct! You have gotten " + numCorrect + "out of " + totalQuestions + "correct.")
//numCorrect++
// }
// else {
//   alert("Incorrect. The correct answer is " + (correct answer here...). "You have gotten " + numCorrect + "out of " + totalQuestions + "correct.")
// }
// }
//call the function




}
