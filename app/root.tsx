import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  Link,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Nav, { links as navLinks } from "./components/nav";
import Layout, { links as layoutLinks } from "~/components/layout";
import Footer from "~/components/footer";
import normalize from "~/styles/normalize.css";
import styles from "~/styles/index.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "React Denver",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [
    ...layoutLinks(),
    ...navLinks(),
    {
      rel: "stylesheet",
      href: normalize,
    },
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Inter",
    },
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="root__layout__wrapper">
          <Nav />
          <Layout>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </Layout>
          <Footer />
        </div>
      </body>
    </html>
  );
}
