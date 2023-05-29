import * as React from "react";
import { Form } from "@remix-run/react";

export const EmailForm = ({
  responseMessage,
}: {
  responseMessage?: { message?: string };
}) => {
  return (
    <Form method="post" className="emailForm">
      <div>
        <div className="emailFormContent">
          {responseMessage && responseMessage.message ? (
            <p>{responseMessage.message}</p>
          ) : (
            <p>
              Hey 👋🏻. We're starting up a new notification/newsletter. It's free
              and spam free.
            </p>
          )}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="email"
            disabled={!!responseMessage}
          />
          <button
            type="submit"
            name="intent"
            value="subscription"
            disabled={!!responseMessage}
          >
            Subscribe
          </button>
        </div>
      </div>
    </Form>
  );
};
