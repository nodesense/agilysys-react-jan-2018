
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Home extends Component {
    constructor(props) {
        super(props);

        //state is react keyword
        //mutable data
        this.state = {
            counter: 1000
        }

        //overwrite original decrement
        //wrapper/bound method, wrap original decrement
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        //BAD
        this.state.counter += 1;
        console.log("Counter", this.state.counter);
        
        //BAD
        //forceUpdate is react keyword
        //trigger render method
        this.forceUpdate();
    }

    decrement() {
        //BAD
        this.state.counter--;
        this.forceUpdate();
    }
     
    //called multiple times
    //on data change, trigger render
    render() {
        console.log("Home render");

        return (
            <div> 
            <h2>Home</h2>

            <p>Counter: {this.state.counter}</p>
            
            {/* Comment */}

            {/* pass function refernce to react */}
            {/* function is created on every render */}
            <button onClick={ () => this.increment() }>
             +1
            </button>

            <button onClick={this.decrement}>
              -1
            </button>

            </div>
        )
    }
} 


Home.defaultProps = {
    
}

Home.propTypes = {
    
}