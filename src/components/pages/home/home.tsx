import Wave from '@/components/weve/wev';
import React from 'react';

const Home = () => {
  return (
    <div className="relative pt-16 md:pt-0 min-h-screen bg-gray-900">

      {/* Faixa de Desconto no Fim */}
      <div className="absolute bottom-0 left-0 w-full text-white text-center p-5 z-20">
        <p className='text-[#ad7eae] text-lg mb-4 md:text-xl'>
          Liberte-se das amarras do cotidiano! A hora é agora!
        </p>
        <p className='text-sm md:text-base mx-auto max-w-full md:max-w-4xl px-4'>
          Mergulhe no mundo dos espíritos e energias ocultas. Deixe o cosmos revelar o que está além da sua visão. Prepare-se para uma jornada de transformação com signos zodiacais e forças invisíveis. Desperte seu potencial agora!
        </p>
        <div className="ripped-effect-bottom"></div>
      </div>

      {/* Pseudo-elemento para a sombra no fundo */}
      <div className="absolute inset-0 bg-gray-900 z-0">
        <div className="absolute inset-0 bg-[url('/bgimg.jpg')] bg-cover bg-no-repeat bg-center opacity-50"></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="relative flex flex-col min-h-screen z-10 pt-20 pb-20 md:flex-row">
        {/* Seção da Imagem à Esquerda */}
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="relative max-w-xs rounded-lg shadow-lg">
            <img src="/left-image.png" alt="Left" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>

        {/* Seção Central com Texto */}
        <div className="flex-1 flex items-center text-center justify-center p-4">
          <div className="bg-opacity-60 text-white p-6 rounded-lg shadow-lg max-w-full md:max-w-max">
            <h1 className="text-3xl md:text-5xl mb-4 text-center -tracking-tighter">Vervita</h1>
            <p className='text-base mb-6 md:text-lg'>
              O despertar da sua energia mística
            </p>
            <Wave />
            <p className="text-sm md:text-base">
              Prepare-se para descobrir as forças que moldam sua vida. Nossa comunidade mística está aqui para guiá-lo através das energias cósmicas e revelações espirituais. Sintonize com o universo e desbloqueie o poder dos signos zodiacais em sua jornada de autoconhecimento e transformação.
            </p>
          </div>
        </div>

        {/* Seção da Imagem à Direita */}
        <div className="flex-1 flex items-center justify-center p-4 md:pl-8 mb-24 md:mb-0"> {/* Adicionada margem à esquerda e inferior para dispositivos móveis */}
          <div className="relative max-w-xs rounded-lg shadow-lg">
            <img src="/right-image.png" alt="Right" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
