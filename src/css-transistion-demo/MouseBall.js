// inspired from http://jsfiddle.net/9h261pzo/291/
// linked in the css transition article - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions

import React, { Component } from 'react';
import './MouseBall.css';

class MouseTracker extends Component {
    state = {
        x: 0,
        y: 0,
    };

    handleMouseMove = e => {
        const { x, y } = this.container.getBoundingClientRect();
        this.setState({
            x: e.clientX - x,
            y: e.clientY - y
        });
    }

    render() {
        return (
            <div className="trackingContainer" onMouseMove={this.handleMouseMove}
                ref={ref => {this.container = ref;}}
            >
                <div className="bg">
                    {/* Right now manually rotated this text and fit it in the 
                    background can write a npm component `RotatedAutoScale` 
                    which takes a render prop, and rotates and scales it so
                    that it fits within a fixed height, width container
                    (similar to how I wrote `AutoScale` component -
                    https://github.com/coderkd10/you-devil/blob/master/src/shared/AutoScale.js) */}
                    <span className="bgText">Move mouse!</span>
                </div>
                {this.props.render(this.state)}
            </div>
        )
    }
}

const Ball = ({ x, y }) => (
    <div className='ball' 
        style={{
            transform: `translateX(calc(-50% + ${x}px)) translateY(calc(-50% + ${y}px)) translateZ(0)`
        }}
    />
)

const Demo = () => (
    <MouseTracker 
        render={({ x, y }) => 
            <div>
                <div>x = {x}</div>
                <div>y = {y}</div>
                <Ball x={x} y={y} />
            </div>
        }
    />
)

export default Demo;
