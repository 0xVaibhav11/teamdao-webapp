"use client";
import Image from "next/image";
import styles from "../../page.module.scss";
import Logo from "../logo";
import Tabs from "../navTabs";
import CtaBtn from "../ctabtn";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.fcontainer}>
      <div className={styles.left}>
        <div className={styles.logoContainer}>
          <Logo />
          {/* <p>
            Jl. Pengubengan Kauh No.78, Kerobokan Kelod, Kec. Kuta Utara,
            Kabupaten Badung, Bali 80361, Indonesia
          </p> */}
          <div className={styles.socials}>
            <Link href={"https://x.com/teamdaocom?s=21"} target="_blank">
            <FaXTwitter className={styles.svg} />
            </Link>
            <Link href={"https://instagram.com/teamdaoid?igshid=OGQ5ZDc2ODk2ZA=="} target="_blank">
            <FaInstagram className={styles.svg} />
            </Link>
          </div>
        </div>
        <div className={styles.links}>
          <a href="#top">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#our-team">PLAYERS</a>
          <a href="#bfs">COMPETE</a>
          <a href="">WHITEPAPER</a>
        </div>
      </div>
      <div className={styles.right}>
        <CtaBtn content={"JOIN THE DAO"} />
      </div>
    </div>
  );
}
