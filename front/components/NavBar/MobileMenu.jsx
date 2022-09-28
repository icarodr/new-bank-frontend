import React from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

const MobileNavbar = ({showMenu, active}) => {
    return(
        <ul className={active ? "z-50 flex-col flex items-center fixed inset-0 justify-center left-1/4 bg-black/40 backdrop-blur-lg gap-8 p-8 md:hidden" : "hidden" }>
            <AiOutlineClose onClick={showMenu} size={20}/>
            <li><Link href="/"><a>Início</a></Link></li>
            <li><Link href="/about"><a>Sobre</a></Link></li>
            <li><Link href="/contact"><a>Contatos</a></Link></li>
            <li className="px-8 py-0.5 border hover:bg-gray-600/30"><Link href="/login">Logout</Link></li>
        </ul>
    );
}

export default MobileNavbar;