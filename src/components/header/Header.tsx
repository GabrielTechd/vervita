/** @format */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import { FiMenu } from "react-icons/fi";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isSideMenuOpen, setMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const navlinks = [
    { label: "Início", link: "/" },
    { label: "Produtos", link: "/produtos" },
    { label: "Ritual de Proteção", link: "/ritual-protecao" },
    { label: "Depoimentos", link: "/depoimentos" },
    { label: "Loja", link: "/loja" },
    { label: "Contato", link: "/contato" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={clsx(
        "fixed top-0 w-full z-50 transition-transform duration-300 bg-background shadow-md",
        !isVisible && "-translate-y-full"
      )}
    >
      <nav className="flex items-center justify-between py-4 px-6 md:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center text-2xl font-bold">
          <h1 className="mr-2 text-texto">Vervita </h1>
          <Image src="/logo.png" alt="logo" width={45} height={45} />
        </Link>

        {/* Navegação Centralizada */}
        <div className="hidden lg:flex items-center gap-8">
          {navlinks.map((d, i) => (
            <Link
              key={i}
              href={d.link}
              className={clsx(
                "text-lg font-medium",
                pathname === d.link
                  ? "text-primaria"  // Ajuste a cor ativa aqui
                  : "text-texto hover:text-primaria transition-colors duration-300"
              )}
            >
              {d.label}
            </Link>
          ))}
        </div>

        {/* Ícones de Perfil e Carrinho */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/perfil" className="text-2xl text-texto hover:text-primaria transition-colors duration-300">
            <FaUser />
          </Link>
          <Link href="/carrinho" className="text-2xl text-texto hover:text-primaria transition-colors duration-300">
            <FaShoppingCart />
          </Link>
        </div>

        {/* Ícone do Menu Mobile */}
        <div className="lg:hidden flex items-center ml-auto">
          <FiMenu
            onClick={() => setMenu(true)}
            className="text-3xl cursor-pointer text-texto"
          />
        </div>

        {/* Sidebar do Menu Mobile */}
        <div
          className={clsx(
            "fixed h-full w-full lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 transform -translate-x-full transition-transform duration-300",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-texto bg-background flex flex-col p-8 w-64 h-full">
            <div className="flex justify-end mb-8">
              <IoCloseOutline
                onClick={() => setMenu(false)}
                className="text-3xl cursor-pointer"
              />
            </div>

            {navlinks.map((d, i) => (
              <Link
                key={i}
                href={d.link}
                className={clsx(
                  "text-lg font-bold py-2",
                  pathname === d.link
                    ? "text-primaria"
                    : "text-texto hover:text-gray-300"
                )}
                onClick={() => setMenu(false)}
              >
                {d.label}
              </Link>
            ))}

            {/* Ícones de Perfil e Carrinho no Mobile */}
            <div className="mt-8 flex gap-6">
              <Link href="/perfil" className="text-2xl">
                <FaUser />
              </Link>
              <Link href="/carrinho" className="text-2xl">
                <FaShoppingCart />
              </Link>
            </div>
          </section>
        </div>
      </nav>
    </header>
  );
}
