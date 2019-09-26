import React from 'react';
import ReactDOM from 'react-dom';

class AddScheduleBlock extends React.Component {

    constructor(){
        super();
        this.state = {name: "", start: "", end: "", day: ""};
        this.namer = React.createRef();
        this.startr = React.createRef();
        this.endr = React.createRef();
        this.dayr = React.createRef();
    }

    StoreValues = e =>{
        e.preventDefault();
        this.state.name = this.namer;
        this.state.start = this.startr;
        this.state.end = this.endr;
        this.state.day = this.dayr;
    }

    render(){
        return(
            <form onSubmit={this.StoreValues}>
                Event Name: <input type = "text" name = "Block Name" ref = {this.namer}/>
                Event Start: <input type = "text" name = "estart" ref = {this.startr}/>
                Event End: <input type = "text" name = "eend" ref = {this.endr}/>
                Day: <input type = "text" name = "day" ref = {this.dayr}/>
                <input type = "submit" value = "Submit"/>
            </form>
        );
    }
}

export default AddScheduleBlock;