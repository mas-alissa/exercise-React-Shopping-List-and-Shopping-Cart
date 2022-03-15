import React from "react";
import GroceryList from "./components/GroceryList";
import ShoppingCart from "./components/ShoppingCart";

class Container extends React.Component{
    constructor(){
        super()
        this.state = {
            text:"",//["",""] [{}]
            groceryItems: [
            { id: 1, title: "Apple" },
            { id: 2, title: "Kiwi" },

        ],
    shoppingListItems:[]
    };
    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
    this.handleClickEmptyShoppingCart = this.handleClickEmptyShoppingCart.bind(this)
    this.putName = this.putName.bind(this)
    this.textValue = this.textValue.bind(this)
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

    putName(obj){
        this.setState(prevState => {
            // console.log(prevState.groceryItems.length)
            const x = {id:prevState.groceryItems.length + 1,title:obj.text}
          console.log(obj.text)
            return {
                groceryItems:prevState.groceryItems.concat(x)
            }
        })
    }
    textValue(e){
        
        this.setState({
            text:e.target.value
        })
    }
    render(){
       
        console.log(this.state.shoppingListItems)
        return(
            <div style={{display:"flex",justifyContent:"space-around"}}>
            
                 <GroceryList data={this.state.groceryItems} handleClickGroceryItem={this.handleClickGroceryItem} putData={this.putName} text={this.textValue} textValue={this.state}/>
                 <ShoppingCart data1={this.state.shoppingListItems} emptyCart={this.handleClickEmptyShoppingCart}/>      
            </div>
        )
    }

}

export default Container