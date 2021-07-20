import { BrowserRouter as Router, Route} from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { CartContextProvider } from './contexts/CartContext';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home/index';
import GlobalStyles from './styles/GlobalStyles'


function App() {
  return (
    <CartContextProvider>
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <GlobalStyles />
      </Router>
    </CartContextProvider>
  );
}

export default App;
