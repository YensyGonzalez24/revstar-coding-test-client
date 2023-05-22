import { useLazyQuery } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { QUERY_GET_USER_ROLE } from "graphql/queries/user";
import { UserContext } from "hocs/userContext";
import { useContext, useEffect } from "react";
import { userPerimissionProfiles } from "utils/permission";

const useUser = () => {
  const { user, setUser } = useContext(UserContext);

  const { isAuthenticated, user: auth0User, isLoading } = useAuth0();

  const [getUserRole] = useLazyQuery(QUERY_GET_USER_ROLE, {
    variables: {
      email: auth0User?.email,
    },
    onCompleted: (data) => {
      setUser({
        id: auth0User?.sub,
        email: auth0User?.email,
        name: auth0User?.name,
        role: data.getUserRole.role,
      });
    },
  });

  useEffect(() => {
    if (!user.role && isAuthenticated) {
      getUserRole();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const userPermissionProfile = userPerimissionProfiles.find(
    (profile) => profile.type === user.role
  );

  return {
    userType: user.role,
    userPermissionProfile,
    userIsAuthenticated: isAuthenticated,
  };
};

export default useUser;
