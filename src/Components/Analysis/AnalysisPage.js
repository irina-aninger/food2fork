import React, { Component } from 'react';
import Analysis from "./Analysis";


// includes
import '../../Assets/css/Analysis.min.css'


class AnalysisPage extends Component {
    render() {
        return (
            <div className={"content analysis-page"}>
                <div className={'container'}>
                    <Analysis/>
                </div>
            </div>
        )
    }
}

export default AnalysisPage;