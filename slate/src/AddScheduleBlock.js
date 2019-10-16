import React from 'react';
import ReactDOM from 'react-dom';
import './Schedulec.css';

class AddScheduleBlock extends React.Component {

    constructor(props){

        super(props);
        this.state = {name: "", start: "", end: "", day: ""};
        this.changeName = this.changeName.bind(this);
        this.changeStart = this.changeStart.bind(this);
        this.changeEnd = this.changeEnd.bind(this);
        this.changeDay = this.changeDay.bind(this);
        this.Submit = this.Submit.bind(this);
    }

    changeName(e){
        this.setState({name: e.target.value});
    }

    changeStart(e){
        this.setState({start: e.target.value});
    }

    changeEnd(e){
        this.setState({end: e.target.value});
    }

    changeDay(e){
        this.setState({day: e.target.value});
    }

    Submit(e){
        e.preventDefault();
        this.props.action(this.state.name, this.state.start, this.state.end, this.state.day);
    }

    render(){
        return(
            <div class = "adiv">
                <h1>Add Event</h1>
                <form onSubmit = {this.Submit}>
                    <input placeholder = "Event Name" type = "text" value = {this.state.name} onChange = {this.changeName}/>
                    <input placeholder = "Event Start (xx:xx AM/PM)" type = "text" value = {this.state.start} onChange = {this.changeStart}/>
                    <input placeholder = "Event End (xx:xx AM/PM)" type = "text" value = {this.state.end} onChange = {this.changeEnd}/>
                    <input placeholder = "Day (Monday, Tuesday...)" type = "text" value = {this.state.day} onChange = {this.changeDay}/>
                    <br/>
                    <input class = "button" type = "submit" value = "Submit"/>
                </form>
            </div>
        );
    }
}

export default AddScheduleBlock;