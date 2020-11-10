import React from "react";
import classes from './QuestionOptions.module.css'

const QuestionOptions = (props) => {
    const cls = [classes.options];

    if (props.state) {
        cls.push(classes[props.state]);
    }

    return (
        <div className={classes.optionsContainer}>
            <button
               className={cls.join(' ')}
               onClick={props.onAnswerClick}
           >
            {props.answers.option} {props.answers.answer}
        </button>
        </div>
    )
};

export default QuestionOptions