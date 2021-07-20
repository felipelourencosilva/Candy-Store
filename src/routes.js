import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import GlobalStyles from './styles/GlobalStyles';


export function Routes() {
  return(
    <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <GlobalStyles />
    </Router>
  )
}