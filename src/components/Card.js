import React from 'react';

const Card = (props) => {
    console.log('Card', props);

    return (
        <div className="card">
            <div>
                <img
                    src={require('../img/' +
                        props.photoname.toLowerCase() +
                        '.png')}
                    alt=""
                />
            </div>
            <div>
                <div>{props.name}</div>
                <div>{props.content}</div>
            </div>
        </div>
    );
};

export default Card;
