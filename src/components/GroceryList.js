import React from "react"
import List from "./List"

function GroceryList(props){
return(
    <List dataOne={props.data} handleClickGroceryItem={props.handleClickGroceryItem}/>
)
}

export default GroceryList