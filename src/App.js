
import React from "react";
import './index.scss';


class App extends React.Component {

    // Constructor 
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
            "https://swapi.dev/api/starships")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json.results,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div>;


        return (
            <div className="App"   >
                
                
                <button onClick={this.state.items}></button>
                <h1 class="text_styles"> Star Wars</h1>
                <h2>Sample React Project using the SWAPI api</h2>
                <h3>Sample React Project using the SWAPI api. Sample React Project using the SWAPI api</h3>{
                  
                    items.map((item, i) => (
                        <div className="card">
                        <ol key={i} className="row" >
                            <div className="column">{item.name},
                            <p>Model</p>
                            {item.model},
                            </div>
                            <div className="column">
                            <p>Number of films:</p>
                            {item?.films?.length}
                            </div>
                        </ol>
                        </div>
                        
                    ))
                }
                
            </div>
        );
    }
}

export default App;