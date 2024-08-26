/** @format */
"use client";

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image'; // Importando o componente Image
import products from '../../../itens/produtosData';
import RelatedProducts from '../../../components/pages/produtos/relacionados'; // Ajuste o caminho conforme necessário

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  discountPrice?: string;
  rating: number;
  available: boolean;
  images: string[];
}

interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const productId = params.id;
  const product = products.find(p => p.id.toString() === productId);

  // Estado para gerenciar a imagem principal exibida
  const [mainImage, setMainImage] = useState<string>(product?.images[0] || '');

  // Encontrar produtos relacionados (exceto o produto atual)
  const relatedProducts = products.filter(p => p.id.toString() !== productId);

  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <div className="container mx-auto px-4 pt-44 mb-44 text-texto">
      <div className="bg-background border bg-opacity-95 p-6 md:p-8 lg:p-10 mx-4 md:mx-8 lg:mx-12 shadow-lg rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Imagens do Produto */}
          <div className="flex-shrink-0 md:w-1/3 mb-6 md:mb-0 flex flex-col items-start">
            {/* Imagem Principal */}
            <div className="relative h-60 md:h-80 lg:h-96 mb-4 w-full">
              <Image
                src={mainImage}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg transition-transform duration-300 ease-in-out"
              />
            </div>
            {/* Miniaturas de Imagem */}
            <div className="flex flex-wrap space-x-3 md:space-x-4">
              {product.images.map((image, index) => (
                <div key={index} className="relative w-20 h-20 md:w-24 md:h-24 cursor-pointer">
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg border-2 border-gray-300 transition-transform duration-300 ease-in-out hover:scale-105"
                    onClick={() => setMainImage(image)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Detalhes do Produto */}
          <div className="md:w-2/3 md:pl-6 flex flex-col justify-center items-center md:items-start">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-center md:text-left">{product.name}</h2>
            <p className="text-base md:text-lg lg:text-xl mb-6 text-center md:text-left">{product.description}</p>
            <div className="text-lg md:text-xl lg:text-2xl font-bold mb-6 text-center md:text-left">
              {product.discountPrice ? (
                <>
                  <span className="text-red-500 mr-2">{product.discountPrice}</span>
                  <span className="line-through text-gray-500">{product.price}</span>
                </>
              ) : (
                <span className="text-gray-800">{product.price}</span>
              )}
            </div>
            <div className="mb-6 text-center md:text-left">
              {product.available ? (
                <span className="text-green-500 font-semibold">Disponível</span>
              ) : (
                <span className="text-red-500 font-semibold">Indisponível</span>
              )}
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <button className="bg-transparent border p-3 text-white font-bold rounded-lg text-center block hover:bg-gray-900 duration-500">
                Adicionar ao Carrinho
              </button>
              <button className="bg-transparent border p-3 text-white font-bold rounded-lg text-center block hover:bg-gray-900 duration-500">
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Produtos Relacionados */}
      <RelatedProducts products={relatedProducts} loadMoreProducts={() => {}} hasMore={false} />
    </div>
  );
}
