import React from 'react';

/*
<CardDesign title={props.mainCardFirstCardTitle}
                            price={props.mainCardFirstCardPrice}
                            rate={props.mainCardFirstCardRate}
                            content={props.mainCardFirstCardContent}
                />
*/
const CardDesign = (props) => {
    console.log('CardDesign', props);
    return (
        <div>
            <div className="container">
                <div>{props.title}</div>
                <div>
                    <div>{props.price}</div>
                    <div>{props.rate}</div>
                </div>
                <div>{props.content}</div>
            </div>
        </div>
    );
};

export default CardDesign;
