import { useState, createContext } from "react";
import { userContextType, userType } from "utils/proptypes";

const UserContext = createContext<userContextType>({
    user:{
        id: '',
        email: '',
        name: '',
        role: ''
    },
    setUser: ()=>{}
});

const UserProvider = ({children}: any) =>{
    const [user, setUser] = useState<userType>({
        id: '',
        email: '',
        name: '',
        role: ''
    });

    const contextValues = {
        user,
        setUser
    };

    return (
        <UserContext.Provider value={contextValues}>
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider, UserContext};