"use client";
import Image from "next/image";
import styles from "../../page.module.scss";

import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CtaBtn from "../ctabtn";

export default function TeamUpSec() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    animate("h1", { y: 75, opacity: 0 });
    animate("p", { y: 75, opacity: 0 });
    if (isInView) {
      animate("h1", { y: 0, opacity: 1 }, { delay: 0.25, duration: 0.5 });
      animate(
        "p",
        { y: 0, opacity: 1 },
        { delay: stagger(0.3), duration: 0.7 }
      );
    }
  }, [isInView]);

  return (
    <div className={styles.tcontainer}>
      <div className={styles.bg}>
        <Image
          className={styles.bgImg}
          src={"/Images/teamup-bg.png"}
          alt="header bg"
          width={"2000"}
          height={"2000"}
          blurDataURL="/ImgBlur/teamup-bg-small.png"
          loading="lazy"
        />

        <Image
          className={styles.foreground}
          src={"/Images/some-chars.png"}
          alt="foreground bg"
          width={"4120"}
          height={"1440"}
          priority
        />
      </div>
      <div ref={scope} className={styles.tcontent}>
        <h1>TEAM UP</h1>
        <p>BE PART OF THE TOP WEB3 GAMING DAO AND COMMUNITY</p>
        <p>MADE BY GAMERS, FOR GAMERS.</p>
        <CtaBtn content={"JOIN THE DAO"} />
      </div>
    </div>
  );
}
