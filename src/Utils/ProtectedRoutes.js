import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../Context/AuthContex'

const ProtectedRoutes = ({ children, redirectTo  = '/' }) => {
  const { user } = useAuth();
    if (!user) {
      return <Navigate to={redirectTo} />
    }
    return children ? children : <Outlet/>;
  }

export default ProtectedRoutes