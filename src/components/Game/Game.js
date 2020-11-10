import React, { useContext, useState } from "react";
import { GameConfigContext } from "../context";
import BodyBackgroundColor from 'react-body-backgroundcolor'
import ActiveQuestion from "./ActiveGame/ActiveQuestion";
import Main from "../Main/Main";

const Game = () => {
    const gameConfig = useContext(GameConfigContext);

    const [gameQuestions] = useState(gameConfig.questionsList);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [results, setResults] = useState({});
    const [reward, setReward] = useState('');
    const [answerState, setAnswerState] = useState(null);
    const [isFinished, setIsFinished] = useState(false);
    const [activeReward, setActiveReward] = useState(500);

    const onAnswerClickHandler = answerId => {
        const question = gameQuestions[activeQuestion];
        const result = results;

        const timeOutForAnswers = answer => {
            if (!result[question.id]) {
                result[question.id] = answer
            }
            const timeout = window.setTimeout(() => {
                if (isGameFinished()) {
                    setResults(result);
                    setIsFinished(true);
                } else {
                    setActiveQuestion(prevQuestion => prevQuestion + 1);
                    setResults(result);
                    setAnswerState(null);
                    setActiveReward(prev => countActiveQuestionReward(prev));
                }
                window.clearTimeout(timeout)
            }, 1000);
        };

        question.rightAnswerId.forEach(rightAnswer => {
            setAnswerState({[answerId]: 'selected'});
            const timeout = window.setTimeout(() => {
                if (answerId === rightAnswer) {
                    timeOutForAnswers('correct');
                    setAnswerState({[answerId]: 'correct'});
                    setReward(gameConfig.rewardMap[activeQuestion])
                } else {
                    const timeout = window.setTimeout(() => {
                        setIsFinished(true);
                        window.clearInterval(timeout)
                    }, 500);
                    timeOutForAnswers('wrong');
                    setAnswerState({[answerId]: 'wrong'});
                    setReward(gameConfig.rewardMap[activeQuestion]);
                }
                window.clearTimeout(timeout)
            }, 1500)
        });
    };

    const isGameFinished = () => {
        if (activeQuestion + 1 === gameQuestions.length ) {
            setReward(gameConfig.rewardMap[activeQuestion + 1]);
            setIsFinished(true)
        } else {
            return false
        }
    };

    const retryHandler = () => {
        setResults({});
        setIsFinished(false);
        setActiveQuestion(0);
        setActiveReward(500)
    };

    const countActiveQuestionReward = (number) => {
        return number === 64000 ? 125000 : number + number
    };

    return (
        <> { isFinished
            ? <Main
                text="Total score: "
                buttonText='Try again'
                reward={reward || '0'}
                onRetry={retryHandler}
            />
            : <BodyBackgroundColor backgroundColor='#F5F5F7' >
                <ActiveQuestion
                    question={gameQuestions[activeQuestion].question}
                    answers={gameQuestions[activeQuestion]}
                    state={answerState}
                    onAnswerClick={onAnswerClickHandler}
                    results={results}
                    active={activeReward}
                />
            </BodyBackgroundColor>
        }
        </>
    )
};

export default Game