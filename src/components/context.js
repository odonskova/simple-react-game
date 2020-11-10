import React from "react";
import gameConfig from '../gameConfig'

export const GameConfigContext = React.createContext(gameConfig);
export const RewardMap = React.createContext(gameConfig.rewardMap);

