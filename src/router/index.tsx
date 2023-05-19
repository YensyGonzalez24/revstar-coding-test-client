import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from 'router/routes';
import GuardedRoute from 'router/guardedRoute';
// eslint-disable-next-line
import { routeType } from 'utils/proptypes';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, key) => {
          if (route.isGuarded) {
            return (
              <Route
                path={route.path}
                element={<GuardedRoute path={route.path} />}
                key={`guarded-route-key-${key}`}
              >
                {getRoute(route, key)}
              </Route>
            );
          }

          return getRoute(route, key);
        })}
      </Routes>
    </BrowserRouter>
  );
};

const getRoute = (route: routeType, key: number) => {
  if (route.children && route.children.length > 0) {
    return <Route path={route.path} element={<route.component />} key={`route-key-${key}`}>
      {route.children.map((child, childKey) => {
        if(child.isGuarded){
          return <Route
            path={""}
            element={<GuardedRoute path={child.path} isNestedRoute nestedRouteRedirectUrl={route.guardedRedirectUrl}/>}
            key={`guarded-child-route-key-${childKey}`}
          >
            <Route
              path={child.path}
              element={<child.component />}
              key={`child-route-key-${childKey}`}
            />
          </Route>
        }

        return (
          <Route
            path={child.path}
            element={<child.component />}
            key={`child-route-key-${childKey}`}
          />
        );
      })}
    </Route>;
  }

  return (
    <Route path={route.path} element={<route.component />} key={`route-key-${key}`} />
  );
};

export default Router;
