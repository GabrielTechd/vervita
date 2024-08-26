import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Importando o componente Image
import products from '../../../itens/produtosData'; // Caminho para o seu arquivo de produtos

const ProductsPage = () => {
  const truncateText = (text: string, maxLength: number): string => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="relative pt-16 min-h-screen bg-background text-white">
      {/* Seção de Produtos */}
      <div className="relative container mx-auto px-4">
        {/* Contêiner pai para centralizar o contêiner de produtos */}
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-3">
            {products.map(product => (
              <div
                key={product.id}
                className={`bg-gradient-to-br bg-background border-2 p-5 rounded-lg shadow-xl flex flex-col justify-between h-[450px] w-[300px] ${!product.available ? 'opacity-50' : ''}`}
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
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>

                {/* Descrição */}
                <p className="text-sm mb-1 flex-1 overflow-hidden text-ellipsis">
                  {truncateText(product.description, 30)} {/* Trunca a descrição */}
                </p>

                {/* Preço e Desconto */}
                <div className="flex items-center mb-4">
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
                <div className="mb-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
