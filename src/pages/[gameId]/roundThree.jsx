import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "@/utils/store";

import {
    getProductionTime,
    getCapacityUtilisation,
    getLabourCost,
    getCostPerUnit,
    getAverageWipCost,
} from "../../utils/roundThree";

import { getNetValue } from "../../utils/gameFunctions";
import { useRouter } from "next/router";
import axios from "axios";
import { formattedTime } from "../../utils/gameFunctions";

export default function Round3() {
    const { roomName, username } = useContext(CartContext);
    const router = useRouter();
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

    const onFormSubmit = async (event) => {
        if (event) {
            event.preventDefault();
        }
        const netValue = getNetValue(lotSize);
        let { data } = await axios.post(`/api/choice`, {
            username,
            roomName,
            netValue,
            roundNumber: 2,
        });
        router.push(`/chart/3`);
    };

    const [counter, setCounter] = useState(155);

    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    useEffect(() => {
        if (counter === 0) {
            onFormSubmit();
        }
    });

    return (
        <section className="screen">
            <div className="flex">
                <h3>Round Three</h3>
                <h3 style={{ color: counter < 20 ? "red" : "black" }}>
                    {formattedTime(counter)}
                </h3>
            </div>
            <br />
            <br />
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
            <label htmlFor="">Lot size : {lotSize}</label>
            <br />
            <input
                type="range"
                placeholder="lot size"
                min={50000}
                max={60000}
                value={lotSize}
                onChange={(event) => lotSizeHandler(event)}
            />
            <br />
            <br />
            <form onSubmit={(event) => onFormSubmit(event)} className="flex">
                <div>
                    <label>Total Production Time</label>
                    <br />
                    <input
                        type="Number"
                        placeholder="Total Production Time"
                        value={productionTime}
                        disabled
                    />
                </div>
                <div>
                    <label>Capacity Utilisation</label>
                    <br />
                    <input
                        type="Number"
                        placeholder="Capacity Utilisation"
                        value={capacityUtlisation}
                        disabled
                    />
                </div>
                <div>
                    <label>Labour Cost</label>
                    <br />
                    <input
                        type="Number"
                        placeholder="Labour Cost"
                        value={labourCost}
                        disabled
                    />
                </div>
                <div>
                    <label>Cost Per Unit</label>
                    <br />
                    <input
                        type="Number"
                        placeholder="Cost per unit"
                        value={costPerUnit}
                        disabled
                    />
                </div>
                <div>
                    <label>Average Work In Progress Cost</label>
                    <br />
                    <input
                        type="Number"
                        placeholder="Average wip cost"
                        value={wipCost}
                        disabled
                    />
                </div>
                <br />
                <br />
                <br />
            </form>
            <br />
            <br />
            <div className="center-text">
                <button onClick={onFormSubmit}>Next</button>
            </div>
        </section>
    );
}
