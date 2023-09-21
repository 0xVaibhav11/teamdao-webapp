"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import Header from "./components/home/header";
import About from "./components/home/about";
import OurteamSec from "./components/home/ourteam";
import TeamUpSec from "./components/home/teamup";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import BfsSec from "./components/home/bfs";
import Footer from "./components/home/footer";

export default function Home() {
  const [sectionInView, setSectionInView] = useState("");

  const headerRef = useRef<HTMLElement>(null);
  const isHeaderInView = useInView(headerRef, {
    margin: "-2% 0%",
  });

  const aboutRef = useRef<HTMLElement>(null);
  const isAboutInView = useInView(aboutRef, {
    margin: "-2% 0%",
  });

  const ourteamRef = useRef<HTMLElement>(null);
  const isOurteamInView = useInView(ourteamRef, {
    margin: "-20% 0%",
  });

  const bfsRef = useRef<HTMLElement>(null);
  const isBfsInView = useInView(bfsRef, {
    margin: "-50% 0%",
  });

  useEffect(() => {
    if (isHeaderInView) {
      setSectionInView("header");
    } else if (isAboutInView) {
      setSectionInView("about");
    } else if (isOurteamInView) {
      setSectionInView("our-team");
    } else if (isBfsInView) {
      setSectionInView("bfs");
    } else {
      setSectionInView("");
    }
  }, [isBfsInView, isHeaderInView, isOurteamInView, isAboutInView]);

  useEffect(() => {
    console.log("section in view", sectionInView);
  }, [sectionInView]);

  return (
    <main className={styles.main}>
      <header ref={headerRef} className={styles.header} id="top">
        <Header sectionInView={sectionInView} />
      </header>
      <section ref={aboutRef} className={styles.about} id="about">
        <About sectionInView={sectionInView} />
      </section>
      <section className={styles.ourTeam} ref={ourteamRef} id="our-team">
        <OurteamSec />
      </section>
      <section className={styles.bfs} ref={bfsRef} id="bfs">
        <BfsSec />
      </section>
      <section className={styles.teamup} id="team-up">
        <TeamUpSec />
      </section>
      <footer className={styles.footer} id="footer">
        <Footer />
      </footer>
    </main>
  );
}
