import React from 'react';

import Navigation from './Navigation';
import Header from './Header';

const NotFound = () => {
    return (
        <div className="container">
            {/*Component*/}
            <Header />
            <section>
            {/*Component*/}
            <Navigation />
            <h2>404</h2>
            Opps! URL you are looking for is not found!
            </section>
        </div>
    );
}

export default NotFound;