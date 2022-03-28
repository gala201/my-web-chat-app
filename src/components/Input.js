import React, { useState } from "react";
import enter from '../assets/enter.svg'

const Input = ({ onSendMessage }) => {
    const [textInputs, setTextInputs] = useState("");

    function onChange(e) {
        setTextInputs(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        setTextInputs("");
        onSendMessage(textInputs);
    }

    return (
        <div className="input-wrap">
            <form onSubmit={(e) => onSubmit(e)}>
                <input
                    onChange={(e) => onChange(e)}
                    value={textInputs}
                    type="text"
                    placeholder="Enter your message and press ENTER"
                />
                <button><img src={enter} alt="" /></button>
            </form>
        </div>
    );
};

export default Input;

{/* <div className='input-wrap'>
<input type="text" />
<button><img src={enter} alt="" /></button>
</div> */}