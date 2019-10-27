import React, {Component} from 'react';
import RecipeList from "../recipeList";
// import TestR from "./test";


class RecipeSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    showRecipe() {
        if (this.state.value !== '') {
            return <RecipeList value={this.state.value} count={50}/>
        }
    };

    render() {
        return (
            <>
                <form>
                    <input type={"text"} placeholder={"Coffee and croissant"} value={this.state.value}
                           onChange={this.handleChange}/>
                </form>
                <div className={"search"}>
                    {/*<TestR value={this.state.value}/>*/}
                    {this.showRecipe()}
                </div>
            </>
        )
    }
}

export default RecipeSearch;