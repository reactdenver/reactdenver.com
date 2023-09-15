import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Image from "next/image";
import netlifyImage from "@/components/netlify_icon-transparent.png";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-sm text-center">
        Copyright © {new Date().getFullYear()} {props?.copyright}. All rights
        reserved.
      </div>
      <div className="mt-2 text-sm text-center text-gray-500 dark:text-gray-600">
        <a href="https://www.netlify.com/" rel="noopener" target="_blank">
          <Image
            src={netlifyImage}
            height={33}
            width={33}
            alt="netlify call to action"
            className="inline relative -top-1"
          />
          Hosted by Netlify
        </a>
      </div>
      <div className="flex items-center justify-center mt-2">
        <ThemeSwitch />
      </div>
    </Container>
  );
}
