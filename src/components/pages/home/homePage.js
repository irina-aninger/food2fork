import React, {Component} from 'react';
import RecipeHomeElem from "./homeElem";


class HomePage extends Component {

    state = {
        data: [
            {name: 'breakfast'},
            {name: 'lunch'},
            {name: 'dinner'}
        ]
    };


    render() {

        let homeBoxes = this.state.data.map((el, key) => {
            return (
                <div key={key}>
                    <h1>{el.name} recipes</h1>
                    <RecipeHomeElem/>
                </div>
            )
        });

        return (
            <>
                <div className={"content home_page"}>
                    <div className={'container'}>
                        {homeBoxes}
                    </div>
                </div>
            </>
        )
    }
}

export default HomePage;