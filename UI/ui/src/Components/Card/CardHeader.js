import React from 'react';
import './CardHeader.css';

const CardHeader = (props) => {
    return( 
    <div className='card-header'>
          <h2> {props.Name} </h2>
          <h1> {props.Rating} </h1>
        <h5> {props.Ganre} </h5>
        <p> {props.Director} </p>    
    </div>);
}

export default CardHeader;