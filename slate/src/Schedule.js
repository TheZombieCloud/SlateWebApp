import React from 'react';

class Schedule extends React.Component {
    constructor(){
        super();
        this.state = {timetable: [144][7]};
    }

    render(){
        var schedule = [145][8];
        var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        schedule[0][0] = (<td>
                            <h3>Time</h3>
                          </td>);
        for (var i = 1;i<8;i++){
            schedule[0][i] = (<td>
                                <h3>{days[i-1]}</h3>
                              </td>);
        }
        var curtime = 0;
        var hours = 0;
        for (var i = 1;i<145;i++){
            schedule[i][0] = (<td>
                                <h3>{hours.toString() + ":" + curtime.toString()}</h3>
                              </td>);
            curtime += 10;
            if (curtime==60){
                hours ++;
                curtime = 0;
            }
        }
        return(

        );
    }
}

export default Schedule;