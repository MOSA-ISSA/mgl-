import React from 'react';

const Card = ({Name}) => {
    return (
        <div className='Card'>
            <h1>
              {Name?Name:"Card"}  
            </h1>
        </div>
    );
}

export default Card;
