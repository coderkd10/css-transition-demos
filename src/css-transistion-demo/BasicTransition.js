import React, { Component } from 'react';
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
        duration: 1,
        timingFunction: 'ease-in-out',
    };

    onTransitionRequest = () => {
        this.setState({
            inInitialState: !this.state.inInitialState
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const duration = this.di.value || this.state.duration;
        const timingFunction = this.tfi.value || this.state.timingFunction;
        this.setState({
            duration,
            timingFunction,
        });
    }

    render(){
        return <div>
            <TransitionDemo  
                inInitialState={this.state.inInitialState}
                transitionDuration={this.state.duration}
                timingFunction={this.state.timingFunction}
            />
            <button onClick={this.onTransitionRequest}>
                Trigger Transition
            </button>
            <form onSubmit={this.onSubmit}>
                <label>duration in s 
                    <input placeholder="1" ref={ref => {this.di = ref}} />
                </label><br/>
                <label>timing function 
                    <input placeholder="ease-in-out" ref={ref => {this.tfi = ref;}}/>
                </label><br/>
                <input type="submit" value="Update" />
            </form>
        </div>;
    }
}

export default App;
