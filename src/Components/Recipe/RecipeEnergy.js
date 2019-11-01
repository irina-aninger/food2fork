import React, { Component } from 'react';


class RecipeEnergy extends Component {
    render() {
        return (
            <div className="recipe__energy">
                <ul>
                    <li>{this.props.calories} <span>kcal</span></li>
                    <li>{this.props.weight} <span>g</span></li>
                </ul>
            </div>
        )
    }
}

export default RecipeEnergy;