import React from 'react';
import { Helmet } from 'react-helmet';

class Head extends React.Component {
    render() {
        return (
        <div>
            <Helmet>
                <link rel="icon" type="image/png+xml" href="../images/rosquilla.png" />
                <title>Los Simpsons</title>
                <meta name="description" content="Los Simpsons" />
            </Helmet>
            {/* Resto del contenido del componente */}
        </div>
        );
    }
}

export default Head;