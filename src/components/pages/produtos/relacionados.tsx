import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Importando o componente Image
import Slider from 'react-slick'; // Importando o componente Slider

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  discountPrice?: string;
  available: boolean;
  images: string[];
}

interface RelatedProductsProps {
  products: Product[];
  loadMoreProducts: () => void; // Função para carregar mais produtos
  hasMore: boolean; // Se há mais produtos para carregar
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products, loadMoreProducts, hasMore }) => {
  const truncateText = (text: string, maxLength: number): string => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // Centro do slide
    centerPadding: '20px', // Espaço extra no centro
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '10px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '5px',
        },
      },
    ],
  };

  return (
    <div className="relative pt-16 min-h-screen bg-background text-white">
      {/* Seção de Produtos Relacionados */}
      <div className="relative container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-center">Produtos Relacionados</h3>

        <Slider {...settings} className="relative">
          {products.map(product => (
            <div
              key={product.id}
              className={`bg-gradient-to-br from-background border-2 p-5 rounded-lg shadow-xl flex flex-col justify-between h-[450px] w-[300px] ${!product.available ? 'opacity-50' : ''} mx-2`} // Adiciona espaço horizontal
            >
              {/* Imagem do Produto */}
              <div className="flex justify-center items-center h-48 mb-4">
                <Image
                  src={product.images[0]} // Primeira imagem do array
                  alt={product.name}
                  width={300} // Largura definida para a imagem
                  height={200} // Altura definida para a imagem
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>

              {/* Nome do Produto */}
              <h2 className="text-xl font-semibold mb-2 text-center">{product.name}</h2>

              {/* Descrição */}
              <p className="text-sm mb-1 flex-1 overflow-hidden text-ellipsis text-center">
                {truncateText(product.description, 30)} {/* Trunca a descrição */}
              </p>

              {/* Preço e Desconto */}
              <div className="flex items-center justify-center mb-4">
                {product.discountPrice ? (
                  <>
                    <span className="text-lg font-bold text-red-500 mr-2">{product.discountPrice}</span>
                    <span className="text-sm line-through">{product.price}</span>
                  </>
                ) : (
                  <span className="text-lg font-bold text-[#ad7eae]">{product.price}</span>
                )}
              </div>

              {/* Disponibilidade */}
              <div className="mb-4 text-center">
                {product.available ? (
                  <span className="text-green-500 font-semibold">Disponível</span>
                ) : (
                  <span className="text-red-500 font-semibold">Indisponível</span>
                )}
              </div>

              {/* Botão "Ver Produto" */}
              {product.available ? (
                <Link
                  href={`/produto/${product.id}`}
                  className="bg-transparent border p-3 text-white font-bold rounded-lg text-center block hover:bg-gray-900 duration-500"
                >
                  Ver Produto
                </Link>
              ) : (
                <button
                  disabled
                  className="bg-gray-500 border p-3 text-white font-bold rounded-lg text-center block cursor-not-allowed"
                >
                  Indisponível
                </button>
              )}
            </div>
          ))}
        </Slider>

        {/* Carregar mais produtos quando rolado até o final */}
        {hasMore && (
          <button
            onClick={loadMoreProducts}
            className="mt-6 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 duration-300"
          >
            Carregar mais produtos
          </button>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
