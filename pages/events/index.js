import React from 'react'
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../dummy-data'
import {useRouter} from 'next/router';


function AllEventsPage() {

  const router = useRouter();

  function findEventsHandler(year, month ) {

    const fullPath = `/events/${year}/${month}`

    router.push(fullPath)


  }

  const allEvents = getAllEvents();
  return (
    <div> <EventsSearch  onSearch={findEventsHandler}/>
          <EventList items={allEvents} />

    </div>
  )
}

export default AllEventsPage