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