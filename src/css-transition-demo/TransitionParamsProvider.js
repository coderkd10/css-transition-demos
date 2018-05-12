// wrapper to get transition parameters as user input
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TransitionParamsProvider extends Component {
    static propTypes = {
        defaultParams: PropTypes.shape({
            duration: PropTypes.number.isRequired,
            timingFunction: PropTypes.string.isRequired
        }).isRequired,
        render: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            params: this.props.defaultParams
        };
    }

    onSubmit = e => {
        e.preventDefault();
        const duration = this.durationInput.value ||
            this.props.defaultParams.duration;
        const timingFunction = this.timingFuncInput.value ||
            this.props.defaultParams.timingFunction;
        this.setState({
            params: {
                duration,
                timingFunction
            }
        });
    }

    render() {
        return (
            <div>
                {this.props.render(this.state.params)}
                <form 
                    onSubmit={this.onSubmit}
                    style={{
                        margin: '10px 0'
                    }}
                >
                    <b>Transition Parameters : </b><br/>
                    <label>
                        duration (in s)
                        <input
                            placeholder={this.props.defaultParams.duration}
                            ref={ref => {this.durationInput = ref}}
                            style={{
                                marginLeft: 10
                            }}
                        />
                    </label><br/>
                    <label>
                        timing function
                        <input
                            placeholder={this.props.defaultParams.timingFunction}
                            ref={ref => {this.timingFuncInput = ref}}
                            style={{
                                marginLeft: 10
                            }}
                        />
                    </label><br/>
                    <input type="submit" value="Update" />
                </form>
            </div>);
    }
}
