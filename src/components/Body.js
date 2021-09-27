import React from 'react';
import Header from './Body_Components/Header';
import './Body.css'

const Body = ({ spotify }) => {
    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body__info">
                <img src="https://newjams-images.scdn.co/v2/discover-weekly/pOdnPTRma6KZzKPNRN9oUA==/bmVuZW5lbmVuZW5lbmVuZQ==/default"
                    alt=""
                />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you. Updates every Monday.</p>

                </div>
            </div>
        </div>
    );
}

export default Body;
