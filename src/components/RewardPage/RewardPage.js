import React, {useContext} from 'react';
import './RewardPage.css'
import {RewardMap} from "../context";

const RewardPage = ({results, active, bgC}) => {
    const rewardMap = useContext(RewardMap);
    return (
        <div className='rewardMap-container'
             style={bgC
            ? {'background': bgC}
            : {'background': '#fff'}}>

            {  Object.entries(rewardMap).map(([key, value]) => {
                        return <button
                            key={key}
                            className='rewardMap-container'
                            style={active.toLocaleString() === rewardMap[key]
                                ? {'border': '1px solid #E87928', 'color': '#FF8B37'}
                                : {'border': '1px solid #D0D0D8'}}
                            disabled={results[key] === 'correct'}
                        >${value.toLocaleString()}
                        </button>
                    }
                )}
        </div>
    );
};

export default RewardPage;