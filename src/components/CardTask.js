import React, { Component } from 'react';


const CardTask = (props) => {
    //TODO: see how to pass images as props
    console.log('CardTask', props);
    return (
        <div>
            <div>
                <img src={require('../img/' + props.photoname.toLowerCase() + '.png')} alt=""/>
                <div>{props.cardTaskName}</div>
                <div>{props.cardTaskPosition}</div>
            </div>
            <div>{props.cardTaskContent}</div>
        </div>
    );
};

export default CardTask;
