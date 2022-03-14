import React from "react";

function ListItem(props){
  console.log(props.dataTwo.title)
    return (
      <div>
        {props.handleClickGroceryItem ? <li 
       
        className="list-item"
           onClick={() => props.handleClickGroceryItem(props.dataTwo)}
         >
         {props.dataTwo.title}
        </li> :  <li 
         className="list-item"
         >
         {props.dataTwo.title}
        </li>
        
        }
        
      </div>
        
      
        
        
    )
}

export default ListItem