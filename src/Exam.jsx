import Quiz from './components/Quiz/Quiz'
import { jsQuizz } from './records.json'
import './exam.scss'

function Exam() {
  return (
    <div className='sepp__exam--body'>
      <Quiz questions={jsQuizz.questions} />
    </div>
  )
}

export default Exam
