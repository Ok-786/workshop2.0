import React from "react";

import "react-big-calendar/lib/css/react-big-calendar.css";

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { CssBaseline } from "@material-ui/core";

export default function Calander1() {
    const localizer = momentLocalizer(moment)
    const events = [
        {
            id: 0,
            name: "Holiday",
            description: "this is description",
            allDay: true,
            start: new Date(2015, 3, 0),
            end: new Date(2015, 3, 1)
        }
    ];
    const event = ({ event }) => {
        return (
            <div>
                {event.name} <br /> <small>{event.description}</small>{" "}
            </div>
        );
    };
    return (
        <div>
            <CssBaseline />
            <div style={{paddingBlock:'40px',paddingInline:'20px', background:'white', marginTop:'40px'}}>
                <Calendar
                    events={events}
                    step={60}
                    showMultiDayTimes
                    defaultDate={new Date(2015, 3, 1)}
                    style={{ minHeight: 600 }}
                    components={{
                        event: event
                    }}
                    localizer={localizer}
                />
            </div>
        </div>
    )
}

// {/*
// import {Calendar} from "react-big-calendar";
// import moment from "moment";
// let allViews = Object.keys(Calendar.Views).map(k => Calendar.Views[k]);

// Calendar.setLocalizer(Calendar.momentLocalizer(moment));
// export default function Calander() {
//   const events = [
//     {
//       id: 0,
//       name: "Holiday",
//       description: "this is description",
//       allDay: true,
//       start: new Date(2015, 3, 0),
//       end: new Date(2015, 3, 1)
//     }
//   ];
//   const event = ({ event }) => {
//     return (
//       <div>
//         {event.name} <br /> <small>{event.description}</small>{" "}
//       </div>
//     );
//   };
//   return (
//     <div className="" style={{ minHeight: 580 }}>
//       <Calendar
//         events={events}
//         views={allViews}
//         step={60}
//         showMultiDayTimes
//         defaultDate={new Date(2015, 3, 1)}
//         style={{ minHeight: 580 }}
//         components={{
//           event: event
//         }}
//       />
//     </div>
//   );
// } */}
