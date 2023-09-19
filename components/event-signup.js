"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { parseISO } from "date-fns";

function EventSignup({ event, nextEventData }) {
  const [registerSuccess, setRegisterSuccess] = useState();
  const [ticketUrl, setTicketUrl] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const checkEventDatePast = (eventDate) => {
    const today = new Date();
    const event = new Date(parseISO(eventDate).toLocaleString());
    return event <= today;
  };

  const dateInPast = checkEventDatePast(event.eventAt);
  if (dateInPast) return null;

  const onSubmit = async (data) => {
    const registration = {
      registrationData: {
        email: data.email,
        name: data.name,
        discount_code: "",
        source: "",
        notify: true,
        line_items: [{ release_id: data.attendance, quantity: 1 }],
      },
      nextEvent: nextEventData.nextEvent,
    };

    // try {
    //   const createRegistration = await fetch("/api/tito-create-registration", {
    //     method: "POST",
    //     body: JSON.stringify(registration),
    //   });
    //   const registrationJson = await createRegistration.json();
    //   setRegisterSuccess(true);
    //   setTicketUrl(registrationJson.ticket);
    // } catch (error) {
    //   console.error(
    //     `Something went wrong creating a user registration: ${error}`
    //   );
    //   setRegisterSuccess(false);
    // }

    if (data.email_subscribe === "yes") {
      try {
        await fetch("/api/email-subscription", {
          method: "POST",
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            tags: ["event_registration"],
          }),
        });
      } catch (error) {
        console.error("Unable to subsdcribe to email notifications");
      }
    }
  };

  return (
    <section className="mb-10 w-full flex-col md:flex md:items-center md:justify-between">
      <div className="w-full"></div>
      <div className="w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center"
        >
          <h2 className="text-brand-primary mb-3 mt-2 text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
            Join us downtown and online
          </h2>
          <input
            type="checkbox"
            id=""
            className="hidden"
            style={{ display: "none" }}
          ></input>
          <div className="mb-5 w-full">
            <input
              type="text"
              placeholder="Full Name"
              autoComplete="false"
              className={`w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-gray-800 focus:ring-4 dark:bg-gray-900 dark:text-white   dark:placeholder:text-gray-200  ${
                errors.name
                  ? "border-red-600 ring-red-100 focus:border-red-600 dark:ring-0"
                  : "border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white"
              }`}
              {...register("name", {
                required: "Full name is required",
                maxLength: 80,
              })}
            />
            {errors.name && (
              <div className="text-red-600">
                <small>{errors.name.message}</small>
              </div>
            )}
          </div>
          <div className="w-full">
            <label htmlFor="email_address" className="sr-only">
              Email Address
            </label>
            <input
              id="email_address"
              type="email"
              placeholder="Email Address"
              name="email"
              autoComplete="false"
              className={`w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-gray-800 focus:ring-4 dark:bg-gray-900 dark:text-white   dark:placeholder:text-gray-200  ${
                errors.email
                  ? "border-red-600 ring-red-100 focus:border-red-600 dark:ring-0"
                  : "border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white"
              }`}
              {...register("email", {
                required: "Enter your email",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email",
                },
              })}
            />
            {errors.email && (
              <div className="text-red-600">
                <small>{errors.email.message}</small>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center">
            {errors.attendance && (
              <div className="text-red-600">
                <small>{errors.attendance.message}</small>
              </div>
            )}
            <div className="mt-1">
              <input
                type="radio"
                id="inPerson"
                name="attendance"
                value={nextEventData?.inPerson}
                {...register("attendance", {
                  required:
                    "Please let us know if you will be attending online or in person",
                })}
              />
              <label htmlFor="inPerson" className="ml-2">
                Attending In Person
              </label>
            </div>
            <div className="mb-2 mt-1">
              <input
                type="radio"
                id="online"
                name="attendance"
                value={nextEventData?.virtual}
                {...register("attendance", {
                  required:
                    "Please let us know if you will be attending online or in person",
                })}
              />
              <label htmlFor="online" className="ml-2">
                Joining Online
              </label>
            </div>
          </div>
          <div className="items-center mb-2">
            <input
              type="checkbox"
              name="email_subscribe"
              id="email_subscribe"
              value="yes"
              {...register("email_subscribe")}
            />
            <label htmlFor="email_subscribe" className="ml-2">
              Subscribe to our newsletter for event notifications and news?
              Cancel anytime.
            </label>
          </div>
          <button
            type="submit"
            className="m-auto w-full rounded-md bg-gray-900 px-7 py-4 font-semibold text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-offset-2 dark:bg-white dark:text-black md:w-[25%]"
          >
            {isSubmitting ? (
              <svg
                className="mx-auto h-5 w-5 animate-spin text-white dark:text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Register"
            )}
          </button>
        </form>
        {isSubmitSuccessful && registerSuccess && (
          <div className="mt-3 text-center">
            {"Registration Success. Here's your ticket:"}
            <a className="block text-blue-600" target="_blank" href={ticketUrl}>
              {ticketUrl}
            </a>
          </div>
        )}
        {registerSuccess === false && (
          <div className="mt-3 text-center text-sm text-red-500">
            {
              "Something went wrong creating a user registration. Please try later."
            }
          </div>
        )}
      </div>
    </section>
  );
}

export default EventSignup;
