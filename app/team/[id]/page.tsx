"use client";
import { useEffect, useState } from "react";
import styles from "./team.module.scss";
import Image from "next/image";

export default function Team({ params }: { params: { id: string } }) {
  interface TeamProps {
    id: String;
    heading: String;
    desc: String;
    btnTxt: String;
    teamLogo: String;
    txtLogo: String;
  }

  const team = {
    algo: {
      id: "algo",
      heading: "",
      desc: "1st place in the MOT Call of Duty",
      btnTxt: "More Info",
      teamLogo: "teamalgo.png",
      txtLogo: "algo-txt.png",
    },
    sand: {
      id: "sand",
      heading: " ",
      desc: "1st place in the Ronin Esports First Anniversary Tournament (March 2023)",
      btnTxt: "More Info",
      teamLogo: "teamsandbox.png",
      txtLogo: "sand-txt.png",
    },
    klay: {
      id: "klay",
      heading: " ",
      desc: "1st Place in the Ronin Esports First Anniversary Tournament (March 2023)",
      btnTxt: "More Info",
      teamLogo: "teamklay.png",
      txtLogo: "klay-txt.png",
    },
  };

  const [teamData, setTeamData] = useState<TeamProps>();

  useEffect(() => {
    if (params.id === "algo") {
      setTeamData(team.algo);
    } else if (params.id === "sand") {
      setTeamData(team.sand);
    } else if (params.id === "klay") {
      setTeamData(team.klay);
    }
  }, []);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.bg}>
          <Image
            className={styles.bgImg}
            src={"/Images/teamup-bg.png"}
            alt="header bg"
            width={"2000"}
            height={"2000"}
            blurDataURL="/ImgBlur/teamup-bg-small.png"
            loading="lazy"
          />

          <Image
            className={styles.foreground}
            src={"/Images/some-chars.png"}
            alt="foreground bg"
            width={"4120"}
            height={"1440"}
            priority
          />
        </div>

        <div className={styles.content}>
          <div className={styles.logo}>
            <Image
              className={styles.logoImg}
              src={`/Images/${teamData?.teamLogo}`}
              alt="bg"
              width={1000}
              height={1000}
              priority
            />
            <Image
              className={styles.txtImg}
              src={`/Images/${teamData?.txtLogo}`}
              alt="bg"
              width={1000}
              height={1000}
              priority
            />
          </div>
          <div className={styles.txts}>
            <p>{teamData?.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
