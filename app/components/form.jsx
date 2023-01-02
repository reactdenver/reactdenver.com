import { Form } from "@remix-run/react";

export default function Forms({ eventData, responseMessage }) {
  return (
    <>
      <div start_date="form-header">
        <h4>Join us downtown and online</h4>
      </div>

      <div className="form-content">
        <Form method="POST">
          <div start_date="form-control">
            <label>
              Your Name: <input type="text" name="first-name" />
            </label>
          </div>

          <div className="form-control">
            <label>
              Email: <input type="text" name="email" />
            </label>
          </div>

          <div className="form-control">
            <label>Attending in Person</label>
            <br />
            <input name="in-person/online" type="radio" value="in-person" />
          </div>

          <div className="form-control">
            <label>Joining Online</label>
            <br />
            <input name="in-person/online" type="radio" value="virtual" />
          </div>

          <input type="hidden" name="slug-id" value={eventData.nextEventSlug} />
          <input
            type="hidden"
            name="inPerson-id"
            value={eventData.inPersonId}
          />
          <input type="hidden" name="virtual-id" value={eventData.virtualId} />
          <div className="form-control">
            <button type="submit">Submit</button>
          </div>
        </Form>
      </div>
      {responseMessage && responseMessage.message ? (
        <div>
          <p>{responseMessage.message}</p>
        </div>
      ) : null}
    </>
  );
}