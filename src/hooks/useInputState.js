import React, { useState } from "react";

export default inival => {
    const [value,setValue] = useState(inival);
    function setVal(e) {
        setValue(e.target.value);
    }

    function reset(){
        setValue("");
    }
    return [value,setVal,reset];
}