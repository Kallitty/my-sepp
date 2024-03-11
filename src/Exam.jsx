import Quiz from './components/Quiz/Quiz'
import { jsQuizz } from './records.json'
import './components/Quiz/index.scss'
import './components/Quiz/Quiz.scss'

function Exam() {
  return (
    <div className='sepp__exam--body'>
      <Quiz questions={jsQuizz.questions} />
    </div>
  )
}

export default Exam
