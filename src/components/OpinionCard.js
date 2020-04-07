import React, { Component } from 'react';
import drawStars from '../helpers/drawStars';

const OpinionCard = (props) => {
    console.log('Opinion card', props);

    return (
        <div>
            <img
                src={require('../img/' +
                    props.photoname.toLowerCase() +
                    '.png')}
                alt=""
            />
            <div>
                <div className="contact-details">
                    <div>{props.content}</div>
                    <div>{props.name}</div>
                </div>
                <div className="time-rating">
                    <div>{props.time}</div>
                    <div>{
                        drawStars(props.rating)
                        }</div>
                </div>
            </div>
        </div>
    );
};

export default OpinionCard;
