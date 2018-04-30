import React, { Component } from 'react';
import TodoItems from './TodoItems';
import "./TodoList.css";
 class Todolist extends Component {
     constructor(props){
         super(props);
         this.state = {
             items:[]
         };
         this.addItem=this.addItem.bind(this);
         this.deleteItem=this.deleteItem.bind(this);
     }

     addItem(e) {
         if( this.inputElement.value !=="") {
             var newItem = {
                 text : this.inputElement.value,
                 key : Date.now()
             };
             this.setState((prevState) => {
                 return {
                     items :prevState.items.concat(newItem)
                 };
             });
         }
         this.inputElement.value = "";
         console.log(this.state.items);
         e.preventDefault();

     }
     deleteItem(key){
         var filterItems = this.state.items.filter(function(item){
         return (item.key !== key)
     });
     this.setState({
         items: filterItems
     });
    }
     render () {
         return (
            <div className="todolistMain">
               <div className="header">
                 <form onSubmit={this.addItem}>
                   <input ref={(a) => this.inputElement = a}
                    placeholder="enter text">
                   </input>
                   <button type="submit">ADD</button>
                 </form>
                </div>
                <TodoItems entries = {this.state.items}
                delete={this.deleteItem}/>
            </div>
         );
     }
 }
 export default Todolist;