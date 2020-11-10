import React from "react";
import './Main.css';
import hand from "../../images/hand 1.svg";
import Button from "../Button/Button";


const Main = (props) => {
    const {reward, text, buttonText, onRetry} = props;

    return (
        <section className='main-container'
                 style={ buttonText === 'Start'
                     ? {'background': 'linear-gradient(to right bottom, rgb(255, 255, 255) 50%, rgb(255, 243, 235) 50%)'} : null}>

            <div className='main-container__image'>
                <img src={hand} alt="Hand"/>
            </div>

            <div className='main-container__text'>
                <p className={!reward
                    ? 'main-text__paragraphStart'
                    : 'main-text__paragraphFinish'}>{text}</p>
                { reward
                    ? <span className='main-container__reward'>${reward.toLocaleString()} earned</span>
                    : null }
                <Button
                    buttonText={buttonText}
                    onRetry={onRetry}/>
            </div>
        </section>
    )
};

export default Main