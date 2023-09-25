import Image from "next/image";
import styles from "../../page.module.scss";
import CtaBtn from "../ctabtn";
import Logo from "../logo";
import Link from "next/link";
import Tabs from "../navTabs";

import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export default function Header({ sectionInView }: { sectionInView: string }) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    animate("h1", { x: 0, opacity: 1 }, { delay: 0.25, duration: 0.5 });
    animate("p", { x: 0, opacity: 1 }, { delay: stagger(0.3), duration: 0.7 });
  }, [isInView]);
  return (
    <>
      <div className={styles.headerBg}>
        <div className={styles.overlay} />
        <Image
          src={"/Images/header-bg.png"}
          alt="header bg"
          width={"10000"}
          height={"10000"}
          blurDataURL="/ImgBlur/header-bg.png"
          priority
        />
      </div>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <Logo />
          <div className={styles.links}>
            <Tabs
              active={sectionInView === "header" ? true : false}
              href="#top"
            >
              HOME
            </Tabs>
            <Tabs
              active={sectionInView === "about" ? true : false}
              href="#about"
            >
              ABOUT
            </Tabs>
            <Tabs
              active={sectionInView === "our-team" ? true : false}
              href="#our-team"
            >
              GAMES/ESPORTS TEAM
            </Tabs>
            <Tabs active={sectionInView === "bfs" ? true : false} href="#bfs">
              BFS LEAGUE
            </Tabs>
          </div>
        </div>
        <CtaBtn content={"JOIN THE DAO"} />
      </nav>
      <div className={styles.hero}>
        <div className={styles.heroTxt}>
          <div className={styles.logo}>
            <img
              className={styles.logo}
              src="/Images/teamdao-logo.svg"
              alt="logo"
            />
          </div>
          <div ref={scope} className={styles.txts}>
            <h1>the #1 esports dao </h1>
            <p>
              TEAM DAO rigorously curates our list of games (web2 & web3) to
              ensure quality and sustainability.
            </p>
          </div>
          <CtaBtn content="JOIN THE DAO" />
        </div>
      </div>
    </>
  );
}
