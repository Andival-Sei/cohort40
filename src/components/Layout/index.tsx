import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./Layout.module.scss";

/**
 * Базовый каркас страницы: шапка, контент через <Outlet />, подвал.
 */
export default function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
