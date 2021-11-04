import React, { useState } from "react";

export default function useToggle(inival = false){
    const [value,setValue] = useState(inival);
    function toggle(){
        setValue(!value);
    }
    return [value,toggle];
}