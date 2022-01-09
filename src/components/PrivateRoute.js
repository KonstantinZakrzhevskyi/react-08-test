import { useSelector } from 'react-redux';
// import { Route, Redirect } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

// export default function PrivateRoute({
//   component: Component,
//   redirectTo,
//   children,
//   ...routeProps
// }) {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   return (
//     <Route {...routeProps}>
//       {isLoggedIn ? children : <Redirect to={redirectTo} />}
//     </Route>
//   );
// }

export default function PrivateRoute({ children, redirectTo = '/' }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
}
