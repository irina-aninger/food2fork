import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

// components
import Header from './Components/Header/Header';
import HomePage from './Components/Home/HomePage';
import SearchPage from './Components/Search/SearchPage';
import RecipePage from './Components/Recipe/RecipePage';
import CalorieCalculator from './Components/Calorie/Calculator';
import NutritionAnalysis from './Components/Analysis/Analysis';
import Footer from "./Components/Footer/Footer";


// includes
import './Assets/css/Main.min.css'



function App() {
    return (
        <Router>
            <div className="App">

                <Header/>

                <Route exact path={'/'} component={HomePage}/>
                <Route path={'/search'} component={SearchPage}/>
                <Route path={'/recipe'} component={RecipePage}/>
                <Route path={'/calorie-calculator'} component={CalorieCalculator}/>
                <Route path={'/nutrition-analysis'} component={NutritionAnalysis}/>

                <Footer/>

            </div>
        </Router>
    )
}

export default App;
