import React, { Component } from 'react';



class TestR extends Component {

    render() {
        return (
            <>
                <div className={"test"}>{this.props.value}{this.props.count}</div>
            </>
        )
    }
}

export default TestR;