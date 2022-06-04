import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";


function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);


  if (!event) {
    return <p>No event found!!</p>;
  }

  return (
    <Fragment>
      <EventSummary title = {event.title}/>
      <EventLogistic/>
    </Fragment>
  );
}

export default EventDetailPage;
