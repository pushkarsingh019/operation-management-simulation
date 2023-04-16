import { useContext, useEffect, useState } from "react";

import { roundOneHints } from "@/utils/gameData";
import {
    roundOnePrompt,
    getCorrectProductionTime,
    getCapacityUtilization,
    getLabourCost,
    getCorrectCostPerUnit,
    calculateAverageWipCost,
} from "@/utils/roundOneData";
import Link from "next/link";
import { useRouter } from "next/router";
import { CartContext } from "@/utils/store";
import { formattedTime } from "@/utils/gameFunctions";

export default function Round1() {
    const router = useRouter();
    const { username, roomName } = useContext(CartContext);
    const [counter, setCounter] = useState(329);

    useEffect(() => {
        if (username === "" || roomName === "") {
            router.push("/login");
        }
    });

    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    useEffect(() => {
        if (counter === 0) {
            onCheck();
            router.push(`/${roomName}/roundTwo`);
        }
    });

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

    const { gameId } = router.query;

    const onCheck = (event) => {
        if (event) {
            event.preventDefault();
        }
        if (productionTime !== undefined && productionTime !== null) {
            const isProductionTimeCorrect =
                getCorrectProductionTime(productionTime);
            setProductionTimeValid(isProductionTimeCorrect);
        }
        if (capacityUtlisation !== undefined && capacityUtlisation !== null) {
            const isCapacityUtilisationCorrect =
                getCapacityUtilization(capacityUtlisation);
            setCapacityUtlisationValid(isCapacityUtilisationCorrect);
        }
        if (labourCost !== undefined && labourCost !== null) {
            const isLabourCostCorrect = getLabourCost(labourCost);
            setLabourCostValid(isLabourCostCorrect);
        }
        if (costPerUnit !== undefined && costPerUnit !== null) {
            const isCostPerUnitCorrect = getCorrectCostPerUnit(costPerUnit);
            setCostPerUnitValid(isCostPerUnitCorrect);
        }
        if (wipCost !== undefined && wipCost !== null) {
            const isWipCostCorrect = calculateAverageWipCost(wipCost);
            setWipCostValid(isWipCostCorrect);
        }
    };

    return (
        <section>
            <h3>Round One : {gameId}</h3>
            {formattedTime(counter)}
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
            <form>
                <label>Total Production Time</label>
                <br />
                <input
                    type="Number"
                    placeholder="Total Production Time"
                    value={productionTime}
                    onChange={(event) => setProductionTime(event.target.value)}
                    required
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
                    required
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
                    required
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
                    required
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
                    required
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
                <button onClick={(event) => onCheck(event)}>check</button>
                <Link href={`/${roomName}/roundTwo`}>next</Link>
            </form>
        </section>
    );
}
