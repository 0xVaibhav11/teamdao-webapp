"use client";
import Image from "next/image";
import styles from "../../page.module.scss";

import { useEffect, useRef, useState } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";

export default function BfsSec() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    animate("h1", { x: -75, opacity: 0 });
    animate("h3", { x: -75, opacity: 0 });
    animate("p", { x: -75, opacity: 0 });
    if (isInView) {
      animate("h1", { x: 0, opacity: 1 }, { delay: 0.25, duration: 0.5 });
      animate("h3", { x: 0, opacity: 1 }, { delay: 0.25, duration: 0.5 });
      animate(
        "p",
        { x: 0, opacity: 1 },
        { delay: stagger(0.3), duration: 0.7 }
      );
    }
  }, [isInView]);
  return (
    <div className={styles.container}>
      <div className={styles.bfsbg}>
        <div className={styles.overlay} />
        <div className={styles.card}>
          <Image
            src={"/Images/bfs1-bg.png"}
            alt="bg"
            width={1000}
            height={1000}
            priority
          />
          <div className={styles.txt}>
            <h1>Supreme</h1>
            <p>Professional Team</p>
            <button>Submit a application</button>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src={"/Images/bfs2-bg.png"}
            alt="bg"
            width={1000}
            height={1000}
            priority
          />
          <div className={styles.txt}>
            <h1>Super</h1>
            <p>Trainee Team</p>
            <button>Try out a team</button>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src={"/Images/bfs3-bg.png"}
            alt="bg"
            width={1000}
            height={1000}
            priority
          />
          <div className={styles.txt}>
            <h1>Standard</h1>
            <p>Amateurs and open to all</p>
            <button>Join a team</button>
          </div>
        </div>
      </div>
      <div ref={scope} className={styles.foregroundBfs}>
        <h1>BATTLE FOR SUPEREMACY(BFS)</h1>
        <h3>our ESPORTS LEAGUE</h3>
        <p>
          <span>8</span> BFS Seasons
        </p>
        <p>
          <span>100+</span> Active Teams per season
        </p>
        <p>
          <span>1,500+</span> Active Players per season
        </p>
      </div>
    </div>
  );
}
