import React, { Component } from 'react'

const OpinionCard = (props) => {
    console.log("Opinion card", props);
    
    return ( 
        <div>
            <img src={require('../img/' + props.photoname.toLowerCase() + '.png')} alt=""/>
            <div>{props.content}</div>
            <div>{props.name}</div>
            <div>{props.time}</div>
            <div>{props.rating}</div>
        </div>
     );
}
 
export default OpinionCard;