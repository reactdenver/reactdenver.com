import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getEventMdxListItems } from "~/utils/mdx";

export default function talk() {
  return (
    <div>
      <a>submit a talk</a>
    </div>
  );
}
