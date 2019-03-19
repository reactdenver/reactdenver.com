import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

const EventStyles = styled.li`
  list-style: none;
`;

const EventCard = ({ eventData }) => (
  <EventStyles>
    <h2>{eventData.name}</h2>
    <a href={eventData.link}>RSVP Here!</a>
  </EventStyles>
);

const EventTemplate = ({ data }) => {
  const {
    meetupGroup: { childrenMeetupEvent },
    markdownRemark: { frontmatter },
  } = data;
  const events = childrenMeetupEvent.filter(
    meetup => meetup.status === frontmatter.eventStatus
  );
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        keywords={[`meetup`, `community`, `react`]}
      />
      <h1>{frontmatter.title}</h1>
      {events && events.map(eventData => <EventCard eventData={eventData} />)}
    </Layout>
  );
};

export default EventTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        eventStatus
      }
    }
    meetupGroup {
      childrenMeetupEvent {
        name
        status
        time
        local_date
        local_time
        updated
        utc_offset
        waitlist_count
        yes_rsvp_count
        link
        description
        visibility
        description
      }
    }
  }
`;
