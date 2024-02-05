// import { jsQuizz } from '../../constants'
import React, { useState } from 'react'
import { resultInitialState } from '../../initials'

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState(
    new Array(questions.length).fill(null)
  )
  const [result, setResult] = useState({ ...resultInitialState })
  const [showResult, setShowResult] = useState(false)
  const [showConfirmationModal, setShowConfirmationModal] = useState(false)

  const { question, choices, correctAnswer, image } = questions[currentQuestion]

  const onAnswerClick = (answer, index) => {
    const updatedSelectedAnswers = [...selectedAnswers]
    updatedSelectedAnswers[currentQuestion] = index
    setSelectedAnswers(updatedSelectedAnswers)
  }

  const handleYesSubmit = () => {
    const newScore = selectedAnswers.reduce((score, selectedIdx, idx) => {
      const correctIdx = questions[idx].choices.findIndex(
        (choice) => choice === questions[idx].correctAnswer
      )
      return score + (selectedIdx === correctIdx ? 5 : 0)
    }, 0)

    const correctAnswersCount = selectedAnswers.reduce(
      (count, selectedIdx, idx) => {
        const correctIdx = questions[idx].choices.findIndex(
          (choice) => choice === questions[idx].correctAnswer
        )
        return count + (selectedIdx === correctIdx ? 1 : 0)
      },
      0
    )

    setResult((prevResult) => ({
      ...prevResult,
      score: newScore,
      correctAnswers: correctAnswersCount,
      wrongAnswers: questions.length - correctAnswersCount,
    }))
    setShowResult(true)
    setShowConfirmationModal(false)
  }

  const handleNoCancel = () => {
    setShowConfirmationModal(false)
  }

  const onClickNext = () => {
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setShowConfirmationModal(true)
    }
  }

  const onClickPrevious = () => {
    if (currentQuestion !== 0) {
      setCurrentQuestion((prev) => prev - 1)
    }
  }

  const onTryAgain = () => {
    setCurrentQuestion(0)
    setSelectedAnswers(new Array(questions.length).fill(null))
    setResult({ ...resultInitialState })
    setShowResult(false)
  }

  return (
    <div className='quiz-container'>
      {!showResult ? (
        <>
          {questions.map((q, index) => (
            <div
              key={q.id}
              style={{ display: currentQuestion === index ? 'block' : 'none' }}
            >
              <div>
                <span className='active-question-no'> {index + 1}</span>
                <span className='total-question'> /{questions.length}</span>
              </div>
              {q.isVisible && (
                <img
                  src={q.icon}
                  alt={`Question ${q.id} icon`}
                  className='icon-img'
                />
              )}

              <h2>{question}</h2>
              <ul>
                {choices.map((answer, index) => (
                  <li
                    onClick={() => onAnswerClick(answer, index)}
                    key={answer}
                    className={
                      selectedAnswers[currentQuestion] === index
                        ? 'selected-answer'
                        : null
                    }
                  >
                    {answer}
                  </li>
                ))}
              </ul>
              <div className='footer'>
                <button
                  onClick={onClickPrevious}
                  disabled={currentQuestion === 0}
                  className='previous-button'
                >
                  Previous
                </button>
                <button
                  onClick={onClickNext}
                  disabled={selectedAnswers[currentQuestion] === null}
                  className='next-button'
                >
                  {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                </button>
              </div>
            </div>
          ))}

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
