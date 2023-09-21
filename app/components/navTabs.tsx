import { ReactNode } from "react";
import styles from "../page.module.scss";
interface Props {
  children: string;
  href: string;
  active?: boolean;
}

export default function Tabs({ ...props }: Props) {
  const { children, href, active } = props;
  return (
    <a className={active ? styles.active : ""} href={href}>
      {children}
    </a>
  );
}
