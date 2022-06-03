import EventItem from "./event-item";
import React from "react";

function EventList(props) {
  const { items } = props; //getting props with object destructing..

  return (
    <ul>
      {items.map((item) => (
      
          <EventItem  
              key = {item.id}
              id = {item.id}
              title = {item.title}
              location = {item.location}
              date = {item.date}
              image = {item.image}
          />
    
      ))}
    </ul>
  );
}
export default EventList;