import React, {useEffect, useState} from "react";
import './ActiveQuestion.css';

import QuestionOptions from "../QuestionOptions/QuestionOptions";
import MobileMenu from "../../MobileMenu/MobileMenu";
import RewardPage from "../../RewardPage/RewardPage";

const ActiveQuestion = (props) => {
    const [menuButton, setMenuButton] = useState(true);
    const bgColor = '#F5F5F7';

    const showMenuButton = () => {
        if (window.innerWidth <= 960) {
            setMenuButton(false)
        } else {
            setMenuButton(true)
        }
    };

    useEffect(() => {
        showMenuButton()
    }, []);

    window.addEventListener('resize', showMenuButton);


    return (
        <section>
            {!menuButton
                ? <MobileMenu>
                    <div className='game-section__rewardMap-mobile'>
                        <RewardPage results={props.results} active={props.active} bgC={bgColor}/>
                    </div>
                </MobileMenu>
                : null}
            <div className='game-section'>
                <div className='game-section__question'>
                    <p>{props.question}</p>
                </div>

                <div className='game-section__options'>
                    {props.answers.answerVariants.map((answer, index) => {
                        return (
                            <QuestionOptions
                                key={index}
                                answers={answer}
                                onAnswerClick={() => props.onAnswerClick(answer.id)}
                                state={props.state ? props.state[answer.id] : null}
                            />
                        )
                    })}
                </div>
            </div>
            {menuButton ?
                <div className='game-section__rewardMap'>
                    <RewardPage results={props.results} active={props.active}/>
                </div> : null}

        </section>
    )
};

export default ActiveQuestion