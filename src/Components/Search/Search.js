import React, {Component} from 'react';
import SearchList from "./SearchList";
import cooking from "../../Assets/cooking.svg";


class Search extends Component {

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
                <input className={"search-input"} type={"text"} placeholder={"Coffee and croissant"} value={this.state.value} onChange={this.handleChange}/>
                <div className={"search"}>
                    {this.state.value !== '' ? <SearchList value={this.state.value} count={50}/> : <img src={cooking} className={'cooking'} alt='cooking'/>}
                </div>
            </>
        )
    }
}

export default Search;