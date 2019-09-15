import React from 'react';
import ReactDOM from 'react-dom';

class ScheduleBlock {
    constructor(name, duration, start, end) {
        this.state = {name: name, duration: duration, start: start, end: end};
    }
}

class Schedule extends React.Component {
    constructor(){
        super();
        this.state = {timetable: [144][7]};
    }

    addTimeTable(){

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
        var format = [145];
        for (var i = 0;i<145;i++){
            format[i] = (<tr>
                            {schedule[i]}
                         </tr>);
        }
        return(
            <div>
                <table>
                    {format}
                </table>
            </div>
        );
    }
}

export default Schedule;