import React from 'react'

const Card = (props) => { // see how to pass images as props in https://stackoverflow.com/questions/46417199/how-to-import-images-via-props-in-react-and-use-the-import-path
    console.log("Card", props)
    return (  
        <div className="card">
            Card
        </div>
    );
}
 
export default Card;