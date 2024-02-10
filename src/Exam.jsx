import Quiz from './components/Quiz/Quiz'
import { jsQuizz } from './records.json'
import './App.css'

function Exam() {
  return <Quiz questions={jsQuizz.questions} />
}

export default Exam
