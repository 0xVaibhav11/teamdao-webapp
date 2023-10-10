"use client";
import Image from "next/image";
import styles from "../../page.module.scss";
import Logo from "../logo";
import Tabs from "../navTabs";
import CtaBtn from "../ctabtn";
import { FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";

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
            <FaSquareXTwitter />
            <FaSquareInstagram />
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
