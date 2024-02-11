import Quiz from './components/Quiz/Quiz'
import { jsQuizz } from './records.json'
import './components/Quiz/index.scss'
import './components/Quiz/Quiz.scss'

function Exam() {
  return <Quiz questions={jsQuizz.questions} />
}

export default Exam
