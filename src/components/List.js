import React from "react";
import ListItem from "./ListItem";

function List(props){
    console.log(props)
    return (
            
        <ul>
              {props.dataOne.map((item,index) => <ListItem key={index} dataTwo={item}  handleClickGroceryItem={props.handleClickGroceryItem}/> )}                      
        </ul>
        
    )

}

export default List