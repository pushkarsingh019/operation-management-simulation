// Given elements of the simulation

const lotSize = 50000 - 60000;
const volume = 6500000;
const setupTimeMins = 60;
const runTimeSecondsUnit = 0.15;
const numOfLotsBatches = volume / lotSize;
const setupTimePerLot = setupTimeMins;
const totalSetupTime = numOfLotsBatches * setupTimePerLot;
const totalRunTime = runTimeSecondsUnit * (volume / 3600);
const averageLabourRate = 100;
const employeesShift = 25;
const daysYear = 365;
const hourShift = 8;
const shiftDay = 3;
const totalAvailableTime = daysYear * hourShift * shiftDay;
const scrapMaterialPerSetup = 400;
const materialCost = 120000000;
const totalMaterialCost = materialCost;
const totalScrapCost = scrapMaterialPerSetup * volume;
const wipAvailable = 10;
const wipNumOfUnits = wipAvailable * lotSize;

// Elements that the users have to find

const totalProductionTime = totalSetupTime + totalRunTime;
const capacityUtilization = totalProductionTime / totalAvailableTime;
const totalLabourCost = totalProductionTime * averageLabourRate * employeesShift;

// Elements dependent on findings of the user
const totalProductionCost = totalMaterialCost + totalLabourCost + totalScrapCost;
const costPerUnit = totalProductionCost / volume;
const averageWipCost = wipNumOfUnits / costPerUnit;
const capitalSaving = averageWipCost - averageWipCost(55500);
const additionalCost = (costPerUnit(55500) - costPerUnit) * volume;
