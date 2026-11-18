import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function ProductCard({ produto }) {
  // O PrimeReact usa o 'header' para a imagem e 'footer' para os botões
  const header = (
    <div className="flex justify-content-center p-3 bg-white" style={{ height: '200px' }}>
      <img 
        src={produto.image} 
        alt={produto.title} 
        style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} 
      />
    </div>
  );

  const footer = (
    <div className="flex justify-content-between align-items-center">
      <span className="text-xl font-bold text-primary">R$ {produto.price.toFixed(2)}</span>
      <Button label="Comprar" icon="pi pi-shopping-cart" className="p-button-rounded" />
    </div>
  );

  return (
    <div className="col-12 md:col-6 lg:col-3">
      <Card 
        title={produto.title} 
        subTitle={produto.category} 
        header={header} 
        footer={footer}
        className="shadow-2 h-full"
      >
        <p className="m-0 line-height-3 text-sm text-gray-700" style={{ 
          display: '-webkit-box', 
          WebkitLineClamp: 3, 
          WebkitBoxOrient: 'vertical', 
          overflow: 'hidden' 
        }}>
          {produto.description}
        </p>
      </Card>
    </div>
  );
}