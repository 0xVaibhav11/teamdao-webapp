"use client";
import Image from "next/image";
import styles from "../../page.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function OurteamSec() {
  const router = useRouter();

  const crslData = [
    {
      id: "algo",
      heading: "",
      desc: "",
      btnTxt: "More Info",
      teamLogo: "teamalgo.png",
      txtLogo: "algo-txt.png",
    },
    {
      id: "sand",
      heading: " ",
      desc: " ",
      btnTxt: "More Info",
      teamLogo: "teamsandbox.png",
      txtLogo: "sand-txt.png",
    },
    {
      id: "klay",
      heading: " ",
      desc: " ",
      btnTxt: "More Info",
      teamLogo: "teamklay.png",
      txtLogo: "klay-txt.png",
    },
    {
      id: "calix",
      heading: "Calix",
      desc: " ",
      btnTxt: "More Info",
      teamLogo: "teamcalix.png",
      txtLogo: "",
    },
    {
      id: "gryffin",
      heading: "Gryffin",
      desc: " ",
      btnTxt: "More Info",
      teamLogo: "teamgryffin.png",
      txtLogo: "",
    },
  ];

  interface TeamProps {
    id: String;
    heading: String;
    desc: Array<String>;
    btnTxt: String;
    teamLogo: String;
    txtLogo: String;
  }

  const team = {
    algo: {
      id: "algo",
      heading: "",
      desc: ["1st place in the MOT Call of Duty International Tournament"],
      btnTxt: "More Info",
      teamLogo: "teamalgo.png",
      txtLogo: "algo-txt.png",
    },
    sand: {
      id: "sand",
      heading: " ",
      desc: [
        "1st place in the Ronin Esports First Anniversary Tournament (March 2023)",
      ],
      btnTxt: "More Info",
      teamLogo: "teamsandbox.png",
      txtLogo: "sand-txt.png",
    },
    klay: {
      id: "klay",
      heading: " ",
      desc: [
        "1st Place in the Ronin Esports First Anniversary Tournament (March 2023)",
      ],
      btnTxt: "More Info",
      teamLogo: "teamklay.png",
      txtLogo: "klay-txt.png",
    },
    calix: {
      id: "calix",
      heading: "Calix",
      desc: [
        "#1 Team in India",
        "#1 CODM Team in India",
        "1st Place in Googly CODM BR Championship",
        "1st Place in NHK Winter Royale",
        "Fan fav team with most influential players",
      ],
      btnTxt: "More Info",
      teamLogo: "teamcalix.png",
      txtLogo: "",
    },
    gryffin: {
      id: "gryffin",
      heading: "Gryffin",
      desc: [
        "Prize winning on track to reach $50k+ (team formed in Q4 2022)",
        "1st Place in FIKSI Warmadewa University Cup, LPD League, Khe Entertainment Cup, Exhibition Esports tournaments, Infobank Tournaments",
      ],
      btnTxt: "More Info",
      teamLogo: "teamgryffin.png",
      txtLogo: "",
    },
  };

  const [teamData, setTeamData] = useState<TeamProps>();
  const [teamId, setTeamId] = useState("");
  const [modelPop, setModelPop] = useState<Boolean>(false);

  useEffect(() => {
    if (teamId === "algo") {
      setTeamData(team.algo);
    } else if (teamId === "sand") {
      setTeamData(team.sand);
    } else if (teamId === "klay") {
      setTeamData(team.klay);
    } else if (teamId === "calix") {
      setTeamData(team.calix);
    } else if (teamId === "gryffin") {
      setTeamData(team.gryffin);
    } else {
      setModelPop(false);
    }
  }, [modelPop, teamId]);

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
      {modelPop === true ? (
        <>
          <div className={styles.modelWrap}>
            <div
              onClick={() => {
                setModelPop(false);
              }}
              className={styles.overlay}
            />
            <div className={styles.model}>
              <h1>Achievements</h1>
              <div className={styles.txts}>
                {teamData?.desc.map((item, i) => {
                  return <p key={`key-${i}`}>{item}</p>;
                })}
              </div>
            </div>
          </div>
        </>
      ) : null}

      <div className={styles.content}>
        <motion.div ref={crslRef} className={styles.crsl}>
          <motion.div
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
                      {item.txtLogo !== "" ? (
                        <Image
                          className={styles.txtImg}
                          src={`/Images/${item.txtLogo}`}
                          alt="bg"
                          width={100}
                          height={100}
                          priority
                        />
                      ) : (
                        <p>
                          T.E.A.M{" "}
                          <span className={`${item.id}`}>
                            {item.heading.toLocaleUpperCase()}
                          </span>
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => {
                        setTeamId(item.id);
                        setModelPop(true);
                      }}
                      className={styles.ctabtn}
                    >
                      <a>{item.btnTxt}</a>
                    </button>
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
            <span>300K+ </span>
            Followers across all players
          </p>
          <p>
            <span>1,500+ </span>
            Active players in 70 countries
          </p>
        </div>
      </div>
    </>
  );
}
