import { CartContextProvider } from './contexts/CartContext';
import { Routes } from './routes';

function App() {
  return (
    <CartContextProvider>
      <Routes />
    </CartContextProvider>
  );
}

export default App;
