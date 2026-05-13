"use client";
// @flow strict
import { useState } from "react";
import Link from "next/link";
import { RiContactsFill } from 'react-icons/ri';


function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#16f2b3] text-3xl font-bold">
            Cleudson
          </Link>
        </div>

        <button
          aria-label="Abrir menu"
          className="md:hidden p-2 rounded-md text-white hover:bg-white/5"
          onClick={() => setOpen((s) => !s)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <ul className={`${open ? 'block' : 'hidden'} mt-4 w-full flex-col items-start text-sm md:mt-0 md:block md:w-auto md:flex md:flex-row md:space-x-6`} id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">Sobre Mim</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">Cursos</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">Habilidades</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">Formação</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">Projetos</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#contact">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600 flex items-center gap-2">
                <span>Contato</span>
                <RiContactsFill />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;