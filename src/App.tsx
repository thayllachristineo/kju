import Router from '~/router';
import Header from './components/Header';
import 'react-loading-skeleton/dist/skeleton.css';

function App() {
  return (
    <>
      <Header>
        <h1>Caju Front Teste</h1>
      </Header>
      <Router />
    </>
  );
}

export default App;
