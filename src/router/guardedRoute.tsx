import useUser from 'hooks/useUser';
import { Navigate, Outlet } from 'react-router-dom';
// eslint-disable-next-line
import { guardedRouteTypes } from 'utils/proptypes';

const GuardedRoute = ({ path, isNestedRoute = false, nestedRouteRedirectUrl }: guardedRouteTypes) => {
  const { userPermissionProfile } = useUser({ userId: '' });

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
