import { useState } from 'react'

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestuion] = useState(0)
  const { questions, choices, correctAnswer } = questions[currentQuestion]
  return (
    <div className='quiz-container'>
      <>
        <span className='active-question-no'> {currentQuestion + 1}</span>
        <span className='total-question-no'> {currentQuestion + 1}</span>
      </>
    </div>
  )
}
export default Quiz
