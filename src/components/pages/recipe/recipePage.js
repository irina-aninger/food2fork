import React, { Component } from 'react';
import RecipeSearch from "./recipeSearch";

// includes
import '../../../Assets/css/recipePage.min.css'


class RecipePage extends Component {
    render() {
        return (
            <div className={"content recipe-page"}>
                <div className={'container'}>
                    <RecipeSearch/>
                </div>
            </div>
        )
    }
}

export default RecipePage;