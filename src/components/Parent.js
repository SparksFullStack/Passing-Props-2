import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    state = {
        currentValue: 0
    }

    updateState = (eventValue) => {
        this.setState({ currentValue: eventValue });
    }

    render(){
        // you'll need to pass the current value and the updateState method as props to the child below
        return(
            <div>
                <Child 
                    value={/* pass the 'currentValue' from the state here */}
                    updateState={/* pass the increment method here */}
                />
            </div>
        )
    }
}

export default Parent;