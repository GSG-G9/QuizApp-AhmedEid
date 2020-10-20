const questions = [
  {
    question1: "Inside which HTML element do we put the JavaScript ? ",
    answers: [
      {
        ans1: "<script>",
        correct: true,
      },

      {
        ans2: "<js>",
        correct: false,
      },
      {
        ans3: "<scripting>",
        correct: false,
      },
      {
        ans4: " <javascript>",
        correct: false,
      },
    ],
  },
  {
    question2:
      "What is the correct syntax for referring to an external script called 'xxx.js' ?",

    answers: [
      {
        ans1: "<script name='xxx.js'>",
        correct: false,
      },
      {
        ans2: "<script src='xxx.js'>",
        correct: true,
      },
      {
        ans3: "<script href='xxx.js'>",
        correct: false,
      },
      {
        ans3: "<script value='xxx.js'>",
        correct: false,
      },
    ],
  },
  {
    question3: "Where is the correct place to insert a JavaScript?",

    answers: [
      {
        ans1: " Both the <head> section and the <body> section are correct",
        correct: true,
      },
      {
        ans2: " The <body> section",
        correct: false,
      },
      {
        ans3: " The <head> section",
        correct: false,
      },
      {
        ans4: " The <footer> section",
        correct: false,
      },
    ],
  },
  {
    question4: "How do you call a function named",
    answers: [
      {
        ans1: " call myFunction()",
        correct: false,
      },
      {
        ans2: " call function myFunction",
        correct: false,
      },
      {
        ans3: " myFunction()",
        correct: true,
      },
      {
        ans4: "  Call.myFunction()",
        correct: false,
      },
    ],
  },
  {
    question5:
      "How do you write a conditional statement for executing some statements only if 'i' is equal to 5",
    answers: [
      {
        ans1: " if i==5 then",
        correct: false,
      },
      {
        ans2: "  if (i==5)",
        correct: true,
      },
      {
        ans3: "  if i=5 then",
        correct: false,
      },
      {
        ans4: "   if i=5",
        correct: false,
      },
    ],
  },
  {
    question6: "How does a 'for' loop start?",
    answers: [
      {
        ans1: " for (i = 0; i <= 5)",
        correct: false,
      },
      {
        ans2: "  for i = 1 to 5",
        correct: false,
      },
      {
        ans3: "for (i <= 5; i++)",
        correct: false,
      },
      {
        ans4: " for (i = 0; i <= 5; i++)",
        correct: true,
      },
    ],
  },
  {
    question7: "How can you add a comment in a JavaScript?",
    answers: [
      {
        ans1: " //This is a comment",
        correct: true,
      },
      {
        ans2: " 'This is a comment",
        correct: false,
      },
      {
        ans3: "<!--This is a comment-->",
        correct: false,
      },
      {
        ans4: " #This is a comment",
        correct: false,
      },
    ],
  },
  {
    question8: "How do you put a message in the browser's status bar?",
    answers: [
      {
        ans1: " statusbar = 'put your message here'",
        correct: false,
      },
      {
        ans2: "window.status('put your message here')",
        correct: false,
      },
      {
        ans3: "window.status = 'put your message here'",
        correct: true,
      },
      {
        ans4: "status('put your message here')",
        correct: false,
      },
    ],
  },
  {
    question9: "In JavaScript, which of the following is a logical operator?",
    answers: [
      {
        ans1: "|",
        correct: false,
      },
      {
        ans2: "&&",
        correct: true,
      },
      {
        ans3: "%",
        correct: false,
      },
      {
        ans4: "/",
        correct: false,
      },
    ],
  },
  {
    question10:
      "In JavaScript, which of the following is NOT an assignment operator?",
    answers: [
      {
        ans1: "+=",
        correct: false,
      },
      {
        ans2: "||",
        correct: true,
      },
      {
        ans3: "*=",
        correct: false,
      },
      {
        ans4: " =",
        correct: false,
      },
    ],
  },
  {
    question11:
      "A named element in a JavaScript program that is used to store and retrieve data is a _____.",
    answers: [
      {
        ans1: "Method",
        correct: false,
      },
      {
        ans2: "assignment operator",
        correct: false,
      },
      {
        ans3: "string",
        correct: false,
      },
      {
        ans4: " Variable",
        correct: true,
      },
    ],
  },
  {
    question12: "How do you find the largest number of 2 and 4?",
    answers: [
      {
        ans1: "Math.ceil(2,4)",
        correct: false,
      },
      {
        ans2: "Math.max(2,4)",
        correct: true,
      },
      {
        ans3: "ceil(2,4)",
        correct: false,
      },
      {
        ans4: " top(2,4)",
        correct: false,
      },
    ],
  },
];
