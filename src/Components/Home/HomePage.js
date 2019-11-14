import React, {Component} from 'react';
import HomeList from "./HomeList";


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

        const homeBoxes = this.state.data.map((el, key) => {
            return (
                <div key={key}>
                    <h1>{el.name} recipes</h1>
                    <HomeList value={el.name} count={this.state.count}/>
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
