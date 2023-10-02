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
      desc: "",
      btnTxt: "More Info",
      teamLogo: "teamalgo.png",
      txtLogo: "algo-txt.png",
    },
    sand: {
      id: "sand",
      heading: " ",
      desc: " ",
      btnTxt: "More Info",
      teamLogo: "teamsandbox.png",
      txtLogo: "sand-txt.png",
    },
    klay: {
      id: "klay",
      heading: " ",
      desc: " ",
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
        <div className={styles.bg} />
        <h1>{`${params.id} = ${teamData?.id}`}</h1>
        <div className={styles.teamLogo}>
          <Image
            className={styles.logoImg}
            src={`/Images/${teamData?.teamLogo}`}
            alt="bg"
            width={100}
            height={100}
            priority
          />
        </div>
        <div className={styles.txtLogo}>
          <Image
            className={styles.txtImg}
            src={`/Images/${teamData?.txtLogo}`}
            alt="bg"
            width={100}
            height={100}
            priority
          />
        </div>
        <div className={styles.txts}></div>
      </div>
    </>
  );
}
