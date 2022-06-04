import React from 'react'
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../dummy-data'



function AllEventsPage() {

  const allEvents = getAllEvents();
  return (
    <div> <EventsSearch />
          <EventList items={allEvents} />

    </div>
  )
}

export default AllEventsPage