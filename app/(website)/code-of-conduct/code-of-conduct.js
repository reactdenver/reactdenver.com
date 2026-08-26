import Container from "@/components/container";

export default function CodeofConduct() {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Principles
      </h1>
      <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600">
        <p>
          React Denver is dedicated to providing a harassment-free experience
          for everyone regardless of gender, gender identity and expression,
          sexual orientation, disability, physical appearance, body size, race,
          or religion. We do not tolerate harassment of React Denver
          participants in any form. Sexual language and imagery is not
          appropriate for any venue, including talks, workshops, parties,
          Twitter and other online media.
        </p>
        <p>
          Harassment includes offensive verbal comments related to gender,
          gender identity and expression, sexual orientation, disability,
          physical appearance, body size, race, religion, sexual images in
          public spaces, deliberate intimidation, stalking, following, harassing
          photography or recording, sustained disruption of talks or other
          events, inappropriate physical contact, and unwelcome sexual
          attention.
        </p>
        <p>
          Participants asked to stop any harassing behavior are expected to
          comply immediately.
        </p>
        <p>
          If a participant engages in harassing behavior, the Denver React
          organizers may take any action they deem appropriate, including
          warning the offender or expulsion from React Denver. If you are being
          harassed, notice that someone else is being harassed, or have any
          other concerns, please contact a member of React Denver staff
          immediately.
        </p>
      </div>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Events
      </h1>
      <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600">
        <p>
          React Denver staff will be happy to help participants contact venue
          security or local law enforcement, provide escorts, or otherwise
          assist those experiencing harassment.
        </p>
      </div>
    </Container>
  );
}
