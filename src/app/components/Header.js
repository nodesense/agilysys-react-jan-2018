import React, {Component} from 'react';

//React.Component and Component are same

//class component

export default class Header extends Component {
    //cons gets props very first time during creation
    constructor(props) {
        super(props); //MUST
         
        console.log("Header created ",  this.props.title);
    }

    //this.props is a keyword
    //{ expression }

    render() {
        
        return (
            <div>
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}