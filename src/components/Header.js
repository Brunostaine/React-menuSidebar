import './Header.css';

import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

import Sidebar from './Sidebar';

const Header = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    };

    return (
        <header className="header">
            <i className="iconeBar">
                <FaBars onClick={showSidebar} />
                {sidebar && <Sidebar active={setSidebar} />}
            </i>
        </header>
    );
};

export default Header;
