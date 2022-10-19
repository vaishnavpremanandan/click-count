import { Component } from "react";

class Counter extends Component{
    constructor() {  //when ever you create an object of class we use constructor to initiate values
        super(); //while constructor is defined we use super keyword
        this.state = {
            Counter : 0, //setting a counter from 0
        }
    }
    increment = () => { //increment method cannot access "this" keyword
        console.log(this) ;
        this.setState ({
            Counter : this.state.Counter + 1, //counter+1
        } );
    };
render() {
    return(
        <div>
        <h3>Count value  : {this.state.Counter}</h3>
        <button onClick={this.increment}>increment</button> {/*accessing increment method using this*/}
        </div>
    );
}    
}
export default Counter;