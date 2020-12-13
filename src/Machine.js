import React, {Component} from 'react';

class Machine extends Component {
    render() {

        const {s1, s2, s3} = this.props;
        const winner = (s1 === s2) && (s2 === s3);
        return (
            <div>
                <p>{s1} {s2} {s3}</p>
                <strong>{winner ? 'Winner !' : "Loser !"}</strong>
            </div>
        )
    }
}

export default Machine;