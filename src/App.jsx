import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import DashBoard from './Pages/DashBoard'
import Coin from './Pages/Coin Page/Coin'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/coin/:id' element={<Coin />} />
      </Routes>
    </div>
  )
}

export default App
