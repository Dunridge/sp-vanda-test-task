import React from 'react';

const Card = (props) => {
    // see how to pass images as props in https://stackoverflow.com/questions/46417199/how-to-import-images-via-props-in-react-and-use-the-import-path
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
