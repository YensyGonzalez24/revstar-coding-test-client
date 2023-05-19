import { useEffect, useState } from "react";
import { userTypes } from "utils/constants";
import { userPerimissionProfiles } from "utils/permission";
// eslint-disable-next-line
import { useUserTypes } from "utils/proptypes";

const useUser = ({ userId }: useUserTypes) => {
  //TODO: remove es-lint disable when useUser is conected to API and updating userType
  // eslint-disable-next-line
  const [userType, setUserType] = useState(userTypes.ADMIN_USER);
  const [userToken, setUserToken] = useState<string | null>();

  useEffect(() => {
    (async () => {
      try {
        const token = "";

        setUserToken(token);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const userPermissionProfile = userPerimissionProfiles.find(
    (profile) => profile.type === userType
  );

  return {
    userType,
    userPermissionProfile,
    userToken,
  };
};

export default useUser;
