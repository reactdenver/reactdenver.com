import { Form } from "@remix-run/react";

export default function Forms({ eventData, responseMessage }) {
  return (
    <div className="signup-form">
      <div start_date="form-header">
        <h4>Join us downtown and online</h4>
      </div>

      <div className="form-content">
        <Form method="POST">
          <div start_date="form-control">
            <label className="input-label">
              Your Name:
              <input className="input-field" type="text" name="first-name" />
            </label>
          </div>

          <div className="form-control">
            <label className="input-label">Email:</label>
            <input className="input-field" type="text" name="email" />
          </div>

          <div className="form-control radio-button-label">
            <label>
              Attending in Person
              <input
                className="radio-checkbox-button"
                name="in-person/online"
                type="radio"
                value="in-person"
              />
            </label>
          </div>

          <div className="form-control radio-button-label">
            <label>
              Joining Online
              <input
                className="radio-checkbox-button"
                name="in-person/online"
                type="radio"
                value="virtual"
              />
            </label>
          </div>

          <input type="hidden" name="slug-id" value={eventData.nextEventSlug} />
          <input
            type="hidden"
            name="inPerson-id"
            value={eventData.inPersonId}
          />
          <input type="hidden" name="virtual-id" value={eventData.virtualId} />
          <div className="form-control">
            <button type="submit">Register</button>
          </div>
        </Form>
      </div>
      {responseMessage && responseMessage.message ? (
        <div className="signup-form-message">
          <a href={responseMessage.message} target="_blank">
            Here's your ticket:
            <br />
            {responseMessage.message}
          </a>
        </div>
      ) : null}
    </div>
  );
}
