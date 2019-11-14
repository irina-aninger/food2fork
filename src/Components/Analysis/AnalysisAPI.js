import React, {Component} from 'react';
import spinner from "../../Assets/spinner.svg";
import AnalysisTable from "./AnalysisTable";


const API_ID = 'd8e4396b',
    API_KEY = '820a0391746a3fcc8fc40b3d9043f23f';


class AnalysisAPI extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            error: null,
            data: []
        };
    }

    componentDidMount() {
        fetch(`https://api.edamam.com/api/nutrition-data?app_id=${API_ID}&app_key=${API_KEY}&ingr=${this.props.value}`)
            .then((res) => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoading: false,
                        data: result
                    });
                    // console.log(this.state.data)
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    getAnalysisTable = () => {
        const {isLoading} = this.state;
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state.data = 'dd'
        if (isLoading) {
            return (
                <img src={spinner} className='spinner' alt='spinner'/>
            )
        } else {
            return (
                <>
                    {this.state.data.totalWeight !== 0 ? <AnalysisTable data={this.state.data}/> : ''}
                </>
            );
        }
    };

    render() {

        return (
            <>
                {this.getAnalysisTable()}
            </>
        )

    }
}

export default AnalysisAPI;
