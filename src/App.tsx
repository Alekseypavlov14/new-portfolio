import { Route, Routes } from 'react-router-dom'
import { Layout } from '@components/Layout/Layout'
import { HomePage } from './pages/HomePage/HomePage'
import './App.css'

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<div>About me</div>} />
        <Route path='/portfolio' element={<div>Projects</div>} />
        <Route path='/contact' element={<div>Contact me</div>} />
      </Route>
    </Routes>
  )
}