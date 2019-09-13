import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import logo from '../../Assets/restaurant.svg';



class Header extends Component{
    render() {
        return (
            <header>
                <div className='header_bar'>
                    <div className="logo">
                        <Link to='/'>
                            Food<img src={logo} alt='logo' /><span>Fork</span></Link>
                    </div>

                    <nav>
                        <ul>
                            <li>
                                <Link to={'/recipe'}>Recipe</Link>
                            </li>
                            <li>
                                <Link to={'/calorie-calculator'}>Calorie calculator</Link>
                            </li>
                            <li>
                                <Link to={'/nutrition-analysis'}>Nutrition analysis</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;