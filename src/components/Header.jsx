import './css/header.css'

import { useState } from 'react';

function Header() {
    const [title] = useState('Los Simpsons');

    return (
        <header>
        <h1>{title}</h1>
        </header>
    );
}

export default Header