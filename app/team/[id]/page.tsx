"use client";
import { useEffect, useState } from "react";
import styles from "./team.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Team({ params }: { params: { id: string } }) {
  const router = useRouter();

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
        "1st Place in Google CODM BR Championship",
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

  useEffect(() => {
    if (params.id === "algo") {
      setTeamData(team.algo);
    } else if (params.id === "sand") {
      setTeamData(team.sand);
    } else if (params.id === "klay") {
      setTeamData(team.klay);
    } else if (params.id === "calix") {
      setTeamData(team.calix);
    } else if (params.id === "gryffin") {
      setTeamData(team.gryffin);
    } else {
      router.replace("/404");
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
              width={10000}
              height={10000}
              priority
            />
            {teamData?.txtLogo !== "" ? (
              <Image
                className={styles.txtImg}
                src={`/Images/${teamData?.txtLogo}`}
                alt="bg"
                width={10000}
                height={10000}
                priority
              />
            ) : (
              <p>
                <span>T.E.A.M</span> {teamData?.heading}
              </p>
            )}
          </div>
          <div className={styles.txts}>
            {teamData?.desc.map((item, i) => {
              return <p key={`key-${i}`}>{item}</p>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
