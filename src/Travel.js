import React from "react";

const Travel = ({destination, country, photo, distance}) => (
    <block>
        <h1>{destination}</h1>
        <p>We can find this beautiful place in {country} at {distance} km from here.</p>
        <figure>
            <img
            src={photo} alt={destination}/>
        </figure>
    </block>
);

export default Travel;

/*import React from "react";

const Travel = ({destination, country, photo, distance}) => (
  <figure>
    <img
      src={photo} alt={destination}/>
    <figcaption>
      <blockquote>{country}</blockquote>
        <cite>{distance}</cite>
    </figcaption>
  </figure>
);

export default Travel;*/