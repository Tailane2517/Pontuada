// pontuada\src\components\Header\index.jsx

import { NavLink, Link } from 'react-router-dom';
import './styles.css';
import hero from '../../assets/hero.png';

function Header() {
    return (
        <header className="header">
            <div className="header__wrap"> 
                <Link to="/" className="brand">     
                     <img src={hero} alt="Logo da PharmaVida" className="brand__logo"/>
                <span>PharmaVida</span>
                   </Link>

                <nav className="nav">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'link active' : 'link'}>Home</NavLink>
                    <NavLink to="/servicos" className={({ isActive }) => isActive ? 'link active' : 'link'}>Serviços</NavLink>
                    <NavLink to="/sobre-nos" className={({ isActive }) => isActive ? 'link active' : 'link'}>Sobre Nós</NavLink>
                    <NavLink to="/fale-conosco" className={({ isActive }) => isActive ? 'link active' : 'link'}>Fale Conosco</NavLink>
                </nav>
            </div>
        </header>

        
    )

}

export default Header;