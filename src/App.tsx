import 'react-loading-skeleton/dist/skeleton.css';
import 'react-responsive-modal/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Router from '~/router';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header>
        <h1>Caju Front Teste</h1>
      </Header>
      <Router />
      <ToastContainer />
    </>
  );
}

export default App;
