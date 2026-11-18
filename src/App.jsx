import { Toolbar } from 'primereact/toolbar';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  return (
    <div className="min-h-screen surface-ground">
      {/* Barra superior usando PrimeReact */}
      <Toolbar 
        left={<h2 className="m-0 text-primary">🛍️ Minha Loja Virtual</h2>}
        className="shadow-2 mb-5 border-round"
      />

      <div className="max-w-7xl mx-auto px-4 pb-8">
        <ProductList />
      </div>
    </div>
  );
}

export default App;
