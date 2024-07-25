import { format, parse, startOfWeek, getDay } from "date-fns";
import React, {useState} from "react";
import {Calendar, dateFnsLocalizer, Event} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ptBr from "date-fns/locale/pt-BR";

const locales = {
    'pt-BR': ptBr
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})

//TODO
let initialEvents: Event[] = [

    {
        title: 'Event 1',
        start: new Date(),
        end: new Date(),
      },
      {
        title: 'Event 2',
        start: new Date(new Date().setDate(new Date().getDate() + 1)),
        end: new Date(new Date().setDate(new Date().getDate() + 1)),
      },
];

export const MyCalendar = () => {

    const [events, setEvents] = useState<Event[]>(initialEvents);
    const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });

    const handleAddEvent = () => {
        const start = new Date(newEvent.start);
        const end = new Date(newEvent.end);
        setEvents([...events, { title: newEvent.title, start, end }]);
    };

    return (
        <div style={{height: '500pt'}}>
            <input
                type="text"
                placeholder="Title"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            />
            <input
                type="datetime-local"
                value={newEvent.start}
                onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
            />
            <input
                type="datetime-local"
                value={newEvent.end}
                onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
            />
            <button onClick={handleAddEvent}>Add Event</button>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{height:500}}
            />
        </div>
    )
}