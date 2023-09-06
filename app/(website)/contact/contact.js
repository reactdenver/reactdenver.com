"use client";

import Container from "@/components/container";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import {
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
export default function Contact({ settings }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);
  // Please update the Access Key in the Sanity CMS - Site Congig Page
  const apiKey = settings?.w3ckey || "YOUR_ACCESS_KEY_HERE";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "ReactDenver_web3Forms",
      subject: "New Speaker Sign-up from React Denver Website"
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <Container>
      <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
        Speaker Sign-Up
      </h1>
      <div className="text-center">
        <p className="text-lg">Sign-up here to become a speaker.</p>
      </div>

      <div className="my-10 grid md:grid-cols-2">
        <div className="my-10">
          <h2 className="text-2xl font-semibold dark:text-white">
            Contact React Denver
          </h2>
          <p className="mt-5 max-w-sm">
            Have something to say? We are here to help.
          </p>

          <div className="mt-5">
            {settings?.email && (
              <div className="text-dark-600 mt-2 flex items-center space-x-2 dark:text-gray-400">
                <EnvelopeIcon className="h-4 w-4" />
                <a href={`mailto:${settings.email}`}>{settings.email}</a>
              </div>
            )}
            <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
              <ChatBubbleLeftRightIcon className="w-4 h-4" />
              <a className="no-underline hover:underline" href="https://discord.gg/33wkVQFV49">Click to join us on Discord</a>
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="my-10">
            <input
              type="checkbox"
              id=""
              className="hidden"
              style={{ display: "none" }}
              {...register("botcheck")}
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
                {...register("name", {
                  required: "Full name is required",
                  maxLength: 80,
                })}
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
                {...register("email", {
                  required: "Enter your email",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <div className="mt-1 text-red-600">
                  <small>{errors.email.message}</small>
                </div>
              )}
            </div>
            <div className="mb-5">
              <input
                id="talk_title"
                type="text"
                placeholder="Talk Title"
                name="talk_title"
                autoComplete="false"
                className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
                  errors.talk_title
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                }`}
                {...register("talk_title", {
                  required: "Enter talk title",
                  maxLength: 120
                })}
              />
              {errors.talk_title && (
                <div className="mt-1 text-red-600">
                  <small>{errors.talk_title.message}</small>
                </div>
              )}
            </div>

            <div className="mb-3">
              <textarea
                name="message"
                placeholder="Your Talk Description"
                className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900   rounded-md outline-none  h-36 focus:ring-4  ${

                  errors.message
                    ? "border-red-600 ring-red-100 focus:border-red-600 dark:ring-0"
                    : "border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white"
                }`}
                {...register("message", {
                  required: "Enter your talk description"
                })}
              />
              {errors.message && (
                <div className="mt-1 text-red-600">
                  {" "}
                  <small>{errors.message.message}</small>
                </div>
              )}
            </div>

            <div>
              <label className="mb-5 dark:text-white">Talk Duration</label>
              <div
                  className={`mb-5 ${
                  errors.duration
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              }`}>
                <input
                  id="15min"
                  type="radio"
                  name="duration"
                  value="15_minutes"
                  className="mt-3"
                  {...register("duration", {
                    required: "Select your talk duration"
                  })}
                />
                <label className="ml-1 mr-3 dark:text-white">15 Min</label>
                <input
                  id="30min"
                  type="radio"
                  name="duration"
                  value="30_minutes"
                  {...register("duration", {
                    required: "Select your talk duration"
                  })}
                />
                <label className="ml-1 mr-3 dark:text-white ">30 Min</label>
                <input
                  id="1hr"
                  type="radio"
                  name="duration"
                  value="1_hour"
                  {...register("duration", {
                    required: "Select your talk duration"
                  })}
                />
                <label className="ml-1 mr-3 dark:text-white">1 Hour</label>
                {errors.duration && (
                    <div className="mt-1 text-red-600">
                      {" "}
                      <small>{errors.duration.message}</small>
                    </div>
                )}
              </div>
            </div>
            <div className="mb-3">
              <input
                  name="discord"
                  type="text"
                  placeholder="Your Discord Username (optional)"
                  className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   
                  focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0`}
                  {...register("discord")}
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 my-5 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black ">

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
                "Sign-Up"
              )}
            </button>
          </form>

          {isSubmitSuccessful && isSuccess && (
            <div className="mt-3 text-center text-sm text-green-500">
              {message || "Success. Message sent successfully"}
            </div>
          )}
          {isSubmitSuccessful && !isSuccess && (
            <div className="mt-3 text-center text-sm text-red-500">
              {message || "Something went wrong. Please try later."}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
