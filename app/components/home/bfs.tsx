"use client";
import Image from "next/image";
import styles from "../../page.module.scss";

import { useEffect, useRef, useState } from "react";

export default function BfsSec() {
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
            <button>submit a application</button>
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
            <button>try out a team</button>
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
            <p>Amature and open to all</p>
            <button>join a team</button>
          </div>
        </div>
      </div>
      <div className={styles.foregroundBfs}>
        <h1>BATTLE FOR SUPERACY (BFS)</h1>
        <h3>our ESPORTS LEAGUE</h3>
        <p>
          <span>100</span> active competitive teams per BFS
        </p>
        <p>
          <span>8</span> bfs supreme leagues
        </p>
        <p>
          <span>weekly</span> bfs solo competitions
        </p>
      </div>
    </div>
  );
}
