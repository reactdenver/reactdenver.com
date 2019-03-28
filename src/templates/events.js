import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Event } from "../components/event";

const EventTemplate = ({ data }) => {
  const {
    meetupGroup: { childrenMeetupEvent },
    markdownRemark: { frontmatter },
  } = data;
  let events = childrenMeetupEvent.filter(
    meetup => meetup.status === frontmatter.eventStatus
  );

  if (frontmatter.eventStatus === "upcoming") {
    events = events.reverse().slice(0, 3);
  }

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        keywords={[`meetup`, `community`, `react`]}
      />
      <h1>{frontmatter.title}</h1>
      {events.map(eventData => (
        <Event eventData={eventData} />
      ))}
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
