import { useAuth0 } from '@auth0/auth0-react';
import useUser from 'hooks/useUser';
import { Navigate, Outlet } from 'react-router-dom';
import { routePaths } from 'utils/constants';
// eslint-disable-next-line
import { guardedRouteTypes } from 'utils/proptypes';

const GuardedRoute = ({ path, isNestedRoute = false, nestedRouteRedirectUrl }: guardedRouteTypes) => {
  const {isLoading, isAuthenticated} = useAuth0();

  const { userPermissionProfile } = useUser();

  if(!isLoading && !isAuthenticated){
    return <Navigate to={routePaths.LOGIN_PAGE} />
  }

  const userIsAuthorized = userPermissionProfile?.permittedRoutes.find(
    route => route === path,
  );

  const redirectUrl = isNestedRoute ? nestedRouteRedirectUrl : userPermissionProfile?.defaultRedirectUrl
    
  return userIsAuthorized ? (
    <Outlet />
  ) : (
    <Navigate to={redirectUrl || ''} />
  );
};

export default GuardedRoute;
