import Image from "next/image";
import styles from "../page.module.scss";

export default function CtaBtn(props: any) {
  return (
    <div className={styles.cta}>
      <a
        href="https://t.me/BattleForSupremacyTV"
        target="_blank"
        className={styles.ctaBtn}
      >
        <div className={styles.bg} />
        <div className={styles.shine} />
        <span>JOIN NOW</span>
      </a>
    </div>
  );
}
