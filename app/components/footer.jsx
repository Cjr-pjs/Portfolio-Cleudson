// @flow strict

import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";

function Footer() {
  return (
    <footer className="relative border-t border-[#353951] bg-[#0d1224] text-white">
      
      <div className="flex justify-center">
        <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
      </div>

      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-8">
        
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Portfolio desenvolvido por{" "}
            
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/cleudson-junior-515b933a5/"
              className="font-medium text-[#16f2b3] transition-colors duration-300 hover:text-violet-400"
            >
              Cleudson Junior
            </Link>
          </p>

          <Link
            target="_blank"
            href="https://github.com/Cjr-pjs/Portfolio-Cleudson"
            className="flex items-center gap-2 text-sm uppercase tracking-wide text-gray-300 transition-all duration-300 hover:text-[#16f2b3]"
          >
            <CgGitFork size={18} />
            <span>Star</span>
          </Link>

        </div>
      </div>
    </footer>
  );
}

export default Footer;