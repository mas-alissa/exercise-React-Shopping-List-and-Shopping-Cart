import React from "react"
import InputField from "./InputField"
import List from "./List"


function GroceryList(props){
  
return(
   <div>
       <InputField putData={props.putData} sendText={props.text} textValue={props.textValue}/>
    <List dataOne={props.data} handleClickGroceryItem={props.handleClickGroceryItem}/>
   </div>
)
}

export default GroceryList