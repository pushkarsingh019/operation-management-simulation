import { useState } from "react";

import { roundOneHints } from "@/utils/gameData";
import {
    roundOnePrompt,
    getCorrectProductionTime,
    getCapacityUtilization,
    getLabourCost,
    getCorrectCostPerUnit,
    calculateAverageWipCost,
} from "@/utils/roundOneData";

export default function Round1() {
    const [productionTime, setProductionTime] = useState();
    const [capacityUtlisation, setCapacityUtilisation] = useState();
    const [labourCost, setLabourCost] = useState();
    const [costPerUnit, setCostPerUnit] = useState();
    const [wipCost, setWipCost] = useState();

    const [productionTimeHint, setProductionTimeHint] = useState(false);
    const [capacityUtlisationHint, setCapacityUtilisationHint] =
        useState(false);
    const [labourCostHint, setLabourCostHint] = useState(false);
    const [costPerUnitHint, setCostPerUnitHint] = useState(false);
    const [wipCostHint, setWipCostHint] = useState(false);

    const [productionTimeValid, setProductionTimeValid] = useState();
    const [capacityUtlisationValid, setCapacityUtlisationValid] = useState();
    const [labourCostValid, setLabourCostValid] = useState();
    const [costPerUnitValid, setCostPerUnitValid] = useState();
    const [wipCostValid, setWipCostValid] = useState();

    const onFormSubmit = (event) => {
        event.preventDefault();
        // let result = calculateAverageWipCost(wipCost);
        // alert(result);
    };

    const onCheck = (event) => {
        event.preventDefault();
        const isProductionTimeCorrect =
            getCorrectProductionTime(productionTime);
        setProductionTimeValid(isProductionTimeCorrect);
        const isCapacityUtilisationCorrect =
            getCapacityUtilization(capacityUtlisation);
        setCapacityUtlisationValid(isCapacityUtilisationCorrect);
        const isLabourCostCorrect = getLabourCost(labourCost);
        setLabourCostValid(isLabourCostCorrect);
        const isCostPerUnitCorrect = getCorrectCostPerUnit(costPerUnit);
        setCostPerUnitValid(isCostPerUnitCorrect);
        const isWipCostCorrect = calculateAverageWipCost(wipCost);
        setWipCostValid(isWipCostCorrect);
    };

    return (
        <section>
            <h3>Round One</h3>
            <div>
                {roundOnePrompt.map((prompt) => {
                    return (
                        <div key={prompt.id}>
                            <small>
                                <strong>Prompt {prompt.id}</strong>
                            </small>
                            <p>{prompt.prompt}</p>
                            <br />
                        </div>
                    );
                })}
            </div>
            <br />
            <form onSubmit={onFormSubmit}>
                <label>Total Production Time</label>
                <br />
                <input
                    type="Number"
                    placeholder="Total Production Time"
                    value={productionTime}
                    onChange={(event) => setProductionTime(event.target.value)}
                />
                <br />
                {productionTimeHint ? (
                    <small>{roundOneHints.productionTime}</small>
                ) : (
                    <small onClick={() => setProductionTimeHint(true)}>
                        show hint
                    </small>
                )}
                <br />
                {productionTimeValid === true ? (
                    <small style={{ color: "green" }}>Correct!</small>
                ) : productionTimeValid === false ? (
                    <small style={{ color: "red" }}>Wrong answer</small>
                ) : null}
                <br />
                <br />
                <label>Capacity Utilisation</label>
                <br />
                <input
                    type="Number"
                    placeholder="Capacity Utilisation"
                    value={capacityUtlisation}
                    onChange={(event) =>
                        setCapacityUtilisation(event.target.value)
                    }
                />
                <br />
                {capacityUtlisationHint ? (
                    <small>{roundOneHints.capacityUtlisation}</small>
                ) : (
                    <small onClick={() => setCapacityUtilisationHint(true)}>
                        show hint
                    </small>
                )}
                <br />
                {capacityUtlisationValid === true ? (
                    <small style={{ color: "green" }}>Correct!</small>
                ) : capacityUtlisationValid === false ? (
                    <small style={{ color: "red" }}>Wrong answer</small>
                ) : null}
                <br />
                <br />
                <label>Labour Cost</label>
                <br />
                <input
                    type="Number"
                    placeholder="Labour Cost"
                    value={labourCost}
                    onChange={(event) => setLabourCost(event.target.value)}
                />
                <br />
                {labourCostHint ? (
                    <small>{roundOneHints.labourCost}</small>
                ) : (
                    <small onClick={() => setLabourCostHint(true)}>
                        show hint
                    </small>
                )}
                <br />
                {labourCostValid === true ? (
                    <small style={{ color: "green" }}>Correct!</small>
                ) : labourCostValid === false ? (
                    <small style={{ color: "red" }}>Wrong answer</small>
                ) : null}
                <br />
                <br />
                <label>Cost Per Unit</label>
                <br />
                <input
                    type="Number"
                    placeholder="Cost per unit"
                    value={costPerUnit}
                    onChange={(event) => setCostPerUnit(event.target.value)}
                />
                <br />
                {costPerUnitHint ? (
                    <small>{roundOneHints.costPerUnit}</small>
                ) : (
                    <small onClick={() => setCostPerUnitHint(true)}>
                        show hint
                    </small>
                )}
                <br />
                {costPerUnitValid === true ? (
                    <small style={{ color: "green" }}>Correct!</small>
                ) : costPerUnitValid === false ? (
                    <small style={{ color: "red" }}>Wrong answer</small>
                ) : null}
                <br />
                <br />
                <label>Average Work In Progress Cost</label>
                <br />
                <input
                    type="Number"
                    placeholder="Average wip cost"
                    value={wipCost}
                    onChange={(event) => setWipCost(event.target.value)}
                />
                <br />
                {wipCostHint ? (
                    <small>{roundOneHints.averageWipCost}</small>
                ) : (
                    <small onClick={() => setWipCostHint(true)}>
                        show hint
                    </small>
                )}
                <br />
                {wipCostValid === true ? (
                    <small style={{ color: "green" }}>Correct!</small>
                ) : wipCostValid === false ? (
                    <small style={{ color: "red" }}>Wrong answer</small>
                ) : null}
                <br />
                <br />
                <button onClick={onCheck}>check</button>
                <button>next</button>
            </form>
        </section>
    );
}
