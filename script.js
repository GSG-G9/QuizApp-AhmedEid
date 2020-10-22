const quizDiv = document.querySelector("#quiz");
const questionDiv = document.createElement("div");
const btn2 = document.createElement("button");
btn2.textContent = "result";
btn2.style.display = "none";

let questionsArray = [];
let correctAnswers = 0;

function getQuestion(questionText) {
  const questionTitle = document.createElement("h3");
  questionTitle.textContent = questionText.question;

  const ans1 = document.createElement("input");
  const label1 = document.createElement("label");
  ans1.setAttribute("type", "radio");
  ans1.setAttribute("name", "answer");
  ans1.setAttribute("value", questionText.answers[0].ans);
  label1.setAttribute("for",questionText.answers[0].ans);
  label1.textContent = questionText.answers[0].ans;

  const ans2= document.createElement("input");
  const label2 = document.createElement("label");
  ans2.setAttribute("type", "radio");
  ans2.setAttribute("name", "answer");
  ans2.setAttribute("value", questionText.answers[1].ans);
  label2.setAttribute("for",questionText.answers[1].ans);
  label2.textContent = questionText.answers[1].ans;

  const ans3 = document.createElement("input");
  const label3 = document.createElement("label");
  ans3.setAttribute("type", "radio");
  ans3.setAttribute("name", "answer");
  ans1.setAttribute("value", questionText.answers[2].ans);
  label3.setAttribute("for",questionText.answers[2].ans);
  label3.textContent = questionText.answers[2].ans;

  const ans4 = document.createElement("input");
  const label4 = document.createElement("label");
  ans4.setAttribute("type", "radio");
  ans4.setAttribute("name", "answer");
  ans4.setAttribute("value", questionText.answers[3].ans);
  label4.setAttribute("for",questionText.answers[3].ans);
  label4.textContent = questionText.answers[3].ans;

  questionDiv.appendChild(questionTitle);
  questionDiv.appendChild(ans1);
  questionDiv.appendChild(label1);

  questionDiv.appendChild(ans2);
  questionDiv.appendChild(label2);

  questionDiv.appendChild(ans3);
  questionDiv.appendChild(label3);

  questionDiv.appendChild(ans4);
  questionDiv.appendChild(label4);

  quizDiv.appendChild(questionDiv);

  document.querySelectorAll('input[name="answer"]').forEach((elem) => {
    elem.addEventListener("change", function (event) {

      const item = event.target.value;

     questionText.answers.filter(function (answer) {
      
      if (answer.correct === true && answer.ans === item){
        correctAnswers++
      }
  
    });
  });
 })

}
const btn = document.createElement("button");
btn.textContent = "Next";
btn.addEventListener("click", function () {
  let questionText = questions[Math.floor(Math.random() * questions.length)];
  questionsArray.push(questionText);
  questionDiv.textContent = "";
  if (questionsArray.length <= 9) {
    getQuestion(questionText);
  }

  if (questionsArray.length === 9) {
    btn.setAttribute("disabled", "true");
    btn2.style.display = "block";
  }
});

btn2.addEventListener("click", function () {
  questionDiv.textContent = "";
  const result = document.createElement("p");
  result.textContent = `your score is ${correctAnswers}`;
  console.log(correctAnswers);

  quizDiv.appendChild(result);
});

quizDiv.appendChild(btn);
quizDiv.appendChild(btn2);

window.onload = getQuestion(
  questions[Math.floor(Math.random() * questions.length)]
);
