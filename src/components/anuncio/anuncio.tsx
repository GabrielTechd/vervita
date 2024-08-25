export default function Anuncio() {
  return (
    <div className="relative">
      {/* Faixa de Desconto no Topo */}
      <div className="absolute top-20 left-0 w-full bg-[#ad7eae] bg-opacity-25 text-white text-center p-2 md:p-2 z-20">
        <p className="text-xs md:text-sm lg:text-base">
          Transforme sua vida com energias cósmicas! Aproveite agora!{" "}
          <span className="text-secundaria text-xs md:text-sm lg:text-base">50% OFF em todo o site</span>
        </p>
      </div>
    </div>
  );
}
