import Link from "next/link";

import { Github, Youtube } from "lucide-react";

export default function SocialLinks() {
  return (
    <section className="flex justify-center space-x-8 mb-4">
      <Link
        aria-label="GitHub"
        href="https://github.com/reactdenver/reactdenver.com"
        target="_blank"
        rel="noopener"
        title="https://github.com/reactdenver/reactdenver.com"
        className="focus-visible:text-indigo-500 hover:text-indigo-500"
      >
        <Github />
      </Link>
      <Link
        aria-label="YouTube"
        href="https://www.youtube.com/c/reactdenver"
        target="_blank"
        rel="noopener"
        title="https://www.youtube.com/c/reactdenver"
        className="focus-visible:text-indigo-500 hover:text-indigo-500"
      >
        <Youtube />
      </Link>
    </section>
  );
}
