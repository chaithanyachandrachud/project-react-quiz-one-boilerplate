import React, {Component} from "react";
import './Page1.css'

class Quiz extends Component{
    render(){
        return(
            <div className="Quiz">
                <h1>Question</h1>
                <p id="questionNo">1 of 15</p>
                <h4 id="question">Which is the only mammal than can jump ?</h4>
                <div id="OptionButtons">
                    <button>Dog</button>
                    <button>Elephant</button>
                    <button>Goat</button>
                    <button>Lion</button>
                </div>
                <div id ='nav'>
                    <button id='prevButton'>Previous</button>
                    <button id='nextButton'>Next</button>
                    <button id='quitButton'>Quit</button>
                </div>
            </div>
        )
    }
}
export default Quiz