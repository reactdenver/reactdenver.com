import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Image from "next/image";
import { myLoader } from "@/utils/all";
import VercelLogo from "../public/img/vercel.svg";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-sm text-center">
        Copyright © {new Date().getFullYear()} {props?.copyright}. All
        rights reserved.
      </div>
      <div className="mt-1 text-sm text-center text-gray-500 dark:text-gray-600">
        Made by{" "}
        <a
          href="https://www.web3templates.com/?ref=stablo-template"
          rel="noopener"
          target="_blank">
          Web3Templates
        </a>
      </div>
      <div className="flex items-center justify-center mt-2">
        <ThemeSwitch />
      </div>
    </Container>
  );
}
