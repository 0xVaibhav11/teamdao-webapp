"use client";
import Image from "next/image";
import styles from "../../page.module.scss";
import ArraySubsetComponent from "../infiniteSubset";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";

export default function OurteamSec() {
  const crslData = [
    {
      id: "algo",
      heading: "First Place",
      desc: "For call of duty international tournament",
      btnTxt: "more info",
      teamLogo: "teamalgo.png",
      txtLogo: "algo-txt.png",
    },
    {
      id: "algo",
      heading: "First Place",
      desc: "For call of duty international tournament",
      btnTxt: "more info",
      teamLogo: "teamalgo.png",
      txtLogo: "algo-txt.png",
    },
    {
      id: "algo",
      heading: "First Place",
      desc: "For call of duty international tournament",
      btnTxt: "more info",
      teamLogo: "teamalgo.png",
      txtLogo: "algo-txt.png",
    },
    {
      id: "snad",
      heading: "First Place",
      desc: "For call of duty international tournament",
      btnTxt: "more info",
      teamLogo: "teamsandbox.png",
      txtLogo: "sand-txt.png",
    },
    {
      id: "klay",
      heading: "First Place",
      desc: "For call of duty international tournament",
      btnTxt: "more info",
      teamLogo: "teamklay.png",
      txtLogo: "klay-txt.png",
    },
    {
      id: "klay",
      heading: "First Place",
      desc: "For call of duty international tournament",
      btnTxt: "more info",
      teamLogo: "teamklay.png",
      txtLogo: "klay-txt.png",
    },
    {
      id: "klay",
      heading: "First Place",
      desc: "For call of duty international tournament",
      btnTxt: "more info",
      teamLogo: "teamklay.png",
      txtLogo: "klay-txt.png",
    },
  ];

  const crslRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className={styles.bg}>
        <Image
          src={"/Images/pro-players.png"}
          alt="bg"
          width={10000}
          height={10000}
          priority
          blurDataURL="/Images/pro-players-small.png"
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <motion.div ref={crslRef} className={styles.crsl}>
          <motion.div
            whileTap={{ cursor: "grabbing" }}
            drag="x"
            dragConstraints={crslRef}
            className={styles.wrapper}
          >
            {crslData.map((item, i) => {
              return (
                <div key={`key-${i}`} className={styles.card}>
                  <div className={styles.cardbg} />
                  <div className={styles.contents}>
                    <div className={styles.img}>
                      <Image
                        className={styles.logoImg}
                        src={`/Images/${item.teamLogo}`}
                        alt="bg"
                        width={100}
                        height={100}
                        priority
                      />
                      <Image
                        className={styles.txtImg}
                        src={`/Images/${item.txtLogo}`}
                        alt="bg"
                        width={100}
                        height={100}
                        priority
                      />
                    </div>
                    <div className={styles.cardtxt}>
                      <h1>{item.heading}</h1>
                      <p>{item.desc}</p>
                    </div>
                    <div className={styles.ctabtn}>
                      <p>{item.btnTxt}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
          <div className={styles.indicator}></div>
        </motion.div>

        <div className={styles.txts}>
          <h1>our pro teams</h1>
          <p>
            <span>300k+</span>
            follower across all players
          </p>
          <p>
            <span>1500+</span>
            active players in 70 contries
          </p>
        </div>
      </div>
    </>
  );
}
