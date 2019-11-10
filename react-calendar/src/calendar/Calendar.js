import React, {useState} from 'react';
import {DayPilot, DayPilotCalendar, DayPilotNavigator} from "daypilot-pro-react";
import "./CalendarStyles.css";

const styles = {
  left: {
    float: "left",
    width: "220px"
  },
  main: {
    marginLeft: "220px"
  }
};

function Calendar(){
    const [startDate, setStartDate] = useState("2019-09-16");
    const [events, setEvents] = useState([
            {
                id: 1,
                text: "Event 1",
                start: "2019-09-16T10:30:00",
                end: "2019-09-16T13:00:00"
            },
            {
                id: 2,
                text: "Event 2",
                start: "2019-09-17T12:00:00",
                end: "2019-09-17T14:00:00",
                backColor: "#38761d"
            }
    ]);

    return(
        <div>
            <div style={styles.left}>
            <DayPilotNavigator
                selectMode={"week"}
                showMonths={3}
                skipMonths={3}
                onTimeRangeSelected={ args => {
                    setStartDate(args.day)
                }}
            />
            </div>
            <div style={styles.main}>
            <DayPilotCalendar
                startDate={startDate}
                events={events}
            />
            </div>
        </div>
    );
}

export default Calendar;
