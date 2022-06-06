import React, { Fragment } from "react";
import EventList from "../../components/events/event-list";
import { getEventById, getFilteredEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";

function FilteredEvents(props) {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter. please adjust your values !</p>;
  }
  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  console.log(filteredEvents);

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <p>No events found for the chosen filter!</p>
         <Button className='center' link= '/events'>Show All Events</Button>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <div>
      <ResultsTitle date={date} />

      <EventList items={filteredEvents} />
    </div>
  );
}

export default FilteredEvents;
