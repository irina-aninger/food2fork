import React, {Component} from 'react';
import spinner from '../../../Assets/spinner.svg';



const API_ID  = '2b39d5c7',
      API_KEY = '3a79db436b6e57c7aa617d135085b8f6';


class RecipeHomeElem extends Component {

    state = {
        isLoading: true,
        data: [],
        image: undefined
    };

    componentDidMount() {
        return fetch(`https://api.edamam.com/search?q=breakfast&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=4`)
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    data: responseJson.hits
                })

            })
            .catch((error) => {
                console.log(error);
            })
    }

    getHomeRecipe = () => {
        if (this.state.isLoading) {
            return (
                <img src={spinner} className='spinner' alt='spinner'/>
            )
        } else {
            let homeElem = this.state.data.map((el, key) => {
                let elem        = el.recipe,
                    calories    = Math.round(elem.calories),
                    totalWeight = Math.round(elem.totalWeight);
                return (
                    <div key={key} className="recipe_item">
                        <div className="img">
                            <img src={elem.image} alt={elem.label}/>
                        </div>
                        <div className="desc_info">
                            <ul>
                                <li>{calories} <span>kcal</span></li>
                                <li>{totalWeight} <span>g</span></li>
                            </ul>
                        </div>
                        <div className="desc_area">
                            <a href="/">{elem.label}</a>
                            <ul>
                                {elem.ingredientLines.map((el, key) => {
                                    return (
                                        <li key={key}>{el}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <span className="person">{elem.yield}</span>
                    </div>
                )
            });

            return (
                <div className="recipe_wrapper">
                    {homeElem}
                </div>

            );

        }
    };

    render() {

        return (
            <>
                {this.getHomeRecipe()}
            </>
        )

    }


}

export default RecipeHomeElem;

