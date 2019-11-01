import React, { Component } from 'react';


class RecipeLabels extends Component {
    render() {
        return (
            <div className={'recipe__labels'}>
                <div className={'labels__title'}>{this.props.title}: </div>
                <ul>
                    {this.props.labels.map((el, key) => {
                        return (
                            <li key={key}>{el}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default RecipeLabels;