const quizDiv = document.querySelector("#quiz");
const questionDiv = document.createElement("div");
const btn2 = document.createElement("button");
btn2.textContent = "result";
btn2.style.display = "none";

let questionsArray = [];
let correctAnswers = 0;
let choosedAnswer;

function getQuestion(questionText) {
  const questionTitle = document.createElement("h3");
  questionTitle.textContent = questionText.question;
  questionDiv.appendChild(questionTitle);

  for (let answerObj of questionText.answers) {
    const ans = document.createElement("input");
    const label = document.createElement("label");
    ans.setAttribute("type", "radio");
    ans.setAttribute("name", "answer");
    ans.setAttribute("value", answerObj.ans);
    label.setAttribute("for", answerObj.ans);
    label.textContent = answerObj.ans;

    questionDiv.appendChild(ans);
    questionDiv.appendChild(label);
  }

  quizDiv.appendChild(questionDiv);

  document.querySelectorAll('input[name="answer"]').forEach((elem) => {
    elem.addEventListener("change", function (event) {
      choosedAnswer = event.target.value;

      questionText.answers.filter(function (answer) {
        if (answer.correct === true && answer.ans === choosedAnswer) {
          correctAnswers++;
        }
      });
    });
  });
}
const btn = document.createElement("button"); //next
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

btn2.addEventListener("click", function () { //result
  questionDiv.textContent = "";
  const result = document.createElement("p");
  result.textContent = `your score is ${correctAnswers}`;
  quizDiv.appendChild(result);
});

quizDiv.appendChild(btn);
quizDiv.appendChild(btn2);

window.onload = getQuestion(
  questions[Math.floor(Math.random() * questions.length)]
);
