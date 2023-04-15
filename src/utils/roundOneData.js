export const roundOnePrompt = [
    {
        id : 1,
        prompt : "Compute ABC's company Total production time with the given details. This company has a volume of 6500000, and the initial lot-size is 55500 of the company, their Set-up time is around 60 minutes whereas its Run-time is 0.15 second per unit."
    },
    {
        id : 2,
        prompt : "There are around 75 employees spread equally across 3 shifts working for 8 hours for 365 days. The average labor rate is 100 in the industry. Calculate ABC's capacity utilization."
    },
    {
        id : 3,
        prompt : "In the mass production of Chocolate manufacturing, production processes especially those related to cutting and punching which increases the scrap material per set-up for different flavors to Rs.400. Whereas the Material cost as per the production is 120000000. With this information, try to calculate the Labor cost as well as the Cost per unit"
    },
    {
        id : 4,
        prompt : "Calculate the Average WIP Cost if the WIP available is 10"
    },
    {
        id : 5,
        prompt : "ABC is currently facing an issue to reduce its cost per unit. This can only be done by either increasing saving or by decreasing cost. Help ABC to achieve its objective by making locgical assumptions!"
    }
];

export const mainPrompt = "Compute ABC's company Total production time with the given details. This company has a volume of 6500000, and the initial lot-size is 55500 of the company, their Set-up time is around 60 minutes whereas its Run-time is 0.15 second per unit. There are around 75 employees spread equally across 3 shifts working for 8 hours for 365 days. The average labor rate is 100 in the industry. Calculate ABC's capacity utilization. In the mass production of Chocolate manufacturing, production processes especially those related to cutting and punching which increases the scrap material per set-up for different flavors to Rs.400. Whereas the Material cost as per the production is 120000000. With this information, try to calculate the Labor cost as well as the Cost per unit. Calculate the Average WIP Cost if the WIP available is 10. ABC is currently facing an issue to reduce its cost per unit. This can only be done by either increasing saving or by decreasing cost. Help ABC to achieve its objective by making locgical assumptions! "


export const caseOne = {
    volume : 6500000,
    lotSize : 55500,
    setupTimePerLot : 60,
    totalAvailableTime : 8760,
    runTimeSecondsPerUnit : 0.15,
    averageLabourRate : 100,
    employeesPerShift : 25,
    totalMaterialCost : 120000000,
    scrapMaterialPerSetup : 400,
    wipAvailable : 10,
}


const getProductionTime = () => {
    const totalSetupTime = (caseOne.volume / caseOne.lotSize) * 60;
    const totalRunTime = (caseOne.runTimeSecondsPerUnit * caseOne.volume) / 3600;
    const totalProductionTime = (totalSetupTime + totalRunTime)
    return totalProductionTime;
};

const getCorrectLabourCost = () => Number(Math.round(caseOne.averageLabourRate * caseOne.employeesPerShift * getProductionTime() * 10) / 10);
const getScrapCost = () => (caseOne.volume / caseOne.lotSize) * caseOne.scrapMaterialPerSetup;
const getProductionCost = () => caseOne.totalMaterialCost + getCorrectLabourCost() + getScrapCost();
const wipNumberOfUnits = () => caseOne.wipAvailable * caseOne.lotSize;
const getCostPerUnit = () => getProductionCost() / caseOne.volume;

export const getCorrectProductionTime = (productionTime) => {
    const totalSetupTime = (caseOne.volume / caseOne.lotSize) * 60;
    const totalRunTime = (caseOne.runTimeSecondsPerUnit * caseOne.volume) / 3600;
    const totalProductionTime = Math.round((totalSetupTime + totalRunTime) * 10) / 10;
    const roundedProductionTime = Math.round(productionTime * 10) / 10;
    return roundedProductionTime === totalProductionTime;
};


export const getCapacityUtilization = (capacityUtlisation) => {
    const correctCapacityUtlisation = (getProductionTime() / caseOne.totalAvailableTime) * 100;
    const roundedCapacityUtlisation = Math.round(correctCapacityUtlisation * 10) / 10;
    return Number(roundedCapacityUtlisation) === Number(capacityUtlisation);
};

export const getLabourCost = (labourCost) => {
    const correctLabourCost = Math.round(caseOne.averageLabourRate * caseOne.employeesPerShift * getProductionTime() * 10) / 10;
    console.log(getProductionTime());
    console.log(correctLabourCost, labourCost)
    return Number(correctLabourCost) === Number(labourCost);
};

export const getCorrectCostPerUnit = costPerUnit => {
    const correctCostPerUnit = Math.round((getProductionCost() / caseOne.volume) * 10) / 10;
    console.log(correctCostPerUnit, costPerUnit)
    return correctCostPerUnit === Number(costPerUnit);
};

export const calculateAverageWipCost = averageWipCost => {
    const correctWipCost = Math.round((wipNumberOfUnits() / getCostPerUnit()) * 10) / 10;
    console.log(correctWipCost, averageWipCost);
    return correctWipCost === Number(averageWipCost);
};




