import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'

import './styles/global.css'

export const App = () => {
  return (
    <>
      <Router>
        <div className="w-screen h-screen">
          <Routes>
            <Route
              path="/"
              element={<Login />}
            />

            <Route
              path="/cadastro"
              element={<Register />}
            />

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />
          </Routes>
        </div>
      </Router>
    </>

  )
}

