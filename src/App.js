import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import './assets/styles/styles.css';

function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container className="product-main-cnt">
          <Outlet />
        </Container>
      </main>
    </>
  );
}

export default App;
