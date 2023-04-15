export const caseOne = {
    volume : 6500000,
    setupTimePerLot : 60,
    totalAvailableTime : 8760,
    runTimeSecondsPerUnit : 0.15,
    averageLabourRate : 100,
    employeesPerShift : 25,
    totalMaterialCost : 120000000,
    scrapMaterialPerSetup : 400,
    wipAvailable : 10,
};

export const getProductionTime = (lotSize) => {
    const totalSetupTime = (caseOne.volume / lotSize) * 60;
    const totalRunTime = (caseOne.runTimeSecondsPerUnit * caseOne.volume) / 3600;
    const totalProductionTime = (totalSetupTime + totalRunTime)
    return Math.round(totalProductionTime * 10) / 10;
};

export const getLabourCost = (lotSize) => Number(Math.round(caseOne.averageLabourRate * caseOne.employeesPerShift * getProductionTime(lotSize) * 10) / 10);

export const getScrapCost = (lotSize) => (caseOne.volume / lotSize) * caseOne.scrapMaterialPerSetup;

export const getProductionCost = (lotSize) => caseOne.totalMaterialCost + getLabourCost(lotSize) + getScrapCost(lotSize);

export const wipNumberOfUnits = (lotSize) => caseOne.wipAvailable * lotSize;

export const getCostPerUnit = (lotSize) => Math.round((getProductionCost(lotSize) / caseOne.volume) * 10) / 10;

export const getCapacityUtilisation = lotSize => {
    return Math.round(((getProductionTime(lotSize) / caseOne.totalAvailableTime) * 100 ) * 10) / 10
};

export const getAverageWipCost = lotSize => Math.round((wipNumberOfUnits(lotSize) / getCostPerUnit(lotSize)) * 10) / 10