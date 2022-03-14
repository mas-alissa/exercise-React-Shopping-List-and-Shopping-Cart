import React from "react";
import GroceryList from "./components/GroceryList";
import ShoppingCart from "./components/ShoppingCart";

class Container extends React.Component{
    constructor(){
        super()
        this.state = {
            groceryItems: [
            { id: 1, title: "Apple" },
            { id: 2, title: "Kiwi" },

        ],
    shoppingListItems:[]
    };
    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
    this.handleClickEmptyShoppingCart = this.handleClickEmptyShoppingCart.bind(this)
    }
    handleClickGroceryItem(item){
        //console.log(item)
        this.setState(prevState =>{
          return {
            
              shoppingListItems : prevState.shoppingListItems.concat(item)
          }
        })
    }

    handleClickEmptyShoppingCart(){
        this.setState({
            shoppingListItems : []
        })
    }
    render(){
        console.log(this.state.shoppingListItems)
        return(
            <div style={{display:"flex",justifyContent:"space-around"}}>
                 <GroceryList data={this.state.groceryItems} handleClickGroceryItem={this.handleClickGroceryItem}/>
                 <ShoppingCart data1={this.state.shoppingListItems} emptyCart={this.handleClickEmptyShoppingCart}/>      
            </div>
        )
    }

}

export default Container