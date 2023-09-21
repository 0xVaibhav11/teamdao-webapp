"use client";
import Image from "next/image";
import styles from "../../page.module.scss";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import {
  RefObject,
  useEffect,
  useRef,
  useState,
  FunctionComponent,
  MutableRefObject,
} from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

interface Props {
  sectionInView: string;
  // containerRef: RefObject<HTMLElement>;
}

export default function About<FunctionComponent>({
  sectionInView,
}: // containerRef,
Props) {
  const [layerInView, setLayerInView] = useState("1st");
  const [scrollNum, setScrollNum] = useState(0);
  const parallaxRef = useRef<IParallax>(null);
  const container = parallaxRef.current?.container as RefObject<HTMLElement>;
  const indicatorCount = ["1st", "2nd", "3rd", "4th"];
  const { scrollY } = useScroll({
    container: container,
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollNum(latest);
  });

  useEffect(() => {
    //100% = 2262.39990234375
    const fullScroll = 2262.39990234375;
    const progress = (scrollNum / fullScroll) * 100;
    if (progress <= 25) {
      setLayerInView(indicatorCount[0]);
    } else if (progress <= 50) {
      setLayerInView(indicatorCount[1]);
    } else if (progress <= 75) {
      setLayerInView(indicatorCount[2]);
    } else if (progress <= 100) {
      setLayerInView(indicatorCount[3]);
    }
  }, [scrollNum]);

  return (
    <>
      <Parallax
        ref={parallaxRef}
        className={styles.slider}
        style={{
          overflow: sectionInView === "about" ? "auto" : "hidden",
        }}
        pages={4}
      >
        <ParallaxLayer sticky={{ start: 0, end: 1 }}>
          <div className={styles.bg}>
            <Image
              src={"/Images/about1-bg.png"}
              alt="bg"
              width={10000}
              height={10000}
              priority
              blurDataURL="/Images/about1-bg-small.png"
            />
            <div className={styles.overlay} />
          </div>
          <div className={styles.content}>
            <div className={styles.left}>
              <Image
                src={"/Images/char1.png"}
                alt="bg"
                width={10000}
                height={10000}
                priority
                blurDataURL="/Images/char1-small.png"
              />
              <div className={styles.txts}>
                <p>what is</p>
                <h1>T.E.A.M DAO</h1>
              </div>
            </div>
            <div className={styles.right}>
              <h1>TEAM DAO IS A GLOBAL ESPORTS BRAND</h1>
              <p>We are stable long term, Entertainment Brnad</p>
              <p className={styles.quote}>`&quot;The NBA for Esports`&quot;</p>
              <p>
                We are well positioned to capture the growth of gaming in
                esports, gaming marketplaces, and web3 gaming verticals
              </p>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 1, end: 2 }}>
          <div className={styles.bg}>
            <Image
              src={"/Images/about2-bg.png"}
              alt="bg"
              width={10000}
              height={10000}
              priority
              blurDataURL="/Images/about2-bg-small.png"
            />
            <div className={styles.overlay} />
          </div>
          <div className={styles.content}>
            <div className={styles.left}>
              <Image
                src={"/Images/char2.png"}
                alt="bg"
                width={10000}
                height={10000}
                priority
                blurDataURL="/Images/char2-small.png"
              />
              <div className={styles.txts}>
                <p>what is</p>
                <h1>T.E.A.M DAO</h1>
              </div>
            </div>
            <div className={styles.right}>
              <h1>TEAM DAO DOMINATES THE MOBILE GAMING ESPORTS NICHE</h1>
              <div className={styles.graph}>
                <Image
                  src={"/Images/graph-cross.svg"}
                  alt="bg"
                  width={1000}
                  height={1000}
                  priority
                />
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 2, end: 3 }}>
          <div className={styles.bg}>
            <Image
              src={"/Images/about1-bg.png"}
              alt="bg"
              width={10000}
              height={10000}
              priority
              blurDataURL="/Images/about1-bg-small.png"
            />
            <div className={styles.overlay} />
          </div>
          <div className={styles.content}>
            <div className={styles.left}>
              <Image
                src={"/Images/char1.png"}
                alt="bg"
                width={10000}
                height={10000}
                priority
                blurDataURL="/Images/char1-small.png"
              />
              <div className={styles.txts}>
                <p>what is</p>
                <h1>T.E.A.M DAO</h1>
              </div>
            </div>
            <div className={styles.right}>
              <h1>TEAM DAO IS A GLOBAL ESPORTS BRAND</h1>
              <p>We are stable long term, Entertainment Brnad</p>
              <p className={styles.quote}>`&quot;The NBA for Esports`&quot;</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
                assumenda quasi nesciunt itaque hic ea perferendis aspernatur,
              </p>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 3, end: 4 }}>
          <div className={styles.bg}>
            <Image
              src={"/Images/about2-bg.png"}
              alt="bg"
              width={10000}
              height={10000}
              priority
              blurDataURL="/Images/about2-bg-small.png"
            />
            <div className={styles.overlay} />
          </div>
          <div className={styles.content}>
            <div className={styles.left}>
              <Image
                src={"/Images/char2.png"}
                alt="bg"
                width={10000}
                height={10000}
                priority
                blurDataURL="/Images/char2-small.png"
              />
              <div className={styles.txts}>
                <p>what is</p>
                <h1>T.E.A.M DAO</h1>
              </div>
            </div>
            <div className={styles.right}>
              <h1>Lorem ipsum dolor sit amet consectetur.</h1>
              <div className={styles.graph}>
                <Image
                  src={"/Images/graph-cross.svg"}
                  alt="bg"
                  width={1000}
                  height={1000}
                  priority
                />
              </div>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
      <div className={styles.indicatorContainer}>
        {indicatorCount.map((i) => {
          return (
            <div
              key={i}
              id={i}
              className={`${styles.indicator} ${
                layerInView === i ? styles.activeInd : ""
              }`}
            >
              <div className={styles.outer}>
                <div className={styles.inner} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}