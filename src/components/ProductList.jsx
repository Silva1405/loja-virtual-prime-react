import { useState, useEffect } from 'react';
import axios from 'axios';
import { ProgressSpinner } from 'primereact/progressspinner';
import ProductCard from './ProductCard';
import AddProductForm from './AddProductForm';

export default function ProductList() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // useEffect é executado quando a tela carrega pela primeira vez
  useEffect(() => {
    buscarProdutos();
  }, []);

  const buscarProdutos = async () => {
    try {
      // Consumindo a Fake Store API com Axios
      const response = await axios.get('https://fakestoreapi.com/products');
      setProdutos(response.data);
      setCarregando(false);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      setCarregando(false);
      alert('Erro ao carregar os produtos da API.');
    }
  };

  // Função que recebe o novo produto do formulário
  const adicionarProduto = (novoProduto) => {
    // Adiciona o novo produto no início da lista
    setProdutos([novoProduto, ...produtos]);
  };

  if (carregando) {
    return (
      <div className="flex justify-content-center mt-8">
        <ProgressSpinner />
      </div>
    );
  }

  return (
    <div>
      <AddProductForm onAdd={adicionarProduto} />

      <div className="grid">
        {produtos.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}