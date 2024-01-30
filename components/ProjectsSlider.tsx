"use client";
import { motion, useMotionValue } from "framer-motion";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { useEffect, useState } from "react";
import { projects } from "@/data/data";
import Image from "next/image";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;
const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
  duration: 5000,
};
const SLIDES_COUNT: number = Math.ceil(projects.length / 3);
const SwipeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const dragX = useMotionValue(0);
  // useEffect(() => {
  //   const intervalRef = setInterval(() => {
  //     const x = dragX.get();

  //     if (x === 0) {
  //       setCurrentIndex((pv) => {
  //         if (pv === SLIDES_COUNT - 1) {
  //           return 0;
  //         }
  //         return pv + 1;
  //       });
  //     }
  //   }, AUTO_DELAY);

  //   return () => clearInterval(intervalRef);
  // }, []);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER) {
      if (currentIndex === SLIDES_COUNT - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((pv) => pv + 1);
      }
    } else if (x >= DRAG_BUFFER && currentIndex > 0) {
      setCurrentIndex((pv) => pv - 1);
    }
  };

  return (
    <section className="relative overflow-hidden py-16 border-y border-y-shadow">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
          translateX: `-${currentIndex * 100}vw`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab slider items-center active:cursor-grabbing"
      >
        <Images currentIndex={currentIndex} />
      </motion.div>

      <Dots currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      <GradientEdges setCurrentIndex={setCurrentIndex} />
    </section>
  );
};

const Images = ({ currentIndex }: { currentIndex: number }) => {
  return (
    <>
      {Array.from({ length: SLIDES_COUNT }).map((_, idx) => {
        return (
          <motion.div
            key={idx}
            transition={SPRING_OPTIONS}
            className="w-screen shrink-0 rounded-xl object-cover"
          >
            <div className="container grid grid-cols-2 items-center gap-4">
              <div>
                <div className="w-full relative bg-shadow aspect-[1.4/1] rounded-xl overflow-hidden">
                  {projects.length > idx * 3 && (
                    <Image
                      alt={projects[idx * 3].title}
                      fill
                      src={projects[idx * 3].image}
                    />
                  )}
                </div>
              </div>
              <div className="space-y-4">
                <div className="w-full relative bg-shadow aspect-[1.4/1] rounded-xl overflow-hidden">
                  {projects.length > idx * 3 + 1 && (
                    <Image
                      alt={projects[idx * 3 + 1].title}
                      fill
                      src={projects[idx * 3 + 1].image}
                    />
                  )}
                </div>
                <div className="w-full relative bg-shadow aspect-[1.4/1] rounded-xl overflow-hidden">
                  {projects.length > idx * 3 + 2 && (
                    <Image
                      alt={projects[idx * 3 + 2].title}
                      fill
                      src={projects[idx * 3 + 2].image}
                    />
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

const Dots = ({
  currentIndex,
  setCurrentIndex,
}: {
  setCurrentIndex: (value: number) => void;
  currentIndex: number;
}) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {Array.from({ length: SLIDES_COUNT }).map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === currentIndex ? "bg-fade" : "bg-shadow"
            }`}
          />
        );
      })}
    </div>
  );
};

type SetCurrentIndexType = (
  value: number | ((prevIndex: number) => number)
) => void;

const GradientEdges = ({
  setCurrentIndex,
}: {
  setCurrentIndex: SetCurrentIndexType;
}) => {
  return (
    <>
      <button
        onClick={() => {
          setCurrentIndex((prev: number) => {
            return prev !== 0 ? prev - 1 : SLIDES_COUNT - 1;
          });
        }}
        className="absolute top-[50%] left-20 translate-y-[50%] flex w-12 h-12 bg-fade items-center opacity-50 hover:opacity-100 transition-all hover:scale-110 justify-center text-xl text-mainBg rounded-full"
      >
        <BiSolidLeftArrow />
      </button>
      <button
        onClick={() => {
          setCurrentIndex((prev) => {
            return prev !== SLIDES_COUNT - 1 ? prev + 1 : 0;
          });
        }}
        className="absolute top-[50%] right-20 translate-y-[50%] flex w-12 h-12 bg-fade items-center opacity-50 hover:opacity-100 transition-all hover:scale-110 justify-center text-xl text-mainBg rounded-full"
      >
        <BiSolidRightArrow />
      </button>
    </>
  );
};
export default SwipeCarousel;
