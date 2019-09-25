import React from 'react';
import ReactDOM from 'react-dom';

class AddScheduleBlock extends React.Component {

    render(){
        return(
            <form>
                Event Name: <input type = "text" name = "Block Name"/>
                Event Start: <input type = "text" name = "estart"/>
                Event End: <input type = "text" name = "eend"/>
                Day: <input type = "text" name = "day"/>
                <input type = "submit" value = "Submit"/>
            </form>
        );
    }
}