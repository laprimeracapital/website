import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconMenu, IconSearch, IconUser, IconX } from "@tabler/icons-react";
import { images } from "../helpers/images";
import { links } from "../helpers/links";
import moment from "moment";
import 'moment/locale/es';
moment.locale('es');

export default function Header () {

    const location = useLocation();
    const [ menu, setMenu ] = useState(false);
    const [ searchActive, setSearchActive ] = useState(false)

    const handleToogleMenu = () => setMenu(!menu);
    const handleToogleSearch = () => setSearchActive(!searchActive)

    return (

        <>

            <header className="w-full">
                <div className="w h m-auto flex align-center justify-between xl:w" style={{"--w": "95%", "--h": "60px", "--w-xl": "80%"}}>
                    <div className="flex">
                        <button className="w h center lg:none" style={{"--w": "40px", "--h": "40px", "--mnw": "40px"}} onClick={handleToogleMenu}><IconMenu/></button>
                        <button className="none w h lg:center" style={{"--w": "40px", "--h": "40px", "--mnw": "40px"}} onClick={handleToogleSearch}><IconSearch/></button>
                        <input type="text" className={`h bg-surface pv-sm ${searchActive ? 'block' : 'none'}`} style={{"--h": "40px"}} role="search" placeholder="Buscar" />
                    </div>
                    <Link to={'/'} className="flex w-full h" style={{"--h": "20px"}}>
                        <img src={images['logo-dark']} alt="La Primera Capital | Diario" className="w-full h" style={{"--h": "20px"}} />
                    </Link>
                    <button className="w h center" style={{"--w": "40px", "--h": "40px", "--mnw": "40px"}}><IconUser/></button>
                </div>
                <div className="w-full h m-auto bg-surface border-bottom flex align-center lg:bg xl:w" style={{"--h": "60px", "--w-xl": "80%"}}>
                    <p className="lg:none pv-lg">{moment().format('LL')}</p>
                    <ul className="none m-auto lg:flex lg:justify-center w-full h-full align-center gap-sm scroll scroll-hidden lg:pv-lg">
                        {links.map((link) => (
                            <Link key={link.slug} to={`/section/${link.slug}`} className={`text-nowrap text-sm pv-sm ph-md lg:text-md ${location.pathname === `/section/${link.slug}` ? 'text-medium text-black' : 'text-muted'}`}>{link.text}</Link>
                        ))}
                    </ul>
                </div>
            </header>

            <nav className="fixed top left w-screen h-screen flex flex-col gap-md p-sm bg scroll scroll-hidden transition-base" style={{"--top": "0", "--left": `${menu ? '0' : '-100dvw'}`}}>
                <div className="w-full flex justify-start">
                    <button className="w h center bg-surface" style={{"--w": "40px", "--h": "40px", "--mnw": "40px"}} onClick={handleToogleMenu}><IconX/></button>
                </div>
                <div className="w-full flex gap-sm">
                    <input type="text" name="searchText" id="searchText" className="w-full h bg-surface border pv-md" style={{"--w": "40px"}} placeholder="Buscar..." aria-label="Buscar" role="search" />
                    <button className="w h center bg-dark text-white" style={{"--w": "40px", "--h": "40px", "--mnw": "40px"}}><IconSearch size={18} /></button>
                </div>
                <ul className="w-full flex flex-col">
                    {links.map((link) => (
                        <Link key={link.slug} to={`/section/${link.slug}`} onClick={() => setMenu(false)} className="block w-full text-bold text-lg border-bottom ph-lg">{link.text}</Link>
                    ))}
                </ul>
            </nav>
        
        </>

    )

}