import React, { Component } from 'react';


class RecipeImg extends Component {
    render() {
        return (
            <div className="recipe__img">
                <img src={this.props.src} alt={this.props.alt}/>
                <span className="person">{this.props.person}</span>
            </div>
        )
    }
}

export default RecipeImg;