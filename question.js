const questions = [
  {
    question: "Inside which HTML element do we put the JavaScript ? ",
    answers: [
      {
        ans: "<script>",
        correct: true,
      },

      {
        ans: "<js>",
        correct: false,
      },
      {
        ans: "<scripting>",
        correct: false,
      },
      {
        ans: " <javascript>",
        correct: false,
      },
    ],
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js' ?",

    answers: [
      {
        ans: "<script name='xxx.js'>",
        correct: false,
      },
      {
        ans: "<script src='xxx.js'>",
        correct: true,
      },
      {
        ans: "<script href='xxx.js'>",
        correct: false,
      },
      {
        ans: "<script value='xxx.js'>",
        correct: false,
      },
    ],
  },
  {
    question: "Where is the correct place to insert a JavaScript?",

    answers: [
      {
        ans: " Both the <head> section and the <body> section are correct",
        correct: true,
      },
      {
        ans: " The <body> section",
        correct: false,
      },
      {
        ans: " The <head> section",
        correct: false,
      },
      {
        ans: " The <footer> section",
        correct: false,
      },
    ],
  },
  {
    question: "How do you call a function named",
    answers: [
      {
        ans: "call myFunction()",
        correct: false,
      },
      {
        ans: " call function myFunction",
        correct: false,
      },
      {
        ans: " myFunction()",
        correct: true,
      },
      {
        ans: "  Call.myFunction()",
        correct: false,
      },
    ],
  },
  {
    question:
      "How do you write a conditional statement for executing some statements only if 'i' is equal to 5",
    answers: [
      {
        ans: " if i==5 then",
        correct: false,
      },
      {
        ans: "if (i==5)",
        correct: true,
      },
      {
        ans: "if i=5 then",
        correct: false,
      },
      {
        ans: "   if i=5",
        correct: false,
      },
    ],
  },
  {
    question: "How does a 'for' loop start?",
    answers: [
      {
        ans: " for (i = 0; i <= 5)",
        correct: false,
      },
      {
        ans: "  for i = 1 to 5",
        correct: false,
      },
      {
        ans: "for (i <= 5; i++)",
        correct: false,
      },
      {
        ans: " for (i = 0; i <= 5; i++)",
        correct: true,
      },
    ],
  },
  {
    question: "How can you add a comment in a JavaScript?",
    answers: [
      {
        ans: " //This is a comment",
        correct: true,
      },
      {
        ans: " 'This is a comment",
        correct: false,
      },
      {
        ans: "<!--This is a comment-->",
        correct: false,
      },
      {
        ans: " #This is a comment",
        correct: false,
      },
    ],
  },
  {
    question: "How do you put a message in the browser's status bar?",
    answers: [
      {
        ans: " statusbar = 'put your message here'",
        correct: false,
      },
      {
        ans: "window.status('put your message here')",
        correct: false,
      },
      {
        ans: "window.status = 'put your message here'",
        correct: true,
      },
      {
        ans: "status('put your message here')",
        correct: false,
      },
    ],
  },
  {
    question: "In JavaScript, which of the following is a logical operator?",
    answers: [
      {
        ans: "|",
        correct: false,
      },
      {
        ans: "&&",
        correct: true,
      },
      {
        ans: "%",
        correct: false,
      },
      {
        ans: "/",
        correct: false,
      },
    ],
  },
  {
    question:
      "In JavaScript, which of the following is NOT an assignment operator?",
    answers: [
      {
        ans: "+=",
        correct: false,
      },
      {
        ans: "||",
        correct: true,
      },
      {
        ans: "*=",
        correct: false,
      },
      {
        ans: " =",
        correct: false,
      },
    ],
  },
  {
    question:
      "A named element in a JavaScript program that is used to store and retrieve data is a _____.",
    answers: [
      {
        ans: "Method",
        correct: false,
      },
      {
        ans: "assignment operator",
        correct: false,
      },
      {
        ans: "string",
        correct: false,
      },
      {
        ans: " Variable",
        correct: true,
      },
    ],
  },
  {
    question: "How do you find the largest number of 2 and 4?",
    answers: [
      {
        ans: "Math.ceil(2,4)",
        correct: false,
      },
      {
        ans: "Math.max(2,4)",
        correct: true,
      },
      {
        ans: "ceil(2,4)",
        correct: false,
      },
      {
        ans: " top(2,4)",
        correct: false,
      },
    ],
  },
];