import React from "react"
import List from "./List"

function ShoppingCart(props){
    console.log(props);
return (
    <div>
        {props.data1.length > 0 ? <button onClick={() =>props.emptyCart()}>Empty Cart</button> : null}
        <List  dataOne={props.data1} />
    </div>
)
}

export default ShoppingCart