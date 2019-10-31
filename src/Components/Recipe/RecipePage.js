import React, {Component} from 'react';


// includes
import '../../Assets/css/Recipe.min.css'


class RecipePage extends Component {

    getTitle() {
        const  { image, person, label, calories, totalWeight, dietLabels, healthLabels } = this.props.location.state;
        return(
            <div className={'recipe'}>
                <div>{person}</div>
                <div>{label}</div>
                <div>{calories}</div>
                <div>{totalWeight}</div>
                <div>{dietLabels}</div>
                <div>{healthLabels}</div>

                <div className={'flex'}>
                    <div className={'recipe__img'}>
                        <img src={image}  alt={label}/>
                    </div>
                    <div className={'recipe__info'}>

                    </div>
                </div>
                <div className={'recipe__descr'}></div>
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