import React from 'react';
import ReactDOM from 'react-dom';

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
            <div>
                <form onSubmit = {this.Submit}>
                    Event Name: <input type = "text" value = {this.state.name} onChange = {this.changeName}/>
                    Event Start: <input type = "text" value = {this.state.start} onChange = {this.changeStart}/>
                    Event End: <input type = "text" value = {this.state.end} onChange = {this.changeEnd}/>
                    Day: <input type = "text" value = {this.state.day} onChange = {this.changeDay}/>
                    <input type = "submit" value = "Submit"/>
                </form>
            </div>
        );
    }
}

export default AddScheduleBlock;