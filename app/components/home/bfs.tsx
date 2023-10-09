"use client";
import Image from "next/image";
import styles from "../../page.module.scss";

import { useEffect, useRef, useState } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import Link from "next/link";

export default function BfsSec() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  const [hover, setHover] = useState<string>("");

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
            <Link
              target="_blank"
              href={"https://t.me/BFSalphaBot"}
              className={styles.button}
            >
              Apply Now
              {hover === "supreme" ? (
                <div className={styles.onHover}>
                  <Image
                    src={"/Images/Supreme.png"}
                    alt="bg"
                    width={479 / 2}
                    height={748 / 2}
                    priority
                  />
                </div>
              ) : null}
              <div
                role="button"
                onMouseEnter={() => {
                  setHover("supreme");
                }}
                onMouseLeave={() => {
                  setHover("");
                }}
                className={styles.info}
              >
                i
              </div>
            </Link>
            <div
              role="button"
              onTouchStart={() => {
                setHover("supreme");
              }}
              onTouchEnd={() => {
                setHover("");
              }}
              className={styles.infoMobile}
            >
              i
            </div>
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
            <p>Competition Ready</p>
            <Link
              target="_blank"
              href={"https://t.me/BFSalphaBot"}
              className={styles.button}
            >
              Play Now
              {hover === "super" ? (
                <div className={styles.onHover}>
                  <Image
                    className={styles.hoverimg}
                    src={"/Images/Super.png"}
                    alt="bg"
                    width={487 / 2}
                    height={167 / 2}
                    priority
                  />
                </div>
              ) : null}
              <div
                role="button"
                onMouseEnter={() => {
                  setHover("super");
                }}
                onMouseLeave={() => {
                  setHover("");
                }}
                className={styles.info}
              >
                i
              </div>
            </Link>
            <div
              role="button"
              onTouchStart={() => {
                setHover("super");
              }}
              onTouchEnd={() => {
                setHover("");
              }}
              className={styles.infoMobile}
            >
              i
            </div>
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
            <p>Open to all</p>
            <Link
              target="_blank"
              href={"https://t.me/BFSalphaBot"}
              className={styles.button}
            >
              Join a team
              {hover === "standard" ? (
                <div className={styles.onHover}>
                  <Image
                    src={"/Images/Standard.png"}
                    alt="bg"
                    width={488 / 2}
                    height={146 / 2}
                    priority
                  />
                </div>
              ) : null}
              <div
                role="button"
                onMouseEnter={() => {
                  setHover("standard");
                }}
                onMouseLeave={() => {
                  setHover("");
                }}
                className={styles.info}
              >
                i
              </div>
            </Link>
            <div
              role="button"
              onTouchStart={() => {
                setHover("standard");
              }}
              onTouchEnd={() => {
                setHover("");
              }}
              className={styles.infoMobile}
            >
              i
            </div>
          </div>
        </div>
      </div>
      <div ref={scope} className={styles.foregroundBfs}>
        <h1>BATTLE FOR SUPREMACY(BFS)</h1>
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
