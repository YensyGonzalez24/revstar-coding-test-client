import {ModalProvider} from 'hocs/modalContext';
import Routes from './router/index';

function App() {
  return (
    <ModalProvider>
      <Routes /> 
    </ModalProvider> 
  );
}

export default App;
