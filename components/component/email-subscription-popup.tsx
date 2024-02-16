"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function EmailSubscriptionPopup() {
  const [open, setOpen] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  async function handleSubmitEmail(data) {
    await fetch("/api/email-subscription", {
      method: "POST",
      body: JSON.stringify({
        name: "",
        email: data.emailAddress,
        tags: ["home_page"],
      }),
    });
  }

  return (
    open && (
      <div className="fixed z-50 bottom-0 right-0 mb-4 mr-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg md:w-96 max-sm:w-[calc(100%-2rem)] w-96 max-w-full p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Subscribe</h2>
          <Button size="sm" variant="ghost" onClick={() => setOpen(false)}>
            Dismiss
          </Button>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          Stay updated with our latest news and updates. Enter your email below
          to subscribe:
        </p>
        {isSubmitSuccessful ? (
          <p className="text-gray-600 dark:text-gray-300">
            Thank you! Your email address has been added to the list.
          </p>
        ) : (
          <form
            className="flex space-x-2"
            onSubmit={handleSubmit(handleSubmitEmail)}
          >
            <Input
              className="flex-1"
              placeholder="Enter your email"
              required
              type="email"
              {...register("emailAddress", {
                required: "Enter your email",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email",
                },
              })}
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
            >
              Subscribe
            </Button>
          </form>
        )}
      </div>
    )
  );
}
