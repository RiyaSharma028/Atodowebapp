
import './App.css'
import AboutPage from './Components/About/AboutPage'
import HomePage from './Components/Home/HomePage'
import Pomodoro from './Components/Pomodoro/Pomodoro'
import StickyNotes from './Components/StickyNotes/StickyNotes'
import TaskList from './Components/TaskList/TaskList'
import Footer from './Footer'
import Navbar from './Navbar'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <HomePage></HomePage>
      <Pomodoro></Pomodoro>
      <TaskList></TaskList>
      <StickyNotes></StickyNotes>
      <AboutPage></AboutPage>
      <Footer></Footer>
    </>
  )
}

export default App
