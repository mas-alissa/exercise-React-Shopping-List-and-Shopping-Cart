import React from "react";

function InputField(props){
    return(
     <div>
         <input type="text" value={props.textValue.text} onChange={props.sendText}/>
         <button onClick={() =>props.putData(props.textValue)}>Add</button>
     </div>
    )
}

export default InputField