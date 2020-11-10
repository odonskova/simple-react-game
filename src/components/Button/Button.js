import React from "react";
import './Button.css';
import {Link} from 'react-router-dom'

const Button = (props) => (
    <>
        <Link to='/game'
              className='main-button'
              onClick={props.onRetry}
        >{props.buttonText}
        </Link>
    </>
);

export default Button