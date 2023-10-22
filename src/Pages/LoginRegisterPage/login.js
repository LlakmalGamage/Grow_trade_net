import '../../app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AuthProvider } from '../../Context/AuthContex'
import Header from '../../Components/Header'
import HomePage from '../../Pages/HomePage'
import LoginPage from '../../Pages/LoginPage'
import RegisterPage from '../../Pages/RegisterPage'
import Dashboard from '../../Pages/Dashboard'
import ProtectedRoutes from '../../Utils/ProtectedRoutes';


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;