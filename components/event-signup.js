"use client";

import { useForm } from "react-hook-form";
import EventList from "@/components/eventlist";

function EventSignup(eventProps) {
  const {
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  return (
    <section className="md:flex md:items-center">
      <div className="md:w-[55%]">
        <EventList
          key={eventProps.event.id}
          event={eventProps.event}
          aspect="landscape"
        />
      </div>
      <div className="mx-auto md:w-[35%]">
        <form onSubmit={console.log("submitting")} className="my-10">
          <h2 className="text-brand-primary mb-3 mt-2 text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
            Join us downtown and online for our next event
          </h2>
          <input
            type="checkbox"
            id=""
            className="hidden"
            style={{ display: "none" }}
          ></input>
          <div className="mb-5">
            <input
              type="text"
              placeholder="Full Name"
              autoComplete="false"
              className={`w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-gray-800 focus:ring-4 dark:bg-gray-900 dark:text-white   dark:placeholder:text-gray-200  ${
                errors.name
                  ? "border-red-600 ring-red-100 focus:border-red-600 dark:ring-0"
                  : "border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white"
              }`}
            />
            {errors.name && (
              <div className="mt-1 text-red-600">
                <small>{errors.name.message}</small>
              </div>
            )}
          </div>
          <div className="mb-5">
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
            />
          </div>
          <div className="mb-3">
            <div>
              <input type="radio" id="inPerson" name="fav_language" />
              <label htmlFor="inPerson">Attending In Person</label>
            </div>
            <div>
              <input type="radio" id="online" name="fav_language" />
              <label htmlFor="online">Joining Online</label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-gray-900 px-7 py-4 font-semibold text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-offset-2 dark:bg-white dark:text-black "
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
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default EventSignup;
