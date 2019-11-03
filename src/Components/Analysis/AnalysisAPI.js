import React, {Component} from 'react';
import spinner from "../../Assets/spinner.svg";


const API_ID  = 'd8e4396b',
      API_KEY = '820a0391746a3fcc8fc40b3d9043f23f';


class AnalysisAPI extends Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            error: null,
            data: [],
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.value !== prevProps.value) {
            this._isMounted = true;
            fetch(`https://api.edamam.com/api/nutrition-data?app_id=${API_ID}&app_key=${API_KEY}&ingr=${this.props.value}`)
                .then((res) => res.json())
                .then(
                    (result) => {
                        if (this._isMounted) {
                            this.setState({
                                isLoading: false,
                                data: result
                            });
                            console.log(this.state.data)
                        }
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
        }

    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    getAnalysis = () => {
        const {error, isLoading, data} = this.state;
        if (isLoading) {
            return (
                <img src={spinner} className='spinner' alt='spinner'/>
            )
        } else if (error) {
            return (
                <>Ooops!</>
            )
        } else {
            let calories = data.calories,
                weight = data.totalWeight;
            return (
                <div className={'analysis-table'}>
                    {calories}
                    {weight}
                </div>
            );

        }
    };

    render() {

        return (
            <>
                {this.getAnalysis()}
            </>
        )

    }
}

export default AnalysisAPI;