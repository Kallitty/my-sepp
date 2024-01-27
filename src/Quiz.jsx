import { useState } from 'react'

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const { question, choices, correctAnswer } = questions[currentQuestion]
  return (
    <div className='quiz-container'>
      <>
        <span className='active-question-no'> {currentQuestion + 1}</span>
        <span className='total-question'> /{questions.length}</span>
        <h2> {question}</h2>
        <ul>
          {' '}
          {choices.map((answer, index) => (
            <li onClick={onAnswerClick(answer, index)} key={answer}></li>
          ))}
        </ul>
      </>
    </div>
  )
}
export default Quiz
