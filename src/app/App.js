
import React from 'react';

//default import
import Header  from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";

//virtual dom

export class App extends React.Component {

    constructor() {
        super();

        //FIXME: change to state
        this.title = "React App";
    }

    //child to parent
    showAddress(e, msg) {
        console.log("Event ", e);
        alert("Child to parent " + msg)
    }

    //react keyword
    //create virtual dom, return view
    render() {
        return (
            <div>
                <h2>Welcome React</h2>

                <Header title={this.title} />

                <Home />

                <About />

                <Footer title={this.title} 
                        year={2018} 
                        address={ {city: 'Chennai', pincode: 600101} }
                        onShow={this.showAddress}
                        >

                </Footer>
            </div>
        );
    }
}