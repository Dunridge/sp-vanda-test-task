import React from 'react';
import EmptyStar from '../svg/empty-star.svg';
import FilledStar from '../svg/filled-star.svg';


const drawStars = (numOfStars) => {
    // console.log("draw stars") --> this works
    const emptyStarArray = [];
    const filledStarArray= [];
    for (let i = 0; i < numOfStars; i++) {
        filledStarArray.push(<img src={FilledStar} key={i}/>);
        // <img src={FilledStar} />
    }
    for (let i = 0; i < 5 - filledStarArray.length; i++) {
        emptyStarArray.push(<img src={EmptyStar} key={100 - i}/>);
        // // <img src={EmptyStar} />
    }
    const resultArray = [...filledStarArray, ...emptyStarArray];
    return resultArray;
} 


export default drawStars;