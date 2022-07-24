import './SidebarItens.css';

import { FaUserTie, FaHome, FaSave } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SidebarItens = () => {
    return (
        <nav className="navbar">
            <ul>
                <Link to="/">
                    <span>
                        <FaHome />
                    </span>
                    Home
                </Link>
                <Link to="/">
                    <span>
                        <FaSave />
                    </span>
                    Produtos
                </Link>
                <Link to="/">
                    <span>
                        <FaUserTie />
                    </span>
                    Relatórios
                </Link>
            </ul>
        </nav>
    );
};

export default SidebarItens;
