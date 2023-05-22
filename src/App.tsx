import {ModalProvider} from 'hocs/modalContext';
import Routes from './router/index';
import { ApolloProvider } from '@apollo/client';
import apolloClient from 'server/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from 'hocs/userContext';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Auth0Provider 
        domain={`${process.env.REACT_APP_AUTH0_DOMAIN}`}
        clientId={`${process.env.REACT_APP_AUTH0_CLIENT_ID}`}
        authorizationParams={
          {redirect_uri: window.location.origin}
        }
      >
        <UserProvider>
         <ModalProvider>
            <Routes /> 
          </ModalProvider> 
        </UserProvider>
      </Auth0Provider>
    </ApolloProvider>
  );
}

export default App;
