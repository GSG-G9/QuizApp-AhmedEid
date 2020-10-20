const quizDiv = document.querySelector("#quiz");
const questionDiv = document.createElement("div");
let questionsArray = [];

function getQuestion(questionText) {
  const questionTitle = document.createElement("h3");

  const ans1 = document.createElement("input");
  ans1.setAttribute("type", "radio");
  ans1.setAttribute("name", "answer");
  const label1 = document.createElement("label");

  const ans2 = document.createElement("input");
  ans2.setAttribute("type", "radio");
  ans2.setAttribute("name", "answer");
  const label2 = document.createElement("label");

  const ans3 = document.createElement("input");
  ans3.setAttribute("type", "radio");
  ans3.setAttribute("name", "answer");
  const label3 = document.createElement("label");

  const ans4 = document.createElement("input");
  ans4.setAttribute("type", "radio");
  ans4.setAttribute("name", "answer");
  const label4 = document.createElement("label");

  questionTitle.textContent = questionText.question;

  ans1.setAttribute("value", "ans1");
  label1.setAttribute("for", "ans1");
  label1.textContent = questionText.answers[0].ans1;

  ans2.setAttribute("value", "ans2");
  label2.setAttribute("for", "ans2");
  label2.textContent = questionText.answers[1].ans2;

  ans3.setAttribute("value", "ans3");
  label3.setAttribute("for", "ans3");
  label3.textContent = questionText.answers[2].ans3;

  ans4.setAttribute("value", "ans4");
  label4.setAttribute("for", "ans4");
  label4.textContent = questionText.answers[3].ans4;

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
}
const btn = document.createElement("button");
btn.textContent = "Next";
btn.addEventListener("click", function (e) {
  let questionText = questions[Math.floor(Math.random() * questions.length)];
  questionsArray.push(questionText);
  questionDiv.textContent = "";
  if (questionsArray.length <= 9) {
    getQuestion(questionText);
  }
});

quizDiv.appendChild(btn);

window.onload = getQuestion(
  questions[Math.floor(Math.random() * questions.length)]
);
