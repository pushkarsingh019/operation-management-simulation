import { useState } from "react";

import {
    getProductionTime,
    getCapacityUtilisation,
    getLabourCost,
    getCostPerUnit,
    getAverageWipCost,
} from "@/utils/roundTwo";

import { getNetValue } from "../utils/gameFunctions";

export default function Round2() {
    const [lotSize, setLotSize] = useState(55500);
    const [productionTime, setProductionTime] = useState(
        getProductionTime(lotSize)
    );
    const [capacityUtlisation, setCapacityUtilisation] = useState(
        getCapacityUtilisation(lotSize)
    );
    const [labourCost, setLabourCost] = useState(getLabourCost(lotSize));
    const [costPerUnit, setCostPerUnit] = useState(getCostPerUnit(lotSize));
    const [wipCost, setWipCost] = useState(getAverageWipCost(lotSize));

    const lotSizeHandler = (event) => {
        setLotSize(event.target.value);
        setProductionTime(getProductionTime(lotSize));
        setCapacityUtilisation(getCapacityUtilisation(lotSize));
        setLabourCost(getLabourCost(lotSize));
        setCostPerUnit(getCostPerUnit(lotSize));
        setWipCost(getAverageWipCost(lotSize));
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(getNetValue(lotSize));
    };

    return (
        <section>
            <h3>Round Two</h3>
            <p>
                {" "}
                The players in this round will be asked to free up the working
                capital or reduce the cost. That means the players must select
                the optimal amount of Lot size to determine the output. The
                optimal production will be considered against the value of lot
                size 55500.
            </p>
            <br />
            <br />
            <form onSubmit={(event) => onFormSubmit(event)}>
                <label>Lot Size</label>
                <input
                    type="range"
                    placeholder="lot size"
                    min={50000}
                    max={60000}
                    value={lotSize}
                    onChange={(event) => lotSizeHandler(event)}
                />
                <small>
                    {"   "}
                    {lotSize}
                </small>
                <br />
                <br />
                <label>Total Production Time</label>
                <br />
                <input
                    type="Number"
                    placeholder="Total Production Time"
                    value={productionTime}
                    disabled
                />
                <br />
                <br />
                <label>Capacity Utilisation</label>
                <br />
                <input
                    type="Number"
                    placeholder="Capacity Utilisation"
                    value={capacityUtlisation}
                    disabled
                />
                <br />
                <br />
                <label>Labour Cost</label>
                <br />
                <input
                    type="Number"
                    placeholder="Labour Cost"
                    value={labourCost}
                    disabled
                />
                <br />
                <br />
                <label>Cost Per Unit</label>
                <br />
                <input
                    type="Number"
                    placeholder="Cost per unit"
                    value={costPerUnit}
                    disabled
                />
                <br />
                <br />
                <label>Average Work In Progress Cost</label>
                <br />
                <input
                    type="Number"
                    placeholder="Average wip cost"
                    value={wipCost}
                    disabled
                />
                <br />
                <br />
                <br />
                <button type="submit">Next</button>
            </form>
        </section>
    );
}
