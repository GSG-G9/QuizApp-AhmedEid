# QuizApp-AhmedEid

const ans2 = document.createElement("input");
const label2 = document.createElement("label");
ans2.setAttribute("type", "radio");
ans2.setAttribute("name", "answer");
ans2.setAttribute("value", "ans2");
label2.setAttribute("for", "ans2");
label2.textContent = questionText.answers[1].ans2;

const ans3 = document.createElement("input");
const label3 = document.createElement("label");
ans3.setAttribute("type", "radio");
ans3.setAttribute("name", "answer");
ans3.setAttribute("value", "ans3");
label3.setAttribute("for", "ans3");
label3.textContent = questionText.answers[2].ans3;

const ans4 = document.createElement("input");
const label4 = document.createElement("label");
ans4.setAttribute("type", "radio");
ans4.setAttribute("name", "answer");
ans4.setAttribute("value", "ans4");
label4.setAttribute("for", "ans4");
label4.textContent = questionText.answers[3].ans4;
