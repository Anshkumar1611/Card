import React from "react";

const Select = ({ setSelected }) => {
    const handleChange = (e) => {
        setSelected(e.target.value);
    };
    return (
        <select
            onChange={handleChange}
            className="select select-sm pr-6 focus:outline-none rounded-none bg-[#3F3F3F] underline underline-offset-4"
        >
            <option className="bg-inherit" defaultChecked>this week</option>
            <option>this month</option>
            <option>all time</option>
        </select>
    );
};

export default Select;