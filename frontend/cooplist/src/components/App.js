import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

const PageOne = () => {
    return <div>Page One </div>;
}

const PageTWo = () => {
    return <div> Page Two </div>;
}


class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(

            <div>
                <h1> Hello there </h1>
                <div>
                    <BrowserRouter>
                        <div>
                            <Route path="/" exact component={PageOne}/>
                            <Route path="/login" exact component={PageTWo}/>
                        </div>
                    </BrowserRouter>
                </div>
            </div>
        );
    }


}

export default App;