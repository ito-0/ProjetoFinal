import { BrowserRouter } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

import { GlobalCSS } from './styles';

import Rotas from './routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalCSS />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
