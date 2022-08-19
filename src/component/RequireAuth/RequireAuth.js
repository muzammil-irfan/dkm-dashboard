import auth from '../../Firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';


const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
        return (
          <div>
            <p>Registered User: {user.email}</p>
          </div>
        );
      }
      if (user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
};

export default RequireAuth;