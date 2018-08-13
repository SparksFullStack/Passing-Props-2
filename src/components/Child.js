import React, {Component} from 'react';

class Child extends Component {
    constructor(props){
        super(props);
    }

    handleUpdateState = event => {
        event.preventDefault();
        // this is calling the function being passed as a prop and giving it the value of the input
        this.props.updateState(event.target.value);
    }

    render(){
        return(
            <div>
                <h3>Current Value:{/* set the current value equal to the value being passed as a prop */}</h3>
                <input
                    value={/* set the value equal to the value being passed as a prop, just like in the H3 */}
                    onChange={/* set this to the handleUpdateState method */}
                    placeholder="Enter a new value..."
                />
            </div>
        )
    }
}