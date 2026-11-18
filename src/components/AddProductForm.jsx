import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

export default function AddProductForm({ onAdd }) {
  const [titulo, setTitulo] = useState('');
  const [preco, setPreco] = useState(0);
  const [categoria, setCategoria] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo || !preco || !categoria) {
      alert('Preencha todos os campos!');
      return;
    }

    // Cria o novo produto com a estrutura da Fake Store API
    const novoProduto = {
      id: Date.now(), // Gera um ID único
      title: titulo,
      price: preco,
      category: categoria,
      description: 'Produto adicionado manualmente pelo formulário.',
      image: 'https://via.placeholder.com/150?text=Sem+Imagem'
    };

    onAdd(novoProduto); // Envia para o componente pai

    // Limpa o formulário
    setTitulo('');
    setPreco(0);
    setCategoria('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 surface-card border-round shadow-1 mb-5">
      <h3 className="mt-0 text-primary">Adicionar Novo Produto</h3>
      <div className="grid formgrid p-fluid">
        
        <div className="field col-12 md:col-4">
          <label htmlFor="titulo" className="font-bold">Nome do Produto</label>
          <InputText 
            id="titulo" 
            value={titulo} 
            onChange={(e) => setTitulo(e.target.value)} 
            placeholder="Ex: Camiseta" 
          />
        </div>

        <div className="field col-12 md:col-3">
          <label htmlFor="preco" className="font-bold">Preço (R$)</label>
          <InputNumber 
            id="preco" 
            value={preco} 
            onValueChange={(e) => setPreco(e.value)} 
            mode="currency" 
            currency="BRL" 
            locale="pt-BR"
          />
        </div>

        <div className="field col-12 md:col-3">
          <label htmlFor="categoria" className="font-bold">Categoria</label>
          <InputText 
            id="categoria" 
            value={categoria} 
            onChange={(e) => setCategoria(e.target.value)} 
            placeholder="Ex: Roupas" 
          />
        </div>

        <div className="field col-12 md:col-2 flex align-items-end">
          <Button type="submit" label="Adicionar" icon="pi pi-plus" className="w-full" />
        </div>

      </div>
    </form>
  );
}