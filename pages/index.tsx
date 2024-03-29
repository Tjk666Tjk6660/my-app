import { CSSProperties, useRef, useState } from "react";
import styles from "./index.module.scss";
import cls from "classnames";

const width = 416;
const height = 278;
const gap = 52;
const moveNum = width + gap;

const path1 = `M30 278C13.4314 278 0 264.569 0 248L0 154.823C0 150.668 0.994325 146.573 2.8999 142.881L4.28771 140.193C11.5832 126.058 11.157 109.176 3.1577 95.4273V95.4273C1.08953 91.8726 0 87.8335 0 83.7209L0 30C0 13.4315 13.4315 0 30 0H386C402.569 0 416 13.4315 416 30V83.7209C416 87.8335 414.91 91.8726 412.842 95.4273V95.4273C404.843 109.176 404.417 126.058 411.712 140.193L413.1 142.881C415.006 146.573 416 150.668 416 154.823V248C416 264.569 402.569 278 386 278H30Z"
`
export default function Home() {
  const [translate, setTranslate] = useState(0);
  const isOnLeft = translate === 0;
  const isOnRight = translate === -moveNum;

  return (

    <div className={`trendingNow w-[1356px]`}>
      <div className={`font-bold text-[20px] text-[#F1F1F1] mb-10`}>
        {"< / Trending Now >"}
      </div>
      <div className={styles.sliderOverflow}>
        <div
          className={cls("left-0 top-1/2", styles.sliderBtn, {
            [styles.hiddenBtn]: isOnLeft,
          })}
          onClick={(e) => {
            e.stopPropagation();
            if (!isOnLeft) {
              setTranslate(translate + moveNum);
            }
          }}
        >
          {"<"}
        </div>
        <div
          className={cls("right-0 top-1/2", styles.sliderBtn, {
            [styles.hiddenBtn]: isOnRight,
          })}
          onClick={(e) => {
            e.stopPropagation();
            if (!isOnRight) {
              setTranslate(translate - moveNum);
            }
          }}
        >
          {">"}
        </div>
        <div
          className={styles.slider}
          style={{ transform: `translateX(${translate}px)`, gap }}
        >
          <div className={cls(styles.card, styles.card1)}>
            <div className={styles.cardBackground}></div>
            <div
              className={cls(styles.cardContent)}
            >
              <div className="text-[16px] font-bold text-[#EDEDED] mt-8">
                Introduction to programming
              </div>
              <div className="mb-4 mt-4 border-2 border-[#676767] rounded-full w-[110px] h-[40px] font-normal text-[16px] cursor-pointer text-white text-center leading-[36px] hover:bg-[#676767]">
                Beginner
              </div>
              <p className="text-[#676767] text-[12px] font-normal h-[52px]">
                This course covers the most basic concepts in programming
                using Solidity as an example.
              </p>
              <div className="flex">
                <div className="flex-[2] text-[12px] leading-[36px]">
                  36 Hour
                </div>
                <div className="flex-[2] text-[12px] leading-[36px]">
                  5 Course
                </div>
                <div className="flex-[3] w-[140px] h-[36px] rounded-full bg-[rgba(42,42,42,0.7)] text-[#9EFA13] text-center leading-[36px] text-[10px] cursor-pointer  hover:bg-[rgba(42,42,42,1)]">
                  85% COMPLETED
                </div>
              </div>
            </div>
          </div>
          <div className={cls(styles.card, styles.card2)} >
            <div className={styles.cardBackground}></div>
            <div
              className={cls(styles.cardContent)}
            >
              <div className="text-[16px] font-bold text-[#EDEDED] mt-8">
                Introduction to programming
              </div>
              <div className="mb-4 mt-4 border-2 border-[#676767] rounded-full w-[110px] h-[40px] font-normal text-[16px] cursor-pointer text-white text-center leading-[36px] hover:bg-[#676767]">
                Beginner
              </div>
              <p className="text-[#676767] text-[12px] font-normal h-[52px]">
                This course covers the most basic concepts in programming
                using Solidity as an example.
              </p>
              <div className="flex">
                <div className="flex-[2] text-[12px] leading-[36px]">
                  36 Hour
                </div>
                <div className="flex-[2] text-[12px] leading-[36px]">
                  5 Course
                </div>
                <div className="flex-[3] w-[140px] h-[36px] rounded-full bg-[rgba(42,42,42,0.7)] text-[#9EFA13] text-center leading-[36px] text-[10px] cursor-pointer  hover:bg-[rgba(42,42,42,1)]">
                  85% COMPLETED
                </div>
              </div>
            </div>
          </div>
          <div className={cls(styles.card, styles.card3)}>
            <div className={styles.cardBackground}></div>
            <div
              className={cls(styles.cardContent)}

            >
              <div className="text-[16px] font-bold text-[#EDEDED] mt-8">
                Introduction to programming
              </div>
              <div className="mb-4 mt-4 border-2 border-[#676767] rounded-full w-[110px] h-[40px] font-normal text-[16px] cursor-pointer text-white text-center leading-[36px] hover:bg-[#676767]">
                Beginner
              </div>
              <p className="text-[#676767] text-[12px] font-normal h-[52px]">
                This course covers the most basic concepts in programming
                using Solidity as an example.
              </p>
              <div className="flex">
                <div className="flex-[2] text-[12px] leading-[36px]">
                  36 Hour
                </div>
                <div className="flex-[2] text-[12px] leading-[36px]">
                  5 Course
                </div>
                <div className="flex-[3] w-[140px] h-[36px] rounded-full bg-[rgba(42,42,42,0.7)] text-[#9EFA13] text-center leading-[36px] text-[10px] cursor-pointer  hover:bg-[rgba(42,42,42,1)]">
                  85% COMPLETED
                </div>
              </div>
            </div>
          </div>
          <div className={cls(styles.card, styles.card4)}>
            <div className={styles.cardBackground}></div>
            <div
              className={cls(styles.cardContent)}

            >
              <div className="text-[16px] font-bold text-[#EDEDED] mt-8">
                Introduction to programming
              </div>
              <div className="mb-4 mt-4 border-2 border-[#676767] rounded-full w-[110px] h-[40px] font-normal text-[16px] cursor-pointer text-white text-center leading-[36px] hover:bg-[#676767]">
                Beginner
              </div>
              <p className="text-[#676767] text-[12px] font-normal h-[52px]">
                This course covers the most basic concepts in programming
                using Solidity as an example.
              </p>
              <div className="flex">
                <div className="flex-[2] text-[12px] leading-[36px]">
                  36 Hour
                </div>
                <div className="flex-[2] text-[12px] leading-[36px]">
                  5 Course
                </div>
                <div className="flex-[3] w-[140px] h-[36px] rounded-full bg-[rgba(42,42,42,0.7)] text-[#9EFA13] text-center leading-[36px] text-[10px] cursor-pointer  hover:bg-[rgba(42,42,42,1)]">
                  85% COMPLETED
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
