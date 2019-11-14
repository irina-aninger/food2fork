import React, {Component} from 'react';
import AnalysisAPI from "./AnalysisAPI";


class Analysis extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isOpenTable: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
            isOpenTable: false
        });
    }

    handleClick() {
        this.setState({isOpenTable: true});
    }

    render() {
        return (
            <div className={'flex'}>
                <div className={'analysis-search'}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className={'input-box'}>
                        <input type={'text'} className={"analysis-input"} placeholder={"Coffee and croissant"} value={this.state.value} onChange={this.handleChange}/>
                        <button onClick={(e) => this.handleClick(e)}>Analyze<span/></button>
                    </div>
                </div>
                {(this.state.isOpenTable && this.state.value !== '') ? <AnalysisAPI value={this.state.value}/> : ''}
            </div>
        )
    }
}

export default Analysis;
