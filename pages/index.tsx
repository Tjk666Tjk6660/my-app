import { useRef, useState } from "react";
import styles from "./index.module.scss";
import cls from "classnames";
const width = 416;
const height = 278;
const element = new Array(4).fill("");
const gap = 52;
const moveNum = width + gap;
export default function Home() {
  const [translate, setTranslate] = useState(0);
  const isOnLeft = translate === 0;
  const isOnRight = translate === -moveNum;

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center bg-[rgb(3,3,3)]`}
    >
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
            <div className={`${styles.card}`}>
              <div
                className={cls(styles.cardContent)}
                style={{ width, height }}
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
            <div className={cls(styles.card)}>
              <div
                className={cls(styles.cardContent)}
                style={{ width, height }}
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
            <div className={`${styles.card}`}>
              <div
                className={cls(styles.cardContent)}
                style={{ width, height }}
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
            <div className={`${styles.card}`}>
              <div
                className={cls(styles.cardContent)}
                style={{ width, height }}
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
    </main>
  );
}
