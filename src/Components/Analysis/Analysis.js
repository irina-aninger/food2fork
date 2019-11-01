import React, {Component} from 'react';
import cooking from "../../Assets/cooking.svg";
import AnalysisTable from "./AnalysisTable";


class Analysis extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <>
                <input type={'text'} className={"search-input"} placeholder={"Coffee and croissant"} value={this.state.value} onChange={this.handleChange}/>
                <div className={"search"}>
                    {this.state.value !== '' ? <AnalysisTable value={this.state.value} count={50}/> : <img src={cooking} className={'cooking'} alt='cooking'/>}
                </div>
            </>
        )
    }
}

export default Analysis;