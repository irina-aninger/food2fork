import React, { Component } from 'react';
import Search from "./Search";


// includes
import '../../Assets/css/Search.min.css'


class SearchPage extends Component {
    render() {
        return (
            <div className={"content search-page"}>
                <div className={'container'}>
                    <Search/>
                </div>
            </div>
        )
    }
}

export default SearchPage;