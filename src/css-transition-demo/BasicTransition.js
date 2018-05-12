import React, { Component, Fragment } from 'react';
import TransitionParamsProvider from './TransitionParamsProvider';
import './BasicTransition.css';

const TransitionDemo = ({
    transitionDuration = 1,
    timingFunction = "ease-in-out",
    inInitialState = true, // boolean
}) =>
    <div className="container">
        <div 
            className={inInitialState ? "box1" : "box2"}
            style={{
                transitionProperty: "width, height, background-color, font-size, left, top, transform",
                transitionDuration: `${transitionDuration}s`,
                transitionTimingFunction: timingFunction
            }}
        >
            Lorem
        </div>
    </div>

class App extends Component {
    state = {
        inInitialState: true,
    };

    onTransitionRequest = () => {
        this.setState({
            inInitialState: !this.state.inInitialState
        })
    }

    render(){
        return (
            <TransitionParamsProvider 
                defaultParams={{
                    duration: 1,
                    timingFunction: 'ease-in-out'
                }}
                render={({ duration, timingFunction }) =>
                    <Fragment>
                        <TransitionDemo  
                            inInitialState={this.state.inInitialState}
                            transitionDuration={duration}
                            timingFunction={timingFunction}
                        />
                        <button onClick={this.onTransitionRequest}>
                            Trigger Transition
                        </button>
                    </Fragment>
                }
            />);
    }
}

export default App;
