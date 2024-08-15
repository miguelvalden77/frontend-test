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
import { AllCategories } from './pages/categories/AllCategories'
import { Category } from './pages/categories/Category'
import { TestPage } from './pages/test/TestPage'
import { DoTestPage } from './pages/test/DoTestPage'
import { ResultTest } from './pages/test/ResultTest'

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
        <Route path='/test/:id' element={<TestPage />} />
        <Route path='/do-test/:id' element={<DoTestPage />} />
        <Route path='/result' element={<ResultTest />} />

        {/* Categories */}
        <Route path='/categories' element={<AllCategories />} />
        <Route path='/categories/:category' element={<Category />} />

        {/* Errors */}
        <Route path='/error' element={<ErrorPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
