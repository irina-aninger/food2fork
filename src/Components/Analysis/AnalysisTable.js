import React, {Component} from 'react';
import HomeList from "../Home/HomeList";


class AnalysisTable extends Component {

    getValue() {
        console.log(this.props.data)
        return (
            <div className={'analysis-item'}>
                {this.props.data.totalNutrients.map((elem, index) => <div key={index}>{elem}</div>)}
                <span className={'item__title'}>Total Fat</span>
                <span className={'item__nutrients'}>18.3 <span>g</span></span>
                <span className={'item__daily'}>28 <span>%</span></span>
            </div>
        )
    }

    render() {

        return (
            <div className={'analysis-table'}>
                <div className={'table-title'}>Nutrition Facts <span>Amount Per Serving</span></div>
                <div className={'table-body'}>

                    {this.getValue()}


                    <span className={'table-body__title'}>Daily Value</span>
                    <div className={'analysis-item'}>
                        <span className={'item__title'}>Total Fat</span>
                        <span className={'item__nutrients'}>18.3 <span>g</span></span>
                        <span className={'item__daily'}>28 <span>%</span></span>
                    </div>
                    <div className={'analysis-item__sub-item'}>
                        <span className={'sub-item__title'}>Total Fat</span>
                        <span className={'sub-item__nutrients'}>18.3 g</span>
                        <span className={'sub-item__daily'}>28 %</span>
                    </div>
                    <div className={'analysis-item__sub-item'}>
                        <span className={'sub-item__title'}>Total Fat</span>
                        <span className={'sub-item__nutrients'}>18.3 g</span>
                        <span className={'sub-item__daily'}>28 %</span>
                    </div>
                    <div className={'analysis-item'}>
                        <span className={'item__title'}>Total Fat</span>
                        <span className={'item__nutrients'}>18.3 <span>g</span></span>
                        <span className={'item__daily'}>28 <span>%</span></span>
                    </div>
                    <div className={'analysis-item'}>
                        <span className={'item__title'}>Total Fat</span>
                        <span className={'item__nutrients'}>18.3 <span>g</span></span>
                        <span className={'item__daily'}>28 <span>%</span></span>
                    </div>
                    <div className={'analysis-item'}>
                        <span className={'item__title'}>Total Fat</span>
                        <span className={'item__nutrients'}>18.3 <span>g</span></span>
                        <span className={'item__daily'}>28 <span>%</span></span>
                    </div>
                </div>
            </div>
        )

    }
}

export default AnalysisTable;
