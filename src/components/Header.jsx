import './css/header.css'
import logoImage from '../images/rosquilla0003.png'

import { useState } from 'react';

function Header() {
    const [title] = useState('Los Simpsons');

    return (
        <header>
            
            <h1><img className='img-header' 
            src={logoImage} 
            alt="rosquilla de los simson" />
            {title}</h1>
        </header>
    );
}

export default Header