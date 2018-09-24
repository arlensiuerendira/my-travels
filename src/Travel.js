import React from "react";

const Travel = ({destination, country, photo, distance}) => (
    <block>
        <h1>{destination}</h1>
        <p>We can find this beautiful place in {country} at {distance} km from Lille.</p>
        <figure>
            <img
            src={photo} alt={destination}/>
        </figure>
    </block>
);

export default Travel;