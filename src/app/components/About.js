
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class About extends Component {
    //Creation life cycle: step 1
    constructor(props) {
        super(props);

        this.state = {
            members: ["React", "Redux"],
            show: true,
            name: "member"
        }

    }

    //lifecycle
    //react keyword
    //view is not ready
    //Creation life cycle: step 2
    componentWillMount() {
        console.log("about will mount");
    }
     
    addMember() {
        //BAD, Mutable
        this.state.members.push(this.state.name);
        this.setState({
            members: this.state.members,
            name: 'member'
        })
    }

    toggle() {
        //setState is a react keyword
        //async 

        //set the new state with merge
        //trigger render method
        this.setState({
            show: !this.state.show
        })
    }

    onNameChange(e) {
        //target is real dom input element
        let value = e.target.value;
        console.log(value);

        //trigger render
        this.setState({
            name: value
        })
    }


    //creation cycle: step 3
    render() {
        return (
            <div> 
            <h2>About</h2>

            <input value={this.state.name}
                    ref={ (domElem) => this.inputElement = domElem }
                   onChange={ (e) => this.onNameChange(e) }
            />

            <button onClick={ ()=> this.addMember()}>
                Add Member
            </button>

            <button onClick={ ()=> this.toggle()}>
                {this.state.show? "Hide": "Show" }
            </button>

{ this.state.show &&             
    <ul>
    { this.state.members.map(member => (
                            <li key={member}>{member}</li>
                        )) 
    }
    </ul>
}

            </div>
        )
    }

    //creation cycle: step 4
    //view is mounted in real dom
    componentDidMount() {
        console.log("about did mount");
        //access ref

        //real dom
        this.inputElement.focus();
    }


} 


About.defaultProps = {
    
}

About.propTypes = {
    
}