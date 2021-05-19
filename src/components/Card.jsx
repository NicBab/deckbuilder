import React from 'react';

const Card = ({
    name,
    type,
    manaCost,
    text,
    flavor,
    imageUrl
}) => {
    return (
        <div className="Card">
            { name } - { manaCost } <br />
            { type } <br />
            { text } <br />
            { flavor } <br />
         <img src={ imageUrl } />
      </div>
    );
};

export default Card;