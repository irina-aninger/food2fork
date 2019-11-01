import React, {Component} from 'react';
import RecipeImg from "../Recipe/RecipeImg";
import RecipeEnergy from "./RecipeEnergy";
import RecipeLabels from "./RecipeLabels";


// includes
import '../../Assets/css/Recipe.min.css'

class RecipePage extends Component {

    getTitle() {
        const {elem} = this.props.location.state;
        const el = elem[0].elem;
        console.log(el);
        return(
            <div className={'recipe'}>

                 <div className={'flex bg_dark'}>
                    <RecipeImg src={el.image} alt={el.label} person={el.yield}/>
                    <div className={'recipe__info'}>
                        <div className={'recipe__title'}>{el.label}</div>
                        <RecipeEnergy calories={Math.round(el.calories)} weight={Math.round(el.totalWeight)}/>
                        <RecipeLabels title={'Diet'} labels={el.dietLabels}/>
                        <RecipeLabels title={'Health'} labels={el.healthLabels}/>
                    </div>
                </div>
                <div className={'recipe__descr bg_dark'}></div>
            </div>
        )
    }

    render() {

        return (
            <>
                <div className={"content recipe-page"}>
                    <div className={'container'}>
                        {this.getTitle()}
                    </div>
                </div>
            </>
        )
    }
}

export default RecipePage;