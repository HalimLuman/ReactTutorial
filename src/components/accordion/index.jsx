import { useState } from "react";
import data from "./data";
import './styles.css'

export default function Accordion() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multipleSelected, setMultipleSelected] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultipleSelection(getCurrentId) {
        setMultipleSelected([...multipleSelected, getCurrentId]);
        if (multipleSelected.includes(getCurrentId)) {
            const filteredArray = multipleSelected.filter(item => item !== getCurrentId);
            setMultipleSelected(filteredArray);
        }
    }

    return (
        <div className="wrapper">
            <button onClick={() => {
                setEnableMultiSelection(!enableMultiSelection)
                setSelected(null);
                setMultipleSelected([]);
                }}>
                {enableMultiSelection ? 'Disable Multi Selection' : 'Enable Multi Selection'}
            </button>
            <div className="accordion">
                {data && data.length > 0
                    ? data.map(dataItem =>
                        <div className="item" key={dataItem.id}>
                            <div onClick={enableMultiSelection ? () => handleMultipleSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                enableMultiSelection
                                    ? multipleSelected.includes(dataItem.id) && (<div className="content">
                                        {dataItem.answer}
                                    </div>)
                                    : selected === dataItem.id && (
                                        <div className="content">
                                            {dataItem.answer}
                                        </div>
                                    )
                            }
                        </div>)
                    : <div>No data found</div>}
            </div>
        </div>
    )
}
