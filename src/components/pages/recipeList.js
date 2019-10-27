import React, {Component} from 'react';
import spinner from "../../Assets/spinner.svg";


const API_ID = '2b39d5c7',
    API_KEY = '3a79db436b6e57c7aa617d135085b8f6';


class RecipeList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            error: null,
            items: [],
            image: undefined
        };
    }

    componentDidMount() {
        fetch(`https://api.edamam.com/search?q=${this.props.value}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=${this.props.count}`)
            .then((res) => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoading: false,
                        items: result.hits
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

    }

    getRecipe = () => {
        if (this.state.isLoading) {
            return (
                <img src={spinner} className='spinner' alt='spinner'/>
            )
        } else {
            let recipeElem = this.state.items.map((el, key) => {
                let elem = el.recipe,
                    calories = Math.round(elem.calories),
                    totalWeight = Math.round(elem.totalWeight);
                return (
                    <div key={key} className="recipe__item">
                        <div className="recipe__img">
                            <img src={elem.image} alt={elem.label}/>
                        </div>
                        <div className="recipe__energy">
                            <ul>
                                <li>{calories} <span>kcal</span></li>
                                <li>{totalWeight} <span>g</span></li>
                            </ul>
                        </div>
                        <div className="recipe__descr">
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
                <div className="recipe">
                    {recipeElem}
                </div>

            );

        }
    };

    render() {

        return (
            <>
                {this.getRecipe()}
            </>
        )

    }
}

export default RecipeList;