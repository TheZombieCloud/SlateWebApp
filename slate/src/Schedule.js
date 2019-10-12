import React from 'react';
import AddScheduleBlock from "./AddScheduleBlock";
import ReactDOM from 'react-dom';

class ScheduleBlock {
    constructor(name, duration, start, end, day) {
        this.state = {name: name, duration: duration, start: start, end: end, day: day};
    }
}

class Schedule extends React.Component {
    static blocks = [];

    constructor(props){
        super(props);
        this.state = {timetable: [], name: "begin"};
        for (var i = 0;i<144;i++){
            this.state.timetable[i] = [];
            for (var c = 0;c<7;c++){
                this.state.timetable[i][c] = "0";
            }
        }
        this.handler = this.handler.bind(this);
        //Schedule.addScheduleBlock(new ScheduleBlock("SE101", 100, "1:00","2:40", 1));
        //Schedule.addScheduleBlock(new ScheduleBlock("SE101", 100, "1:00","2:40", 4));
        this.state.timetable = Schedule.addTimeTable(this.state.timetable);
    }

    handler(name, start, end, day){
        this.state.name = name;
        var start2 = start.split(":");
        var end2 = end.split(":");
        var duration = (parseInt(end2[0])-parseInt(start2[0]))*60+parseInt(end2[1])-parseInt(start2[1]);
        Schedule.addScheduleBlock(new ScheduleBlock(name, duration, start, end, parseInt(day)));
        this.state.timetable = Schedule.addTimeTable(this.state.timetable);
        this.forceUpdate();
    }

    static addScheduleBlock(block){
        //Retrieves schedule blocks from Database and then adds new block
        this.blocks.push(block);
    }

    static addTimeTable(timetable){
        for (var i = 0;i<this.blocks.length;i++){
            var name = this.blocks[i].state.name;
            var duration = this.blocks[i].state.duration;
            var start = this.blocks[i].state.start;
            var end = this.blocks[i].state.end;
            var day = this.blocks[i].state.day;
            var temp = start.split(":");
            var time = Math.floor((parseInt(temp[0])*60+parseInt(temp[1]))/10);
            timetable[time][day] = name + " - [" + start + "-" + end + "]";
            for (var c = 1;c<=duration/10;c++){
                timetable[time+c][day] = 1;
            }
        }
        return timetable;
    }

    render(){
        var schedule = [], cols = 145;
        var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        for (var i = 0;i<145;i++){
            schedule[i] = [];
        }
        schedule[0][0] = (<td>
            <h3>Time</h3>
        </td>);
        for (var i = 1;i<8;i++) {
            schedule[0][i] = (<td>
                <h3>{days[i - 1]}</h3>
            </td>);
        }
        for (var i = 1;i<145;i++){
            if ((i-1)%6==0) {
                schedule[i][0] = (<td>
                    <h3>{(Math.floor(i/6)).toString() + ":00"}</h3>
                </td>);
            }
            else {
                schedule[i][0] = (<td>
                    <h3></h3>
                </td>);
            }
        }
        for (var i = 1;i<145;i++){
            for (var c = 1;c<8;c++){
                if (this.state.timetable[i-1][c-1]!=0) {
                    schedule[i][c] = (<td bgcolor="green">
                        <h3>{this.state.timetable[i - 1][c - 1]}</h3>
                    </td>);
                }
                else {
                    schedule[i][c] = (<td>
                        <h3>{this.state.timetable[i - 1][c - 1]}</h3>
                    </td>);
                }
            }
        }
        var format = [145];
        for (var i = 0;i<145;i++){
            format[i] = (<tr>
                {schedule[i]}
            </tr>);
        }
        return(
            <div>
                <AddScheduleBlock action={this.handler}/>
                <table>
                    {format}
                </table>
            </div>
        );
    }
}

export default Schedule;