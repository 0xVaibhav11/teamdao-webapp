"use client";
import Image from "next/image";
import styles from "../page.module.scss";

export default function Logo() {
  return (
    <img
      onClick={() => {
        alert("hi");
      }}
      className={styles.logo}
      src="/Images/teamdao-logo.svg"
      alt="logo"
    />
  );
}
