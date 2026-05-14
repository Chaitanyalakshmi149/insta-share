import {BrowserRouter, Routes, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Profile from './components/Profile'
import NotFound from './components/NotFound'
const App = () => (
  <BrowserRouter>

    <Routes>

      <Route
        path="/login"
        element={<LoginForm />}
      />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
       element={
       <ProtectedRoute>
       <Profile />
     </ProtectedRoute>
    }
     />
     <Route
     path="*"
     element={<NotFound />}
    />

    </Routes>

  </BrowserRouter>
)

export default App