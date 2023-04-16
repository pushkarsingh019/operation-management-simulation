import {
    getCostPerUnit,
    getAverageWipCost,
} from "@/utils/roundTwo";

import { caseOne } from "@/utils/roundTwo";

export const getNetValue = (lotSize) => {
    const capitalSaving = getAverageWipCost(55500) - getAverageWipCost(lotSize);
    const additionalCost = ((getCostPerUnit(lotSize) - getCostPerUnit(55500)) * caseOne.volume);
    const netValue = capitalSaving + additionalCost;
    return netValue;
};

export const formattedTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${formattedMinutes}:${formattedSeconds}`;
}