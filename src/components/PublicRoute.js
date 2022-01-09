import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  // console.log('redirectTo:', redirectTo);
  // console.log('restricted:', restricted);
  // console.log('shouldRedirect:', shouldRedirect);
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}
