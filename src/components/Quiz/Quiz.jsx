import React, { useState } from 'react'
import { resultInitialState } from '../../constants'
import questionImage from '../../simages/quesimg1.jpg'

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answerIdx, setAnswerIdx] = useState(null)
  const [answer, setAnswer] = useState(null)
  const [result, setResult] = useState(resultInitialState)
  const [showResult, setShowResult] = useState(false)
  const [showConfirmationModal, setShowConfirmationModal] = useState(false)

  const { question, choices, correctAnswer } = questions[currentQuestion]

  const onAnswerClick = (answer, index) => {
    setAnswerIdx(index)
    if (answer === correctAnswer) {
      setAnswer(true)
    } else {
      setAnswer(false)
    }
  }

  const handleYesSubmit = () => {
    setShowResult(true)
    setShowConfirmationModal(false)
  }

  const handleNoCancel = () => {
    setShowConfirmationModal(false)
  }

  const onClickNext = () => {
    setAnswerIdx(null)
    setResult((prev) =>
      answer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    )

    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setShowConfirmationModal(true)
    }
  }

  const onTryAgain = () => {
    setCurrentQuestion(0)
    setAnswerIdx(null)
    setAnswer(null)
    setResult(resultInitialState)
    setShowResult(false)
  }

  return (
    <div className='quiz-container'>
      {question.image && (
        <img
          src={questionImage}
          alt='Question Diagram'
          style={{ maxWidth: '100%' }}
        />
      )}
      {question.image && (
        <img
          src={question.image}
          alt='Question Diagram'
          style={{ maxWidth: '30%' }}
        />
      )}
      <p>{question.image}</p>
      {!showResult ? (
        <>
          <span className='active-question-no'> {currentQuestion + 1}</span>
          <span className='total-question'> /{questions.length}</span>
          <h2> {question}</h2>
          <ul>
            {' '}
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerClick(answer, index)}
                key={answer}
                className={answerIdx === index ? 'selected-answer' : null}
              >
                {answer}
              </li>
            ))}
          </ul>
          <div className='footer'>
            <button onClick={onClickNext} disabled={answerIdx === null}>
              {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
          {showConfirmationModal && (
            <div className='modal'>
              <p>Are you sure you want to submit?</p>
              <button onClick={handleYesSubmit}>Yes</button>
              <button onClick={handleNoCancel}>No</button>
            </div>
          )}
        </>
      ) : (
        <div className='result'>
          <h3>Result</h3>
          <p>
            Total Questions:<span> {questions.length}</span>
          </p>
          <p>
            Total Score:<span> {result.score}</span>
          </p>
          <p>
            Correct Answers:<span> {result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers:<span> {result.wrongAnswers}</span>
          </p>
          <button onClick={onTryAgain}>Try again</button>
        </div>
      )}
    </div>
  )
}

export default Quiz
