import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-400 py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Sobre o Virvite */}
                    <div className="mb-6">
                        <h6 className="text-white text-lg font-bold mb-3 uppercase tracking-wide">Sobre o Virvite</h6>
                        <p className="text-gray-400">
                            O Virvite é uma loja online que explora o mundo místico e espiritual, oferecendo produtos que conectam você com energias e símbolos poderosos.
                        </p>
                    </div>

                    {/* Categorias */}
                    <div className="mb-6">
                        <h6 className="text-white text-lg font-bold mb-3 uppercase tracking-wide">Categorias</h6>
                        <ul className="space-y-2">
                            <li><a href="/cristais-magicos" className="hover:text-white">Cristais Mágicos</a></li>
                            <li><a href="/pedras-magicas" className="hover:text-white">Pedras Mágicas</a></li>
                            <li><a href="/rituais" className="hover:text-white">Rituais</a></li>
                            <li><a href="/simbolos-espirituais" className="hover:text-white">Símbolos Espirituais</a></li>
                            <li><a href="/amuletos-talismãs" className="hover:text-white">Amuletos & Talismãs</a></li>
                            <li><a href="/incensos" className="hover:text-white">Incensos</a></li>
                        </ul>
                    </div>

                    {/* Links Rápidos */}
                    <div className="mb-6">
                        <h6 className="text-white text-lg font-bold mb-3 uppercase tracking-wide">Links Rápidos</h6>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:text-white">Início</a></li>
                            <li><a href="/produtos" className="hover:text-white">Produtos</a></li>
                            <li><a href="/ritual-protecao" className="hover:text-white">Ritual de Proteção</a></li>
                            <li><a href="/depoimentos" className="hover:text-white">Depoimentos</a></li>
                            <li><a href="/loja" className="hover:text-white">Loja</a></li>
                            <li><a href="/contato" className="hover:text-white">Contato</a></li>
                        </ul>
                    </div>
                </div>
                <hr className="border-gray-600 mb-6" />
                <div className="text-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Virvite. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
