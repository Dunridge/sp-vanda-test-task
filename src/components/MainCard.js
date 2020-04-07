import React, { Component } from 'react';
import CardDesign from './CardDesign';

const MainCard = (props) => {
    //just make position relative to this one and move it around
    console.log('MainCard: ', props);

    return (
        <div>
            <div className="title">
                <div>{props.mainCardTitle}</div>
                <div>{props.mainCardTitleBold}</div>
            </div>

            <div className="card-container">
                <CardDesign
                    title={props.mainCardFirstCardTitle}
                    price={props.mainCardFirstCardPrice}
                    rate={props.mainCardFirstCardRate}
                    content={props.mainCardFirstCardContent}
                />
                <CardDesign
                    title={props.mainCardSecondCardTitle}
                    price={props.mainCardSecondCardPrice}
                    rate={props.mainCardSecondCardRate}
                    content={props.mainCardSecondCardContent}
                />
            </div>
        </div>
    );
};

export default MainCard;
