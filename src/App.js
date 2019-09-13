import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

// components
import Header from './components/headerComponent/header';
import HomePage from './components/pages/home/homePage';
import RecipePage from './components/pages/recipePage';
import CalorieCalculator from './components/pages/calorieCalculator';
import NutritionAnalysis from './components/pages/nutritionAnalysis';

// includes
import './Assets/css/main.min.css'




function App() {
    return (
        <Router>
            <div className="App">

                <Header/>

                <Route exact path={'/'} component={HomePage}/>
                <Route path={'/recipe'} component={RecipePage}/>
                <Route path={'/calorie-calculator'} component={CalorieCalculator}/>
                <Route path={'/nutrition-analysis'} component={NutritionAnalysis}/>

            </div>
        </Router>
    )
}

export default App;
