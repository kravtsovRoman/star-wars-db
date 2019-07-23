import React from 'react';

import './spiner.css';

const Spiner = () => {

    return (
        <div className="lds-css ng-scope">
            <div className="lds-eclipse">
                <div></div>
            </div>
        </div>
    );
}

export default Spiner;