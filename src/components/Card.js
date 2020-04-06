import React from 'react'

const Card = (props) => { // see how to pass images as props in https://stackoverflow.com/questions/46417199/how-to-import-images-via-props-in-react-and-use-the-import-path
    console.log("Card", props)
    /*
    <Card
                            name={
                                this.state.reviewCardFirstCardName
                            }
                            content={
                                this.state.reviewCardFirstCardContent
                            }
                        />
    */
    return (  
        <div className="card">
            {/* TODO: pass image here */}
            <div>{props.name}</div>
            <div>{props.content}</div>
        </div>
    );
}
 
export default Card;