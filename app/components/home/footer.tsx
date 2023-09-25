"use client";
import Image from "next/image";
import styles from "../../page.module.scss";
import Logo from "../logo";
import Tabs from "../navTabs";
import CtaBtn from "../ctabtn";

export default function Footer() {
  return (
    <div className={styles.fcontainer}>
      <div className={styles.left}>
        <div className={styles.logoContainer}>
          <Logo />
          <p>
            Jl. Pengubengan Kauh No.78, Kerobokan Kelod, Kec. Kuta Utara,
            Kabupaten Badung, Bali 80361, Indonesia
          </p>
        </div>
        <div className={styles.links}>
          <a href="#top">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#our-team">GAMES/ESPORTS TEAM</a>
          <a href="#bfs">BFS LEAGUE</a>
        </div>
      </div>
      <div className={styles.right}>
        <CtaBtn content={"JOIN THE DAO"} />
      </div>
    </div>
  );
}
