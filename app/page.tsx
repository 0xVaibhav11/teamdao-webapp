import Image from "next/image";
import styles from "./page.module.scss";
import Header from "./components/home/header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <section id="about"></section>
      <section id="our-team"></section>
      <section id="bfs"></section>
      <section id="team-up"></section>
      <footer id="footer"></footer>
    </main>
  );
}
