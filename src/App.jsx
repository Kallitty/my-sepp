// import Trial from './components/Quiz/Trial'
import Quiz from './components/Quiz/Quiz'
import { jsQuizz } from './records.json'
import './App.css'
// import { jsQuizz } from './constants'
// function App() {
//   return <Trial />
// }
function App() {
  return <Quiz questions={jsQuizz.questions} />
}

export default App
