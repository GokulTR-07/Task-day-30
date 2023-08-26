import './App.css'
import Home from './Home'
import Create from './Create'
import Edit from './Edit'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/edit/:post' element={<Edit/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
