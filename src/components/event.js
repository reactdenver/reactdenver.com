import React from "react";
import styled from "styled-components";
import format from "date-fns/format";
import isBefore from "date-fns/is_before";

const EventCard = styled.li`
  border-radius: 6px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  list-style: none;
  margin: 1.5em auto;
  padding: 1em;
  padding-bottom: 1.25em;

  :last-child {
    margin-bottom: 5em;
  }
`;

const EventDescription = styled.div``;

const EventName = styled.h2`
  color: #2e3e48;
  font-size: 1.35rem;
  margin-top: 0;
`;

const EventTime = styled.h4`
  color: #00a2c7;
  margin-bottom: 0.5em;
  margin-top: 0;
  text-transform: uppercase;
`;

const RSVPLink = styled.a`
  background-color: #00a2c7;
  border-radius: 3px;
  color: #ffffff;
  padding: 0.5em;

  :hover {
    background-color: #018dae;
  }
`;

const abbreviatedDateFmt = "ddd, MMM D";
const timeFmt = "h:mm aa";
const eventAbbrDate = date => format(date, abbreviatedDateFmt);
const readableTime = unixMillis => format(unixMillis, timeFmt);

export const Event = ({ eventData }) => (
  <EventCard>
    <EventTime>
      {`${eventAbbrDate(eventData.local_date)}, ${readableTime(
        eventData.time
      )}`}
    </EventTime>
    <a href={eventData.link}>
      <EventName>{eventData.name}</EventName>
    </a>
    <EventDescription
      dangerouslySetInnerHTML={{ __html: eventData.description }}
    />
    {isBefore(eventData.time, Date.now()) ? null : (
      <RSVPLink href={eventData.link}>RSVP</RSVPLink>
    )}
  </EventCard>
);
