import { useState } from "react";
function App(){
const questions = [
  {
    questionText: "Which Is Frontend Framework Used To Create Web Applications?",
    answerOptions: [
      { answerText: "Node js", isCorrect: false },
      { answerText: "react js", isCorrect: true },
      { answerText: "Mongo db", isCorrect: false },
      { answerText: "Express js", isCorrect: false },
    ]
  },
  {
    questionText: "Which Among This Is  Used To Store Database?",
    answerOptions: [
      { answerText: "Node js", isCorrect: false },
      { answerText: "react js", isCorrect: false },
      { answerText: "Mongo db", isCorrect: true },
      { answerText: "Express js", isCorrect: false },
    ]
  },
  {
    questionText: "which is DOM?",
    answerOptions: [
      { answerText: "document odd mode", isCorrect: false },
      { answerText: "document office mode", isCorrect: true },
      { answerText: "document operator model", isCorrect: false },
      { answerText: "Document object model", isCorrect: true },
    ]
  },
  {
    questionText: "what command is used to manage diffrent NodeJS version?",
    answerOptions: [
      { answerText: "npm", isCorrect: false },
      { answerText: "nvm", isCorrect: true },
      { answerText: "node", isCorrect: false },
      { answerText: "js", isCorrect: false },
    ]
  },
  {
    questionText: "Which of the following routes is considered a RESTful configuration for ExpressJS?",
    answerOptions: [
      { answerText: "/{id}", isCorrect: false },
      { answerText: "/id=val", isCorrect: false },
      { answerText: "/:id", isCorrect: false },
      { answerText: "/?id=val", isCorrect: true },
    ]
  },
  {
    questionText: "Asynchronous functions can trigger the callback of the catch part using what keyword?",
    answerOptions: [
      { answerText: "return", isCorrect: false },
      { answerText: "throw", isCorrect: false },
      { answerText: "await", isCorrect: false },
      { answerText: "try", isCorrect: true },
    ]
  },
  {
    questionText: "What global variable is used to access the environment variables of a NodeJS application?",
    answerOptions: [
      { answerText: "env", isCorrect: true },
      { answerText: "ENV", isCorrect: false },
      { answerText: "process.env", isCorrect: false },
      { answerText: "Process.getEnv()", isCorrect: false },
    ]
  },
  {
    questionText: "Collection is a group of MongoDB ___________?",
    answerOptions: [
      { answerText: "document", isCorrect: true },
      { answerText: "database", isCorrect: false },
      { answerText: "table", isCorrect: false },
      { answerText: "row", isCorrect: false },
    ]
  },
  {
    questionText: "What is Mongoose?",
    answerOptions: [
      { answerText: "An object document mapping", isCorrect: true },
      { answerText: "An object-relational mapping", isCorrect: false },
      { answerText: "A small terrestrial carnivorous", isCorrect: false },
      { answerText: "none", isCorrect: false },
    ]
  },
  {
    questionText: "the ................. method limits the number of documents in the result set?",
    answerOptions: [
      { answerText: "limit()", isCorrect: true },
      { answerText: "limitOf()", isCorrect: false },
      { answerText: "limitBy()", isCorrect: false },
      { answerText: "none", isCorrect: false },
    ]
  },
]
const [currentQuestion,setCurrentQuestion] = useState(0);
const [showScore,setShowScore] = useState(false);
const [score,setScore] = useState(0);
const handle = (isCorrect) =>
 {
  if (isCorrect) {
    setScore(score + 1)
  }
  const nextQuestion = currentQuestion + 1;
  if (nextQuestion < questions.length) {
    setCurrentQuestion(nextQuestion)
  } else {
    setShowScore(true)
  }
}
return (
  
  <div className="app">
    {
      showScore ? (
        <div className="score-section">
          you scored {score} out of{questions.length}
        </div>
      ) : (
        <>
        
          <div className="question-section">
            <div className="question-count">
              <span>Question{currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
            <div class="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOptions) => (
                <button onClick={() => handle(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
              ))}
            </div>
          </div>
        </>
      )
    }
  </div>
)
}
export default App;