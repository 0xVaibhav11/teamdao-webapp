"use client";
import Image from "next/image";
import styles from "../../page.module.scss";
import ArraySubsetComponent from "../infiniteSubset";

export default function OurteamSec() {
  const crslData = [
    { id: 1, content: "hello1" },
    { id: 2, content: "hello2" },
    { id: 3, content: "hello3" },
    { id: 4, content: "hello4" },
    { id: 5, content: "hello5" },
  ];

  const largeArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
        <div className={styles.crsl}>
          <div className={styles.wrapper}>
            {crslData.map((item) => {
              return (
                <>
                  <div key={item.id} className={styles.card}>
                    <div className={styles.cardbg}></div>
                    <div className={styles.contents}>
                      <div className={styles.img}>
                        <div className={styles.topImg}></div>
                        <div className={styles.botttomImg}></div>
                      </div>
                      <div className={styles.txts}>
                        <h1> First Place</h1>
                        <p>For cod international tournament</p>
                      </div>
                      <div className={styles.ctabtn}>
                        <p>more info</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className={styles.indicator}></div>
        </div>

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
          I
        </div>
      </div>
    </>
  );
}
