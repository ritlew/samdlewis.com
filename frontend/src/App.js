import React, { Component } from 'react';

import TopBar from './components/TopBar';
import Greeter from './components/Landing';

class App extends Component {
    render() {
        return (
            <div>
                <TopBar />
                <Greeter />
            </div>
        );
    }
}

export default App;
