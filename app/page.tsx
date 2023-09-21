"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import Header from "./components/home/header";
import About from "./components/home/about";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [sectionInView, setSectionInView] = useState("");

  const headerRef = useRef<HTMLElement>(null);
  const isHeaderInView = useInView(headerRef, {
    margin: "-50% 0%",
  });

  const aboutRef = useRef<HTMLElement>(null);
  const isAboutInView = useInView(aboutRef, {
    margin: "-50% 0%",
  });

  const ourteamRef = useRef<HTMLElement>(null);
  const isOurteamInView = useInView(ourteamRef, {
    margin: "-50% 0%",
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
        <About />
      </section>
      <section ref={ourteamRef} id="our-team"></section>
      <section ref={bfsRef} id="bfs"></section>
      <section id="team-up">hi</section>
      <footer id="footer"></footer>
    </main>
  );
}
