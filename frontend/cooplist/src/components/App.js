import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './Login/Login';

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
                <div>
                    <BrowserRouter>
                        <div>
                            <Route path="/" exact component={Login}/>
                            <Route path="/login" exact component={PageTWo}/>
                        </div>
                    </BrowserRouter>
                </div>
            </div>
        );
    }


}

export default App;