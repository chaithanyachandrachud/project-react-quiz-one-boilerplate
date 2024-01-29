import React, {Component} from "react";
import './Final.css'

class Result extends Component{
    render(){
        return(
            <div>
                <h1>Result</h1>
                <div id="final">
                    <h4>You need more practice !</h4>
                    <h1>Your score is 20%</h1>
                    <div id="resultDes">
                        <div id="contain">
                            <p>Total number of questions</p>
                            <p>15</p>
                        </div>
                        <div id="contain">
                            <p>Number of attempted questions</p>
                            <p>9</p>
                        </div>
                        <div id="contain">
                            <p>Number of correct answers</p>
                            <p>3</p>
                        </div>
                        <div id="contain">
                            <p>Number of wrong answers</p>
                            <p>6</p>
                        </div>
                    </div>
                </div>
                <button id="Again">Play again</button>
                <button id="Home">Back to home</button>
            </div>
        )
    }
}
export default Result