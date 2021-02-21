const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 

let candidateName = '';

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = 'Who was the first American woman in space? ';
let correctAnswer = 'Sally Ride';
let candidateAnswer = '';
let questions = ["Who was the first American woman in space? ","True or false: 5 kilometer == 5000 meters. ","(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
 candidateName = input.question("What is your name? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (let i = 0; i < 5; i++) {
candidateAnswers[i] = input.question(questions[i]);
}
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //

  let answeredCorrectly = 0
  let totalQuestions = 5
  console.clear()
  console.log(`\nCandidate Name: ${candidateName}`)
for (let i = 0; i < totalQuestions; i++) {
  console.log(`${i+1}) ${questions[i]}`);
   console.log(`Your answer: ${candidateAnswers[i]}\nCorrect answer: ${correctAnswers[i]}\n`);
if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
  answeredCorrectly++;
} 
}
  let grade = answeredCorrectly/totalQuestions*100;
  let isPass = ''
  if (grade >= 80){
    isPass = "PASSED";
  } else {
    isPass = "FAILED";
  }
  console.log(`\n>>> Overall Grade: ${grade}% (${answeredCorrectly} of ${totalQuestions} responses correct) <<<\n>>> Status: ${isPass} <<<`);

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Hello, ${candidateName}. Welcome to your quiz.`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};