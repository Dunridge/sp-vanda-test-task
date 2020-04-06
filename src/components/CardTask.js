import React, { Component } from 'react';

/*
<CardTask
                        cardTaskName={this.state.cardTaskName}
                        cardTaskPosition={this.state.cardTaskPosition}
                        cardTaskContent={this.state.cardTaskContent}
                    />
*/

const CardTask = (props) => { //TODO: see how to pass images as props 
    console.log("CardTask", props);
    return ( 
        <div>
            <div>{props.cardTaskName}</div>
            <div>{props.cardTaskPosition}</div>
            <div>{props.cardTaskContent}</div>
        </div>
     );
}
 
export default CardTask;