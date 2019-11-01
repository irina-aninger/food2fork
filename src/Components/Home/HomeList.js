import React, {Component} from 'react';
import spinner from "../../Assets/spinner.svg";
import {Link} from "react-router-dom";


// includes
import '../../Assets/css/RecipeList.min.css'
import RecipeImg from "../Recipe/RecipeImg";


const API_ID  = '2b39d5c7',
      API_KEY = '3a79db436b6e57c7aa617d135085b8f6';


class HomeList extends Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            error: null,
            items: [],
            image: undefined,
        };
    }

    componentDidMount() {
        this._isMounted = true;
        fetch(`https://api.edamam.com/search?q=${this.props.value}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=${this.props.count}`)
            .then((res) => res.json())
            .then(
                (result) => {
                    if (this._isMounted) {
                        this.setState({
                            isLoading: false,
                            items: result.hits
                        });
                    }
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    getRecipe = () => {
        const {error, isLoading, items} = this.state;
        if (isLoading) {
            return (
                <img src={spinner} className='spinner' alt='spinner'/>
            )
        } else if (error) {
            return (
                <>Ooops!</>
            )
        } else {
            let recipeElem = items.map((el, key) => {
                let elem        = el.recipe,
                    calories    = Math.round(elem.calories),
                    totalWeight = Math.round(elem.totalWeight);
                return (
                    <div key={key} className="recipe__item">
                        <RecipeImg src={elem.image} alt={elem.label} person={elem.yield}/>
                        <div className="recipe__energy">
                            <ul>
                                <li>{calories} <span>kcal</span></li>
                                <li>{totalWeight} <span>g</span></li>
                            </ul>
                        </div>
                        <div className="recipe__descr">
                            <Link to={{pathname:'/recipe', state:{elem: [{elem}]}}}>{elem.label}</Link>
                            <ul>
                                {elem.ingredientLines.map((el, key) => {
                                    return (
                                        <li key={key}>{el}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                )
            });

            return (
                <div className="recipes">
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

export default HomeList;