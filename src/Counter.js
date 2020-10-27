import React, {Component} from 'react';

class Counter extends Component {
    state = {
        number :0,
        fixedNumber:0
    }

    render() {
        const {number, fixedNumber} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지않아:{fixedNumber}</h2>
                <button
                    onClick = { () => {
                        this.setState(function(aaa, props) {
                            return {number: aaa.number+1 };
                        },
                        () => {
                            console.log("방금 호출됨");
                        }
                    );
                }}
                >
                +1
                </button>
            </div>
        )
    }
}
export default Counter;