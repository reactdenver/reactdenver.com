import styles from "./styles.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

export default function Layout({ children }) {
  return <div className="container">{children}</div>;
}
