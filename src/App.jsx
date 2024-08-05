import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/auth/Login'
import { Register } from './pages/auth/Register'
import { Navbar } from './components/navigation/Navbar'
import { ErrorPage } from './pages/error/ErrorPage'
import { NotFoundPage } from './pages/error/NotFoundPage'
import { CreateTest } from './pages/test/CreateTest'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />

        {/* Authentication */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* Test */}
        <Route path='/create-test' element={<CreateTest />} />

        {/* Errors */}
        <Route path='/error' element={<ErrorPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
