import React, {Component} from 'react';
import Machine from "./Machine";

class App extends Component {
    render() {
        return (
            <div>
                <h1>Slot machine !</h1>
                <Machine
                    s1="🍇"
                    s2="🥝"
                    s3="🍍"
                />
                <Machine
                    s1="🍇"
                    s2="🍇"
                    s3="🍇"
                />
                <Machine
                    s1="🍍"
                    s2="🍍"
                    s3="🍍"
                />
            </div>
        )
    }
}

export default App;
