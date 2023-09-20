"use client";

import Image from "next/image";
import styles from "../../page.module.scss";
import CtaBtn from "../ctabtn";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className={styles.header} id="header">
        <div className={styles.headerBg}>
          <div className={styles.overlay} />
          <Image
            src={"/Images/header-bg.png"}
            alt="header bg"
            width={"10000"}
            height={"10000"}
            priority
          />
        </div>
        <nav className={styles.nav}>
          <div className={styles.left}>
            <img
              onClick={() => {
                alert("hi");
              }}
              className={styles.logo}
              src="/Images/teamdao-logo.svg"
              alt="logo"
            />
            <div className={styles.links}>
              <div
                className={styles.active}
                onClick={() => {
                  scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                HOME
              </div>
              <a href="#about">ABOUT</a>
              <a href="#our-team">GAMES/ESPORTS TEAM</a>
              <a href="#bfs">BFS LEAGUE</a>
            </div>
          </div>
          <CtaBtn content={"JOIN THE DAO"} />
        </nav>
      </header>
    </>
  );
}
