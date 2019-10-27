import React, {Component} from 'react';
import RecipeList from "../recipeList";

// includes
import '../../../Assets/css/homePage.min.css'


class HomePage extends Component {

    state = {
        data: [
            {name: 'breakfast'},
            {name: 'lunch'},
            {name: 'dinner'}
        ],
        count: 4
    };


    render() {

        let homeBoxes = this.state.data.map((el, key) => {
            return (
                <div key={key}>
                    <h1>{el.name} recipes</h1>
                    <RecipeList value={el.name} count={this.state.count}/>
                </div>
            )
        });

        return (
            <>
                <div className={"content home-page"}>
                    <div className={'container'}>
                        {homeBoxes}
                    </div>
                </div>
            </>
        )
    }
}

export default HomePage;